import BodyComponent from "./components/BodyComponent/Body";
import PricingComponent from "./components/PricingComponent/Pricing";
import ServicesComponent from "./components/ServicesComponent/Services";

export default function Home() {
  return (
    <main>
      <BodyComponent />
      <ServicesComponent />
      <PricingComponent />
    </main>
  );
}
