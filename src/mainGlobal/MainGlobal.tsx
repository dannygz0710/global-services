import { NavigationButtons } from "@/components/NavigationButtons"
import { MainImage} from "./centralPage"
import MainPage from "./centralPage/components/mainPage/components/MainPage"
import { MoreAboutUs } from "./centralPage/components/moreAboutUs/MoreAboutUs"



export const MainGlobal = () => {
  return (
    <div className="animate__animated animate__fadeIn">
    <MainPage />
     <MoreAboutUs />
    <MainImage />
    <NavigationButtons 
    className={"grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 bg-jordy-blue-100 gap-20 py-20 text-center"}
    />
     </div>
  )
}
