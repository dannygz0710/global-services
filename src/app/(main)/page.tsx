import { MoreAboutUs } from "@/components";
import { NavigationButtons } from "@/components/NavigationButtons";
import WelcomeGlobal from "@/components/main/WelcomeGlobal";
import { MainImage } from "@/components/main/mainForm/MainImage/MainImage";



export const metadata = {
 title: 'Home Page',
 description: 'contact j&r global services',
};

export default function Home() {
  
  return (
    <div className="animate__animated animate__fadeIn">
    <WelcomeGlobal/>
     <MoreAboutUs />
    <MainImage />
    <NavigationButtons 
    className={"grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 bg-jordy-blue-100 gap-20 py-20 text-center"}
    />
     </div>
  )
}
