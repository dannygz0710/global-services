import Image from "next/image";
import "animate.css";
import { titleFont } from "@/config/fonts";

export const metadata = {
  title: "About",
  description: "about j&r global services cleaning  company",
};

export default function AboutPage() {
  return (
    <div className="bg-jordy-blue-100 lg:py-[150px] animate__animated animate__fadeIn">
      <div className="justify-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:container mx-auto ">
        <Image
          src="/assets/figma.png"
          alt="karolina"
          width={1200}
          height={60}
        />
        <div>
          <h1 className={`${titleFont} text-jordy-blue-600 text-center   text-4xl pt-5`}>
            Know Us
          </h1>
          <div className=" text-jordy-blue-900  text-xl mt-5 p-10 text-center">
            <p className="mb-20">
              We are <strong>Josber and raul</strong>, two friends unites by a
              bold vision and commitment to excellence. We began our journey
              working at a vehicle cleaning company, where we learned the
              fundamentals of trade and were inspired to found J&R Global
              Services.
            </p>
            <p>
              we are proud to employ local residents, providing them with
              opportunities for professional and personal growth. in adition, we
              integrate ecological practices with biodegradable products and
              efficiency in the use of water abd recycling, guaranteeing a
              positive impact on the enviroment, society and the economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
