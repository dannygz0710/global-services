" use client";
import Image from "next/image";
import { data } from "./data";

export const WeOffer = () => {
  return (
    <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-jordy-blue-100">
      <div className="container xl:max-w-6xl mx-auto px-4 lg:lg:pt-[150px]">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl leading-normal mb-2 pb-20 text-jordy-blue-600">
            What We Do
          </h2>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center  text-jordy-blue-950">
          {data.map((item, index) => (
            <div
              key={index}
              className="inline-block py-10 px-12 transform transition duration-300 ease-in-out hover:-translate-y-2 flex-shrink  max-w-full w-full  lg:w-1/2 lg:px-6 wow fadeInUp"
            >
              <Image
                key={index}
                width={900}
                height={1000}
                src={item.src}
                alt={item.alt}
                priority
              />
              <h3 className="text-lg leading-normal mb-2 font-semibold mt-8">
                {item.head}
              </h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
