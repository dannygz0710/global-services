import Image from "next/image";
import { HandlerButton } from "./HandlerButton";

const MainPage = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
      <div className="bg-jordy-blue-100 p-8 ">
        <div className="flex flex-col justify-center gap-5  flex-wrap mt-20">
          <h1 className="text-5xl text-jordy-blue-600  text-center gap-1 ">
            Welcome to Global Services Cleaning J&R
          </h1>
          <h2 className=" text-jordy-blue-800 text-center mt-5">
            Welcome to Global Service Cleaning J&R our talented team works hard
            everyday to provide the best services for our clients by
            personalizing our services to your specific needs. Get in touch
            today to see how we can help you!
          </h2>
        </div>
        <HandlerButton />
      </div>
      <Image
        width={2000}
        height={900}
        src="/assets/grab.jpg"
        alt="picture"
        priority
      />
    </main>
  );
};

export default MainPage;
