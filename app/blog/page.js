"use client";
import { motion } from "framer-motion";
import Filter2 from "../components/10Filter2";
import BlogCardComponent from "../components/8BlogCardComponent";
import { useState, useEffect } from "react";

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
  const [selection, setSelection] = useState(blogData);
  useEffect(() => {
    let filteredSelection = [...blogData];

    if (option !== "all") {
      filteredSelection = filteredSelection.filter((item) => {
        return item.labels.includes(option);
      });

      setSelection(filteredSelection);
    } else {
      setSelection(blogData);
    }
  }, [option]);

  return (
    <div className="flex flex-col gap-12 items-center px-8 md:px-20 py-40">
      <div
        className="p-4 
          flex items-center flex-col justify-center rounded-md "
      >
        <motion.img
          src="/Poze/logoPsihologescu.avif"
          className="md:w-1/3 w-full"
          alt="Logo Psihologescu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black text-sm"
        >
          găsește-ți echilibrul prin terapie
        </motion.p>
      </div>
      <Filter2 option={option} setOption={setOption} />
      <div className="mx-8 w-full grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 items-stretch gap-12">
        {selection.length > 0 &&
          selection.map((value, index) => {
            return (
              <div key={index}>
                {value.labels.includes(option) && (
                  <BlogCardComponent
                    image={value.image}
                    heading={value.heading}
                    text={value.text}
                    className="h-full"
                  />
                )}
              </div>
            );
          })}
        {selection.length == 0 && (
          <h3 className="text-black">
            Nu exista postari bazate pe acest filtru de cautare.
          </h3>
        )}
      </div>
    </div>
  );
}
