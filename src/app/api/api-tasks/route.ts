import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'
import * as yup from 'yup';


type Segments = {
  params: {
    id: string
  }
}



export async function GET(request: Request) {
    
    
    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10';
    const skip = searchParams.get('skip') ?? '0';
     if(isNaN(Number(take))) return NextResponse.json({message: 'Invalid take value'}, {status: 400});
     if(isNaN(Number(skip))) return NextResponse.json({message: 'Invalid take value'}, {status: 400});

    const todos = await prisma.form.findMany({
     take: Number(take),
     skip: Number(skip)
    });

  return  NextResponse.json(todos);
};



const postSchema = yup.object({

 address: yup.string().optional(),
 userEmail: yup.string().optional(),
 message: yup.string().optional(),
 name: yup.string().required(),
 phone: yup.string().required(),
 subject: yup.string().optional(),

})


export async function POST(request: Request) { 

  try {
    const { address, userEmail, message, name, phone , subject } = await postSchema.validate( await request.json() );
    const todo = await prisma.form.create({ data:{ address, userEmail, message, name, phone, subject}});
    return NextResponse.json(todo);
    
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }

}





export async function DELETE(request: Request, complete: boolean) { 

  try {
   
    const todo = await prisma.form.deleteMany({ where: { complete: true } });
  
    
    return NextResponse.json('Succefull');
    
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }

}


