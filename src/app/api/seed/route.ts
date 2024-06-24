import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs'; 




export async function GET(request: Request) { 
   await  prisma.user.deleteMany();
   await prisma.user.createMany({
    
   data:[
      {email: 'dannygz0710@gmail.com', password:bcryptjs.hashSync('123456',10)},
      {email: 'stephanielr0710@gmail.com', password:bcryptjs.hashSync('123456',10)},
      // { name: 'danny', address:'1016 reach ln', phone:'6159470623',email:'dannygz0710@gmail.com,', subject:'looking', message:'hola',},
      // { name: 'stephanie', address:'1016 reach ln', phone:'6159470622',email:'dannygz0710@gmail.com,', subject:'looking', message:'dia',},
      // { name: 'hannah', address:'1016 reach ln', phone:'6159470623',email:'dannygz0710@gmail.com,', subject:'looking', message:'trabajar',},
      // { name: 'paola love', address:'1016 reach ln', phone:'6159470623',email:'dannygz0710@gmail.com,', subject:'looking', message:'comer',},
      // { name: 'gary wuao', address:'100 burtons', phone:'615947056',email:'dannygz0710@gmail.com,', subject:'looking', message:'studiar',},
   ]
   })
 
return NextResponse.json({ message: 'Seed executed', complete: true});
}