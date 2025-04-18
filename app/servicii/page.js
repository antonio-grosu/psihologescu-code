"use client";

import React from "react";
import { motion } from "framer-motion";

const Servicii = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-gradient-to-r from-[rgb(211,92,19)] to-[rgb(211,92,19,0.8)] flex items-center flex-col justify-center py-16 md:py-24 px-5 sm:px-6 text-center text-white">
        <div
          className="p-4 bg-gray-100/20
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
            className="text-white text-sm"
          >
            găsește-ți echilibrul prin terapie
          </motion.p>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mt-12  "
        >
          Servicii
        </motion.h3>
      </section>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {/* SERVICIILE PSIHOLOGESCU */}
        {/* 
        <Image
          width={500}
          height={500}
          alt="Serviciile Psihologescu"
          className="flex items-center justify-center"
          src="/dreamstime_l_24199846.jpg"
        /> */}
        <div className="w-full h-56 rounded-md my-16 aspect-1 bg-gray-200 flex items-center justify-center p-1">
          <p>imagine sugestiva</p>
        </div>
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-[rgb(211,92,19)] w-2 h-10 mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              serviciile psihologescu
            </h2>
          </div>
          <div className="bg-[rgb(211,92,19,0.1)] p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              În cei 10 ani de experiență, Psihologescu a dezvoltat metode
              complexe de a veni în întâmpinarea nevoilor persoanelor de toate
              vârstele din societatea contemporană. Din punct de vedere al
              orientării terapeutice, Psihologescu abordează procesul terapeutic
              într-o manieră integrativă ce permite crearea unei relații unice
              cu fiecare persoană interesată de serviciile oferite.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Serviciile Psihologescu constau în evaluare psihologică, terapie
              neurofeedback și psihoterapie. Astfel, o dată cu evaluarea
              psihologică inițială se pun bazele relației terapeutice și se
              stabilește o metodă de lucru optimă.
            </p>
          </div>
        </section>

        {/* EVALUARE PSIHOLOGICA */}
        <div className="w-full h-56 rounded-md my-16 aspect-1 bg-gray-200 flex items-center justify-center p-1">
          <p>imagine sugestiva</p>
        </div>
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-[rgb(211,92,19)] w-2 h-10 mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              evaluare psihologică
            </h2>
          </div>
          <div className="bg-[rgb(211,92,19,0.1)] p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
              asupra celui mai bun demers terapeutic.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              Cine poate beneficia?
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Evaluarea psihologică poate fi efectuată copiilor cu vârste mai
              mari de 3 ani, adolescenților și adulților. Evaluarea psihologică
              este utilă atunci când se decide care este cel mai potrivit demers
              terapeutic. Recomandăm o evaluare psihologică înainte de a începe
              sesiunile de neurofeedback. În funcție de scopul și complexitatea
              evaluării, aceasta poate să se desfășoare în mai multe sesiuni.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Evaluarea psihologică se efectuează cu teste clinice și inventare
              de personalitate. Acestea vizează stabilirea unor aspecte ale
              personalității. Alteori e necesară aplicarea unor teste pentru
              măsurarea unor indicatori ai funcțiilor și proceselor cognitive.
            </p>
          </div>
        </section>
        <div className="w-full h-56 rounded-md my-16 aspect-1 bg-gray-200 flex items-center justify-center p-1">
          <p>imagine sugestiva</p>
        </div>
        {/* NEUROFEEDBACK */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-[rgb(211,92,19)] w-2 h-10 mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              neurofeedback
            </h2>
          </div>
          <div className="bg-[rgb(211,92,19,0.1)] p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              Se poate folosi terapia neurofeedback pentru ameliorarea vieții și
              stării de sănătate dacă simptomele pe care le aveți indică
              aceasta.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              Cine poate beneficia?
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Neurofeedbackul este o metodă total neinvazivă de care pot
              beneficia copiii, adolescenții și adulții. Este recomandată o
              evaluare psihologică inițială. În general oferim un pachet de 20
              de sesiuni de neurofeedback datorită faptului că eficiența
              acestora este dovedită când se respectă anumite condiții.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Este important să efectuați sesiunile respectând anumite intervale
              de timp. De obicei se efectuează 2 sesiuni pe săptămână și se
              recomandă efectuarea celor 20 de sesiuni în maxim 10 săptămâni.
            </p>
          </div>
        </section>
        <div className="w-full h-56 rounded-md my-16 aspect-1 bg-gray-200 flex items-center justify-center p-1">
          <p>imagine sugestiva</p>
        </div>
        {/* PSIHOTERAPIE */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-[rgb(211,92,19)] w-2 h-10 mr-4"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              psihoterapie
            </h2>
          </div>
          <div className="bg-[rgb(211,92,19,0.1)] p-6 sm:p-8 rounded-lg shadow-sm">
            <p className="mb-4 text-base sm:text-lg leading-relaxed">
              Psihoterapia este întotdeauna recomandată, fiind una din cele mai
              complexe metode de explorare în siguranță a persoanei noastre.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
              Cine poate beneficia?
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Psihoterapia se adresează persoanelor care doresc să crească
              gradul de conștientizare a propriilor procese, cât și persoanelor
              care au ajuns într-un impas în viața lor. Puteți alege
              psihoterapie individuală, de familie sau de cuplu.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Este bine să ne observăm gândurile, emoțiile și să aducem mai
              multă conștientizare în relațiile noastre. Știm că acest lucru
              este mai ușor când suntem oglindiți. De obicei apare o cursivitate
              în ceea ce facem odată cu clarificarea modului în care funcționăm
              și înțelegerea emoțiilor noastre, atât cele de suprafață, cât și
              cele mai adânci.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicii;
