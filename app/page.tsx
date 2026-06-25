import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import CourseTiles from "./components/CourseTiles";
import About from "./components/About";
import Trainers from "./components/Trainers";
import HowToRegister from "./components/HowToRegister";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CourseTiles />
        <About />
        <Trainers />
        <HowToRegister />
      </main>
      <Footer />
    </>
  );
}
