"use client";

import { useEffect, useState } from "react";
import Despre from "./components/1despre";
import Echipa from "./components/2echipa";
import Neurofeedback from "./components/3neurofeedback";
import Servicii from "./components/4servicii";
import Cui from "./components/5cui";
import Review from "./components/6review";
import Contact from "./components/7contact";
import Navbar from "./components/8navbar";
import { PopUp } from "./components/Popup";

export default function Home() {
  const [hidden, setHidden] = useState(false); // fallback initial
  const [mounted, setMounted] = useState(false); // verificăm dacă e montat pe client

  // useEffect(() => {
  //   const hasSeenPopup = localStorage.getItem("popup") === "true";
  //   setHidden(hasSeenPopup);
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null; // evită erorile de SSR/hydration

  return (
    <div className="relative w-full">
      <PopUp hidden={hidden} setHidden={setHidden} />
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
