import { MainForm } from "@/components/main/mainForm/MainForm";
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
