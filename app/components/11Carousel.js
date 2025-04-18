"use client";
import { useState } from "react";
import CarouselElement from "./12CarouselElemet";

export default function Carousel() {
  let cercuri = [];
  let carouselText = [
    "C.C. a venit la neurofeedback pentru că avea dificultăți în a gestiona anumite emoții, probleme cu somnul, agitație psihomotorie, dificultăți în ceea ce privește capacitatea de a  se concentra și de a menține atenția timp indelungat. De asemenea, toleranța la frustrare era scazută și își găsea cu greu motivația. Acum C.C. este mai calm, doarme bine, comunică mai ușor propriile nevoi și are toleranță bună la frustrare. De asemenea, au crescut și performanțele sale școlare",
    "Pentru C.D. este foarte dificil să pronunțe orice cuvânt. Înainte de neurofeedback nu avea un vocabular activ, bazându-se pe 5-10 cuvinte. După neurofeedback, C.D. a început să vorbească mult mai mult, încercând să pronunțe tot mai multe cuvinte. După 30 de ședințe a ajuns să formuleze fraze de 3 sau 4 cuvinte.",
    "Am ajuns prima dată la neurofeedback (destul de reticentă) în 2019, de mână cu piciul meu de 3 ani. Fusese diagosticat cu întârziere în vorbire, dar îi lipseau și o parte din deprinderile ce trebuiau dobândite până la varsta lui. Pe lângă, ne luptam și cu opoziția lui la orice activitate inițiată de noi sau de cei de la grădi. La primele ședințe duceam multă muncă de convingere cu el, deoarece nu suporta să îl atingă nimeni pe cap (și, supriză: electrozii pe cap se fixează), nu avea chef să stea cuminte pe fotoliu…. La scurt timp după începerea terapiei, T. a renunțat voluntar la pampers, fără muncă de convingere, fără accidente, fără rugăminți. Pur și simplu, a venit de la el și a fost foarte natural. Cu timpul a început să meargă cu drag la ședințe, să stea liniștit în fotoliu, să nu reacționeze la conectarea electrozilor. După a doua sesiune de 20 de ședințe, piciul meu speriat și opoziționist se joacă frumos, cu toți copiii, își dorește mereu să interacționeze, respectă regulile, strânge jucăriile, și știe să își recunoască o parte dintre emoții și să le exprim .Incă stângaci în vorbire, încearcă să se facă înțeles și e foarte atent și deschis să învețe. Recomand cu mare drag și cu toată încrederea!",
    "D.P. s-a prezentat la cabinet impreună cu mine sa pentru a rezolva problemele ce țin de adaptarea la gradinită, trecând adesea prin emoții explozive, tantrum și fixații. D.P. era dependent de scutece noaptea. Neurofeedbackul l-a ajutat să scape de scutece, este mai cooperant și poate să își controleze mai bine furia.",
    "T.H. a venit la neurofeedback având dificultăți în privința limbajului expresiv, opoziționism sș momente de rigiditate comportamentală. De asemenea, îi era greu să se adapteze la mediu din cauza limbajului sărac și a timidității. După ședințele de neurofeedback, limbajul expresiv s-a îmbunătațit considerabil, relațiile sociale au devenit normale și comportamentul său este mai adaptat.",
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
    <div className="w-full mt-12  bg-neutral-100  relative py-16  flex justify-between items-center">
      <p className=" absolute  bottom-10  left-10 text-4xl md:text-8xl">,,</p>
      <p className=" absolute  top-10 right-10  text-4xl md:text-8xl rotate-180 ">
        ,,
      </p>

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
        <div className={`w-full py-24  relative mb-24`}>
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
