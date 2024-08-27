import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs'; 




export async function GET(request: Request) { 

   await prisma.user.createMany({
    
   data:[
      {email:'dannygz0710@gmail.com', password:bcryptjs.hashSync('123456',10)},
      {email:'stephanielr0710@gmail.com', password:bcryptjs.hashSync('123456',10)},
   ]
   })
 
return NextResponse.json({ message: 'Seed executed', complete: true});
}