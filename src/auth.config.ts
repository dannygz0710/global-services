
import NextAuth,{ type  NextAuthConfig }  from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcryptjs from 'bcryptjs'; 
import prisma from './lib/prisma';

 
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
  },
  providers: [
  
    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);


          if ( !parsedCredentials.success ) return null;

          const { email, password } = parsedCredentials.data;


          // Buscar el correo
          const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
          if ( !user ) return null;

          // Comparar las contraseñas
          if( !bcryptjs.compareSync( password, user.password ) ) return null;


          // Regresar el usuario sin el password
        //   const { password: _, ...rest } = user;
        //  console.log(user)
          return user;
      },
    }),


  ],
};

export const { signIn, signOut, auth } = NextAuth(authConfig);