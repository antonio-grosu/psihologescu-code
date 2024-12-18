import Image from "next/image";
import Despre from "./components/despre";
import Echipa from "./components/echipa";
import Neurofeedback from "./components/neurofeedback";
import Servicii from "./components/servicii";
import Cui from "./components/cui";
import Review from "./components/review";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Despre />
      <Echipa />
      <Neurofeedback />
      <Servicii />
      <Cui />
      <Review />
      <Contact />
    </div>
  );
}
