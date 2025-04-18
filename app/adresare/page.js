import { motion } from "framer-motion";
import Image from "next/image";
export default function Adresare() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 flex items-center flex-col justify-center rounded-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/Poze/logoPsihologescu.avif"
            alt="Logo Psihologescu"
            width={300}
            height={200}
            className="md:w-1/3 w-full h-auto"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black text-sm"
        >
          găsește-ți echilibrul prin terapie
        </motion.p>
      </div>

      <div className="p-12">
        <Image
          src="/Poze/pozaServiciiext.avif"
          alt="Imagine servicii Psihologescu"
          width={1000}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <h1 className="text-center text-4xl text-customOrange">
        serviciile psihologescu
      </h1>

      <p className="text-center text-sm my-8 w-11/12">
        În cei 10 ani de experiență, Psihologescu a dezvoltat metode complexe de
        a veni în întâmpinarea nevoilor persoanelor de toate vârstele din
        societatea contemporană...
      </p>

      <p className="text-center text-sm my-8 w-11/12">
        Serviciile Psihologescu constau în evaluare psihologică, terapie
        neurofeedback și psihoterapie...
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
        {/* Evaluare psihologică */}
        <div className="flex flex-col items-center bg-customGray gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">evaluare psihologică</h1>
          <p className="text-center text-sm">
            Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
            asupra celui mai bun demers terapeutic.
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Evaluarea psihologică poate fi efectuată copiilor ({">"}3 ani),
            adolescenților și adulților...
          </p>
        </div>

        {/* Neurofeedback */}
        <div className="flex flex-col items-center bg-customPeach gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">neurofeedback</h1>
          <p className="text-center text-sm">
            Se poate folosi terapia neurofeedback pentru ameliorarea vieții și
            stării de sănătate...
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Neurofeedbackul este o metodă total neinvazivă de care pot beneficia
            copiii, adolescenții și adulții...
          </p>
        </div>

        {/* Psihoterapie */}
        <div className="flex flex-col items-center bg-customPiele gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">psihoterapie</h1>
          <p className="text-center text-sm">
            Psihoterapia este întotdeauna recomandată, fiind una din cele mai
            complexe metode de explorare...
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Psihoterapia se adresează persoanelor care doresc să crească gradul
            de conștientizare a propriilor procese...
          </p>
        </div>
      </div>

      <h1 className="text-center text-4xl text-customOrange my-8">articole</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex flex-col border items-center">
            <p>poza</p>
            <h1>Title</h1>
            <hr />
            <p>views - comments - like</p>
          </div>
        ))}
      </div>
    </div>
  );
}
