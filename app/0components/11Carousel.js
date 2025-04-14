"use client";
import { useState } from "react";
import CarouselElement from "./12CarouselElemet";

export default function Carousel() {
  let cercuri = [];
  let carouselText = [
    "T.H. a venit la neurofeedback având dificultăți în privința limbajului expresiv, opoziționism sș momente de rigiditate comportamentală. De asemenea, îi era greu să se adapteze la mediu din cauza limbajului sărac și a timidității.",
    "da",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.",
    "cacat",
  ];

  for (let i = 0; i < carouselText.length; i++) {
    cercuri.push(i);
  }
  const [displayOption, setDisplayOption] = useState(0);

  function switchRight() {
    setDisplayOption(displayOption + 1);
    console.log(displayOption);
  }
  function switchLeft() {
    setDisplayOption(displayOption - 1);
    console.log(displayOption);
  }
  function changeValue(numar) {
    setDisplayOption(numar);
  }

  return (
    <div className="w-full bg-neutral-100 py-16 h-[800px] flex justify-between items-center">
      <div className="md:min-w-16 min-w-8 min-h-8 md:min-h-16 ml-4 md:ml-8">
        {displayOption > 0 && (
          <svg
            onClick={switchLeft}
            className="md:w-16 md:h-16 w-8 h-8 cursor-pointer text-black fill-current opacity-100 hover:text-black/40 transition-opacity duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center relative h-full">
        {/* aici tin elementele din carusel */}
        <div className={`w-full h-full relative`}>
          {carouselText.map((value, index) => {
            return (
              <div
                key={index}
                // className={`w-full ${
                //   displayOption == index ? "flex" : "hidden"
                // }`}
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
                  displayOption === index
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                } flex items-center `}
              >
                <CarouselElement text={value} />
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 bottom-0">
          {cercuri.map((value) => {
            if (value != displayOption) {
              return (
                <svg
                  onClick={() => changeValue(value)}
                  className="w-4 h-4 text-gray-800 dark:text-white cursor-pointer"
                  key={value}
                  id={value}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              );
            } else {
              return (
                <svg
                  className="w-4 h-4 text-black fill-current hover:text-black/40"
                  key={value}
                  id={value}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              );
            }
          })}
        </div>
      </div>
      <div className="md:min-w-16 md:min-h-16 min-h-8 min-w-8 mr-4 md:mr-8">
        {displayOption < carouselText.length - 1 && (
          <svg
            onClick={switchRight}
            className="md:w-16 w-8 h-8 md:h-16 cursor-pointer text-black fill-current opacity-100 hover:text-black/40 transition-opacity duration-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
