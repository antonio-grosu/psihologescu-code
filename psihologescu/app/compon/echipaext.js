import Contact from "./contact";

export default function Echipaext() {
  return (
    <div>
      <div className="mt-12 flex justify-center">
        <img src="/Poze/logoPsihologescu.avif"></img>
        <h1 className="text-5xl text-customOrange">echipa</h1>
        <p className="text-center">
          Serviciile Psihologescu sunt asigurate de către o mică echipă ce a
          început să se dezvolte recent. Cei doi psihoterapeuți, Adina Escu și,
          Arina Cismaru se ocupă de ședințele de terapie și de relația directă
          cu fiecare client pentru a asigura succesul demersului terapeutic.
        </p>
        <p className="text-center">
          În ceea ce privește cercetarea, comunicarea, prezența în mediul online
          și social media, echipa Psihologescu are membri de încredere care
          colaborează cu cei doi psihoterapeuți pentru ca mesajul nostru să
          ajungă la public sincer și corect.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        {/* adina escu */}
        <div className="flex flex-col">
          <h2>adina escu</h2>
          <img src="/Poze/pozaAdinaEscu.avif"></img>
          <p className="text-center">
            psihoterapeut și psiholog clinician, absolventă a Clinical course in
            neurofeedback/EEG biofeedback la Hamburg
          </p>
        </div>

        {/* despre adina escu */}
        <div className="flex flex-col">
          <p>
            Este printre primii specialisti neurofeedback din tara, absolvind
            cursul metoda Othmer si colaboreaza ca trainer in cadrul
            Institutului Neurofeedback Romania.
          </p>
          <p className="mt-8">
            Are rezultate foarte bune în tratarea tulburărilor de somn,
            atacurilor de panică, tulburarilor anxioase, depresiei,
            dependențelor, traumei, insomniilor, dar și problemelor precum ADHD,
            tulburări de vorbire și tulburări de dezvoltare asociate spectrului
            autist.
          </p>
          <p>
            În practica de psihoterapie îmbină metode și tehnici dobândite din
            psihoterapia experiențial-unificatoare, analiza tranzacțională dar
            și constelații sistemice de familie.
          </p>
          <p>
            Este dedicată dezvoltării unor modalități inovative de a aborda
            probleme care sunt dependente de procesul psihoterapeutic și au o
            componentă somatică.
          </p>
          <p className="mt-8">
            Experiența vastă în lucrul cu familii și copii:
          </p>
          <ul>
            <li>psiholog voluntar în cadrul Spitalului Alexandru Obregia,</li>
            <li>psiholog în cadrul Asociației Copii în dificultate.</li>
            <li>
              în 2010 a fondat Asociația I.M.P.A.C.T., prin intermediul căreia a
              derulat programe pentru copii și adolescenți.
            </li>
          </ul>
          <p className="mt-8">
            Adina a desfășurat activități de consiliere psihologică și
            dezvoltare personală în instituții de învățământ atât private, cât
            și de stat.
          </p>
          <p className="mt-8">
            În prezent își desfășoară activitatea în cadrul clinicii
            Psihologescu, aducând la un loc beneficiile neurofeedback-ului și
            ale psihoterapiei.
          </p>
        </div>
        {/* sfarsit adina escu */}

        {/* arina cismaru */}
        <div className="flex flex-col">
          <h2>arina cismaru</h2>
          <img src="/Poze/pozaArinaCismaru.avif"></img>
          <p className="text-center">
            psiholog clinician in supervizare; în formare în psihoterapie
            intergrativă, absolventă a Clinical course in neurofeedback/EEG
            biofeedback
          </p>
        </div>

        {/* despre arina cismaru */}
        <div className="flex flex-col">
          <p>
            Este membru al British Psychological Society (B.P.S.) din Marea
            Britanie.
          </p>
          <p className="mt-8">
            Arina și-a completat studiile universitare în Marea Britanie. Este
            specializată în B.S.c - Bachelor of Science in Psychology la
            University of Manchester.
          </p>
          <p>
            De asemnea, este absolventă a programului de master M.S.c-Master of
            Science of Mental Health Studies oferit de către King’s College din
            Londra.
          </p>
          <p>
            Acest master a ajutat-o să aibă specializare în două ramuri ale
            psihologiei: în domeniul clinic dar și în cel al psihoterapiei.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
}
