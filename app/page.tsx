import Image from "next/image";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Experties from "./components/Experties/Experties";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Experties />
    </main>
  );
}
