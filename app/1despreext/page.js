'use client'; // required for Framer Motion to work with Next.js App Router
import { motion } from "framer-motion";
import Contact from "../0components/7contact";
import Navbar from "../0components/8navbar";

export default function Despreext() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="mt-12 flex flex-col justify-center items-center">
          <motion.img
            src="/Poze/logoPsihologescu.avif"
            className="md:w-1/3 w-full"
            alt="Logo Psihologescu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-gray-400 text-sm">
            găsește-ți echilibrul prin terapie
          </p>
          <img src="/Poze/pozaDesprePage.avif" className="pt-12 md:w-5/6 w-full" />
          <div className="flex flex-col gap-6 items-center m-20">
            <div className="w-full text-left">
              <h4 className="text-4xl text-customOrange px-8 mb-12 md:ml-24">despre</h4>
            </div>
            <p className="text-center text-sm max-w-3xl">
              Psihologescu este un concept venit din dorința de a aduce mai multă
              stare de bine. A apărut în anul 2010 la inițiativa Adinei Escu,
              psihoterapeut, și de atunci alegem cele mai eficiente metode atât din
              domeniul psihoterapiei, cât și al neuroștiințelor.
            </p>
            <p className="text-center text-sm max-w-3xl">
              Ne bazăm pe două principii. Primul principiu este cel de a descoperi
              si sprijini omul printr-o înțelegere profundă a lui; iar al doilea
              principiu este cel de a folosi metode și informații din cercetările
              neuroștiințelor și biofeedbackului.
            </p>
            <p className="text-center text-sm max-w-3xl">
              Ceea ce este frumos de observat la oameni este faptul că oricât de
              asemănători am părea, există ceva unic, nerepetitiv, în fiecare dintre
              noi. Dacă avem răbdare și puțină curiozitate vom găsi în noi acel ceva
              care ne aduce insprirație și noi resurse.
            </p>
            <p className="text-center text-sm max-w-3xl">psihoterapeut Adina Escu</p>
          </div>
        </div>
        <div className="mt-12">
          <Contact />
        </div>
      </div>
    </>
  );
}
