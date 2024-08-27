"use client";
import { useRouter } from 'next/navigation';
import { deleteTodo } from '@/helpers/task'
import { IoTrashOutline } from 'react-icons/io5'

export const Button = ({userId}:any) => {

  const router = useRouter(); 

  const handleClick = () => {
    deleteTodo(userId);
    router.refresh();
  }
  
  return (
    <button 
       onClick={ handleClick }
        type='button' className="flex  rounded  bg-danger py-2 px-4 text-white hover:bg-danger2 transition-all">
        <IoTrashOutline />
        Delete
      </button>
  )
}
