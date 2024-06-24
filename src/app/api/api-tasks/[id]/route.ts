import prisma from "@/lib/prisma";
import { Form } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";


interface Segments {
    params: {
        id: string;
    };
};

const getTodo = async( id: string ):Promise<Form | null> => {

  const todo = await prisma.form.findFirst({ where: { id } });

  return todo;
}



export async function DELETE(request: Request ,{ params }: Segments ) { 

  try {
   
    const todo = await prisma.form.delete({ where: {id: params.id}})
    return NextResponse.json('Succefull');
    
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }

}


export async function PUT(request: Request, { params }: Segments ) { 

  
  const todo = await getTodo(params.id);

  if ( !todo ) {
    return NextResponse.json({ message: `Todo con id ${ params.id } no exite` }, { status: 404 });
  }

  try {
    const { complete} =  await  await request.json() ;
  
  
    const updatedTodo = await prisma.form.update({
      where: { id: params.id },
      data: { complete: true }

    })
   
  
  
    return NextResponse.json(updatedTodo);
    
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}








