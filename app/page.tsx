import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Experties from "./components/Experties/Experties";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Experties />
      <AboutUs />
      <OurServices />
    </main>
  );
}
