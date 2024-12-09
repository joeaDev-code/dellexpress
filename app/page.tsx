import Banner from "./components/Banner";
import Presentation from "./components/Presentation";
import SectionService from "./components/SectionService";
import Testimonials from "./components/Testimonials";
import Ccm from "./components/Ccm";
import CallToAction from "./components/c-t-a";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Banner />
      <Presentation />
      <SectionService />
      <Ccm />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
