import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Trainers from "./components/Trainers";
import HowToRegister from "./components/HowToRegister";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Trainers />
        <HowToRegister />
      </main>
    </>
  );
}
