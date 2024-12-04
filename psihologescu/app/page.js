import Image from "next/image";
import Despre from "./compon/despre";
import Echipa from "./compon/echipa";
import Neurofeedback from "./compon/neurofeedback";
import Servicii from "./compon/servicii"

export default function Home() {
  return (
    <div>
      <Despre />
      <Echipa />
      <Neurofeedback />
      <Servicii />
    </div>
  );
}
