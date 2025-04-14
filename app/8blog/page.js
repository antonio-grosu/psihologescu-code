"use client";
import Carousel from "../0components/11Carousel";
import Filter2 from "../0components/10Filter2";
import Contact from "../0components/7contact";
import BlogCardComponent from "../0components/8BlogCardComponent";
import { useState } from "react";
import Filter from "../0components/9Filter";

const blogData = [
  {
    image: "/PozeCarousel/poza1.webp",
    heading: "Cum hranim relatia de cuplu prin practica recunostineti",
    text: "Poate ca mare parte dintre noi am fost invatati sa credem ca relatiile curg de la sine si cumva sa lasam in afara controlului nostru...",
    labels: ["cuplu", "recunoștință", "all"],
  },
  {
    image: "/PozeCarousel/poza3.webp",
    heading: "Cum hrănim relația de cuplu",
    text: "Text scurt...",
    labels: ["psiho", "cuplu", "recunoștință", "all"],
  },
  {
    image: "/PozeCarousel/poza2.webp",
    heading: "Gestionarea anxietății",
    text: "Text scurt...",
    labels: ["anxietate", "psiho", "respirație", "all"],
  },
];

export default function Blog() {
  const [option, setOption] = useState("all");
  return (
    <div className="flex flex-col gap-12 items-center px-20 py-40">
      <Carousel text="da" />
      <Filter2 option={option} setOption={setOption} />
      <div className="mx-8 w-full flex flex-col items-center gap-12">
        {blogData.map((value, index) => {
          return (
            <>
              {value.labels.includes(option) && (
                <BlogCardComponent
                  key={index}
                  image={value.image}
                  heading={value.heading}
                  text={value.text}
                />
              )}
            </>
          );
        })}
      </div>
      {/* <Contact /> */}
    </div>
  );
}
