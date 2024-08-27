import Image from "next/image";
import styles from "./MoreAboutUs.module.css";
import { ButtonMoreAbout } from "./ButtonMoreAbout";

export const MoreAboutUs = () => {
  return (
    <section className="justify-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 lg:container mx-auto lg:my-20 shadow-md">
      <div className={styles.hideMobile}>
        <Image
          width={900}
          height={800}
          quality={100}
          src="/assets/karolina.jpg"
          alt="picture"
          priority
        />
      </div>

      <div className="bg-jordy-blue-500 p-8 ">
        <div
          className="flex-col justify-center  flex  gap-5  flex-wrap mt-20
      md:flex-nowrap md:flex-col md:justify-between md:items-center md:gap-20
      
      "
        >
          <h1 className="text-jordy-blue-50 text-center gap-1  text-5xl ">
            More About Us
          </h1>
          <h2 className=" text-jordy-blue-200 text-center mt-5">
            Since our founding, Global Services J&R has been known for quality
            services and exceptional efficiency. No matter what service you’re
            looking for, we guarantee to not only meet, but exceed your
            expectations and ensure your full satisfaction.
          </h2>
          <h2 className=" text-jordy-blue-200 text-center">
            Our team is up for every job, managing projects with the skill and
            experience our clients have come to expect. Please get in touch to
            learn more about our team, our company or for details about the
            services we provide.
          </h2>
        </div>
        <div className="p-10 display flex justify-center ">
          <ButtonMoreAbout />
        </div>
      </div>
    </section>
  );
};
