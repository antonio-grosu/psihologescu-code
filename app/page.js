import Despre from "./0components/1despre";
import Echipa from "./0components/2echipa";
import Neurofeedback from "./0components/3neurofeedback";
import Servicii from "./0components/4servicii";
import Cui from "./0components/5cui";
import Review from "./0components/6review";
import Contact from "./0components/7contact";
import Navbar from "./0components/8navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add padding to prevent overlap with fixed nav */}
        <Despre />
        <Echipa />
        <Neurofeedback />
        <Servicii />
        <Cui />
        <Review />
        <Contact />
      </main>
    </>
  );
}
