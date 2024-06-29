import prisma from "@/lib/prisma";
import { Button } from "../components/Button";
import { GoBackButton } from "../components/GoBackButton";
import "animate.css";

interface Props {
  params: { id: string };
}

export default async function getElemntPage({ params }: Props) {
  const id = params.id;
  const find = await prisma.form.findUnique({ where: { id } });

  return (
    <section className="animate__animated animate__fadeIn">
      <div className="lg:container mx-auto p-4">
        {find ? (
          <div className="max-w-md mx-auto bg-white rounded-md lg:shadow-md overflow-hidden">
            <div className="p-10">
              <div className="mb-8">
                <p className="flex justify-between text-jordy-blue-900 font-bold mb-2 text-xl ">
                  Name: <span>{find?.name}</span>
                </p>
              </div>
              <div className="mb-8">
                <p className="flex justify-between text-jordy-blue-900 font-bold mb-2 text-xl ">
                  Email: <span>{find?.userEmail}</span>
                </p>
              </div>
              <div className="mb-8">
                <p className="flex justify-between text-jordy-blue-900 font-bold mb-2 text-xl ">
                  Phone: <span>{find?.phone}</span>
                </p>
              </div>
              <div className="mb-8">
                <p className="flex justify-between text-jordy-blue-900 font-bold mb-2 text-xl ">
                  Subject: <span>{find?.subject}</span>
                </p>
              </div>

              <div className="mb-4">
                <p className="text-jordy-blue-800 font-bold mb-2 text-xl">
                  Message:
                </p>
                <p className=" shadow appearance-none border border-jordy-blue-50  rounded w-full pb-20 px-3 text-jordy-blue-800  focus:outline-none focus:ring-1 transition ease-in-out duration-150">
                  {find?.message}
                </p>
              </div>
              <div className="flex justify-between">
                <GoBackButton />
                <Button userId={find.id} />
              </div>
            </div>
          </div>
        ) : (
          <div className=" lg:p-20  bg-white lg:rounded-md lg:shadow-md animate__animated animate__fadeIn">
            <div className=" flex flex-col gap-3 items-center mt-5">
              <h1 className="text-3xl  text-jordy-blue-400 mb-8">No User</h1>
              <GoBackButton />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
