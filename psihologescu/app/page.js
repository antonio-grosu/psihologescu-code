import Image from "next/image";
import Despre from "./compon/despre";
import Echipa from "./compon/echipa";
import Neurofeedback from "./compon/neurofeedback";
import Servicii from "./compon/servicii";
import Cui from "./compon/cui";
import Review from "./compon/review";
import Contact from "./compon/contact";

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
