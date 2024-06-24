import { MainForm } from "@/mainGlobal/centralPage/components/mainForm/MainForm";
import styles from "./MainImage.module.css";




export const MainImage = () => {
  return (
    <section className={styles.img}>
      <div className=" container lg:mx-auto">
        <MainForm />
      </div>
    </section>
  );
};
