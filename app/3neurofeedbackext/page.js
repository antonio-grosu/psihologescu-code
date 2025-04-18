'use client'; // required for Framer Motion to work with Next.js App Router
import { motion } from "framer-motion";
import Contact from "../0components/7contact";
import Navbar from "../0components/8navbar";

export default function Neurofeedbackext() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="mt-12 flex flex-col items-center m-8">
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
          <img src="/Poze/pozaNeurofeedback.avif" className="p-12"></img>
          <h1 className="text-4xl text-customOrange mt-8 mb-8">
            ce înseamnă neurofeedback ?
          </h1>
          <p className="text-center w-11/12 text-sm">
            Terapia neurofeedback a început să fie populară în ultimii 20 de ani
            în Europa. Țări precum Germania, Austria au implicat sistemul public
            de sănătate, aceste servicii fiind decontate de Casa de Asigurări de
            Sănătate. În România există puțini practicieni, însă se fac tot mai
            multe demersuri pentru a introduce aceasta metodă terapeutica.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Neurofeedback este termenul general folosit pentru antrenarea
            creierului. Sistemul de lucru folosit se bazează pe tehnologia EEG
            (electroencefalograma) și presupune plasarea unor electrozi la nivelul
            scalpului și captarea semnalului undelor cerebrale. Ceea ce este
            obținut se transformă în feedback vizual, auditiv și tactil.
            Variațiile undelor cerebrale sunt redate în timp real și astfel se
            creează un continuum între perceperea feedbackului și optimizarea a
            ceea ce creierul a înțeles la nivel de funcționare.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Persoana care beneficiaza de neurofeedback este activă în
            interacțiunea cu feedbackul, însă nu influențează în mod intenționat
            și conștient reglarea propriilor unde cerebrale.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Pe scurt, este ca atunci cand învățăm să mergem pe bicicleta și
            trebuie să facem multe repetiții și ajustări până ajungem să ne
            bucurăm de plimbare.
          </p>
          <h1 className="text-4xl text-customOrange mt-12 mb-12">
            cum decurge o sesiune de neurofeedback?
          </h1>
          <p className="text-center w-11/12 text-sm">
            Nu începem niciodată sesiunile de neurofeedback fără o evaluare
            inițială. Dacă aveți evaluări psihologice recente pot fi utile în
            procesul inițial de evaluare. De obicei, e nevoie de două sesiuni
            pentru evaluare și discuții.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Când vii la prima sesiune neurofeedback te așezi în fotoliu și ți se
            atașează electrozii cu ajutorul unei paste (de obicei se folosesc 3, 4
            sau 5 electrozi). Ulterior se montează căștile audio, se țne în brațe
            ursulețul tactil și se alege o animație, un feedback dintr-o paletă
            largă de opțiuni: există varianta de a juca jocuri precum tetris, memo
            game, șah, sudoku sau de a viziona anumite videoclipuri. Orice
            variantă alegi din cele disponibile în software, imaginea pe care o
            vezi va fi influențată de propria activitate cerebrală. Atât
            feedbackul vizual, cât și cel auditiv și tactil vor avea `amprenta`
            felului în care te simți și funcționezi în momentul sesiunii.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Nu există șanse de a dăuna în vreun fel creierului, întrucât aparatul
            folosit `citește` activitatea creierului și nu introduce nimic la
            nivelul creierului cu ajutorul electrozilor. Singurul INPUT este dat
            de imaginile de pe ecranul LCD, coloana sonoră și vibrațiile
            animăluțului de pluș.
          </p>
          <p className="text-center w-11/12 text-sm">
            Nu există contraindicații legate de starea fiziologică: poți veni și
            dacă stările normale fiziologice sunt alterate: dacă există o stare de
            oboseală sau lipsă de somn, dureri de cap, greață, foame, stare
            anxioasă, vertij. Uneori e chiar util să observăm felul în care
            acționează neurofeedback pe durata unei migrene, fiind șanse mari ca
            până la finalul ședinței să dispară simptomele nedorite.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            Nu e indicat să te prezinți la sesiune în zile în care ai temperatura
            ridicată ({">"}38C) și simptome de gripă.
          </p>
          <p className="text-center w-11/12 tex-sm">
            Nu există efecte secundare negative, fiind o metodă bazată pe
            mecanismele proprii de reglare a creierului și a corpului. Apar
            reacții de moment precum somnolență, schimbări de dispoziție, dar
            acestea NU sunt ireversibile sau durabile.
          </p>
          <p className="text-center w-11/12 text-sm mt-4">
            După prima sesiune, cât și la sesiunile următoare este util să se
            observe reacțiile emoționale sau fiziologice și eventuale schimbări
            care uneori trec neobservate. Pot fi aspecte legate de durata și
            calitatea somnului, visele din timpul nopții, poftă de mâncare,
            anumite obiceiuri, ticuri (de exemplu, sindromul piciorului
            neliniștit). Cele mai multe persoane raportează o liniștire a corpului
            și o calmare a minții, scăderea anxietății și o conectare mai bună la
            sine.
          </p>
          <img src="/Poze/pozaNeurofeedbackext.avif" className="p-12"></img>
          <h1 className="text-4xl text-customOrange mt-12 mb-12">
            ce presupune un pachet de ședințe?
          </h1>
          <p className="text-center w-11/12 text-sm">
            Un pachet conține 20 de ședințe și este conceput astfel încât să fie
            cât mai sigur din perspectiva eficienței și a durabilității efectelor
            dorite și obținute. Dacă ședințele sunt efectuate cu întreruperi,
            există riscul scăderii eficienței. În general, se lucrează 2-3 ședințe
            săptămânal.
          </p>
          <p className="text-center w-11/12 text-sm">
            Există posibilitatea de a crește frecvența acestora, până la 2 ședințe
            pe zi. Nu este indicat să treacă mai mult de 7-8 zile între ședințe,
            în special pentru persoanele care abia au început neurofeedbackul.
          </p>
          <h1 className="text-4xl text-customOrange mt-12 mb-12">
            cui îi este recomandată terapia neurofeedback?
          </h1>
          <p className="text-center w-11/12 text-sm">
            Psihoterapia și terapia neurofeedback se adresează persoanelor de
            toate vârstele.
          </p>
          <p className="text-center w-11/12 text-sm">
            În cadrul relației terapeutice dintre psihoterapeut și beneficiarul
            terapiei, se crează un mediu sigur în care se pot explora cauzele și
            soluțiile pentru problemele de sănătate sau neplăcerile cauzate de:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 justify-center gap-12 w-5/6">
            <div className="flex flex-col items-center">
              <img src="\Poze\anxietate.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">anxietate</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\depresie.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">depresie</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\stres.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">stres</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\tulburari de somn.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">tulburări de somn</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\oboseala cronica.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">oboseală cronică</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\PTSD.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">PTSD</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\dificultati de invatare.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">
                dificultăți<br></br>de învățare
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\traumatism cerebral AVC epilepsie.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">
                traumatism<br></br>cerebral, AVC,<br></br>epilepsie
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\autism.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">autism</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\tulburari obsesiv compulsive.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">
                tulburări obsesiv<br></br>compulsive
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\tulburari de dispozitie.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">
                tulburări de<br></br>dispoziție
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\vertij.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">vertij</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\ticuri nervoase.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">ticuri nervoase</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\migrene si cefalee.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">migrene și cefalee</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\tinitus.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">tinitus</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\Poze\adictii si abuz de substante.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center">
                adicții și abuz<br></br>de substanțe
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="\Poze\tulburari de vorbire.avif"
                className="h-[50px] w-[50px]"
              ></img>
              <p className="text-center p-2">tulburări de vorbire</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="\Poze\ADHD.avif" className="h-[50px] w-[50px]"></img>
              <p className="text-center">ADHD</p>
            </div>
          </div>
          <h1 className="text-4xl text-customOrange mt-12 mb-12">
            cine efectuează ședințele de neurofeedback?
          </h1>
          <p className="text-center w-11/12 text-sm">
            Pot să se specializeze în neurofeedback absolvenții de studii
            superioare din domeniile sănătății umane și mentale: psihologi
            clinicieni, neurologi, psihiatri, psihopedagogi, etc.
          </p>
          <h1 className="text-4xl text-customOrange mt-12 mb-12">testimoniale</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <iframe
              src="https://www.youtube.com/embed/1rcZrkHL4fk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/jiFPW7le1jA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/H276cfkL5Lo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/TqP3mI-VABA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://player.vimeo.com/video/190104388"
              title="Vimeo video player"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Y4HACYS8MFw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mt-12">
          <Contact />
        </div>
      </div>
    </>

  );
}
