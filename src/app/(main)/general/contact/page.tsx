import Image from "next/image";

import "animate.css";
import { FormContact } from "@/components";

export const metadata = {
  title: "Contact Us",
  description: "contact page",
};

const ContactPage = () => {
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-1  lg: pt-[150px] lg:grid-cols-2  xl:grid-cols-2">
        <div>
          <Image
            width={1300}
            height={400}
            quality={100}
            src="/assets/josber.jpg"
            alt="picture"
          />
        </div>
        <FormContact />
      </div>
      {/* <BottonNavbar /> */}
    </section>
  );
};

export default ContactPage;
