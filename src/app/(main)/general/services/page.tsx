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
    </div>
  );
}
