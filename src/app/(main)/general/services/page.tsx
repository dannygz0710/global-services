import { WeOffer } from "@/components";
import { NavigationButtons } from "@/components/NavigationButtons";

import "animate.css";

export const metadata = {
  title: "Services",
  description: "services we offer in  j&r globals services cleaning",
};

export default function ServicesPage() {
  return (
    <div className="animate__animated animate__fadeIn">
      <WeOffer />
      <NavigationButtons
        className={
          "grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 bg-jordy-blue-100 gap-20 py-20 text-center"
        }
      />
    </div>
  );
}
