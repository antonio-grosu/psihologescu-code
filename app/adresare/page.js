import Contact from "../components/7contact";
import Navbar from "../components/8navbar";
import { motion } from "framer-motion";

export default function Cuiext() {
  return (
    <div className="flex flex-col items-center">
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
          className="text-black text-sm"
        >
          găsește-ți echilibrul prin terapie
        </motion.p>
      </div>
      <img src="/Poze/pozaServiciiext.avif" className="p-12"></img>
      <h1 className="text-center text-4xl text-customOrange">
        serviciile psihologescu
      </h1>
      <p className="text-center text-sm my-8 w-11/12">
        În cei 10 ani de experiență, Psihologescu a dezvoltat metode complexe de
        a veni în întâmpinarea nevoilor persoanelor de toate vârstele din
        societatea contemporană. Din punct de vedere al orientării terapeutice,
        Psihologescu abordează procesul terapeutic într-o manieră integrativă ce
        permite crearea unei relații unice cu fiecare persoană interesată de
        serviciile oferite.
      </p>
      <p className="text-center text-sm my-8 w-11/12">
        Serviciile Psihologescu constau în evaluare psihologică, terapie
        neurofeedback și psihoterapie. Astfel, o dată cu evaluarea psihologică
        inițială se pun bazele relației terapeutice și se stabilește o metodă de
        lucru optimă.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
        <div className="flex flex-col items-center bg-customGray gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">evaluare psihologică</h1>
          <p className="text-center text-sm">
            Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
            asupra celui mai bun demers terapeutic.
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Evaluarea psihologică poate fi efectuată copiilor ({">"}3 ani),
            adolescenților și adulților. Evaluarea psihologică este utilă atunci
            când se decide care este cel mai potrivit demers terapeutic.
            Recomandăm o evaluare psihologică înainte de a începe sesiunile de
            neurofeedback. În funcție de scopul și complexitatea evaluării,
            aceasta poate să se desfășoare în mai multe sesiuni. Evaluarea
            psihologică se efectuează cu teste clinice și inventare de
            personalitate. Acestea vizează stabilirea unor aspecte ale
            personalității. Alteori e necesară aplicarea unor teste pentru
            măsurarea unor indicatori funcțiilor și proceselor cognitive.
          </p>
        </div>
        <div className="flex flex-col items-center bg-customPeach gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">neurofeedback</h1>
          <p className="text-center text-sm">
            Se poate folosi terapia neurofeedback pentru ameliorarea vieții și
            stării de sănătate dacă simptomele pe care le aveți indică aceasta.
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Neurofeedbackul este o metodă total neinvazivă de care pot beneficia
            copiii, adolescenții și adulții. Este recomandată o evaluare
            psihologică inițială. În general oferim un pachet de 20 de sesiuni
            de neurofeedback datorită faptului că eficiența acestora este
            dovedită când se respectă anumite condiții. Este important să
            efectuați sesiunile respectând anumite intervale de timp. De obicei
            se efectuează 2 sesiuni pe săptămână și se recomandă efectuarea
            celor 20 de sesiuni în maxim 10 săptămâni.
          </p>
        </div>
        <div className="flex flex-col items-center bg-customPiele gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">psihoterapie</h1>
          <p className="text-center text-sm">
            Psihoterapia este întotdeauna recomandată, fiind una din cele mai
            complexe metode de explorare în siguranță a persoanei noastre.
          </p>
          <p className="font-bold text-center text-sm">Cine poate beneficia?</p>
          <p className="text-center text-sm">
            Psihoterapia se adresează persoanelor care doresc să crească gradul
            de conștientizare a propriilor procese, cât și persoanelor care au
            ajuns într-un impas în viața lor. Puteți alege psihoterapie
            individuală, de familie sau de cuplu. Psihoterapia este utilă pentru
            procesarea și integrarea acelor conținuturi, care împreună formează
            un sistem de credințe, valori și repere în felul în care ne
            desfășurăm viața. Este bine să ne observăm gândurile, emoțiile și să
            aducem mai multă conștientizare în relațiile noastre. Știm că acest
            lucru este mai ușor cand suntem oglindiți. De obicei apare o
            cursivitate în ceea ce facem odată cu clarificarea modului în care
            funcționăm și fiind de emoțiile noastre, atât cele de suprafață, cât
            și cele mai adânci.
          </p>
        </div>
      </div>
      <h1 className="text-center text-4xl text-customOrange my-8">articole</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col border items-center">
          <p>poza</p>
          <h1>Title</h1>
          <hr></hr>
          <p>views - comments - like</p>
        </div>
        <div className="flex flex-col border items-center">
          <p>poza</p>
          <h1>Title</h1>
          <hr></hr>
          <p>views - comments - like</p>
        </div>
        <div className="flex flex-col border items-center">
          <p>poza</p>
          <h1>Title</h1>
          <hr></hr>
          <p>views - comments - like</p>
        </div>
      </div>
    </div>
  );
}
