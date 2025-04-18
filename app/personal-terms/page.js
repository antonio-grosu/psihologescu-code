import { motion } from "framer-motion";
export default function PersonalTerms() {
  return (
    <div className="flex flex-col gap-16 justyfy-center items-center">
      <div className="mt-12 w-full flex flex-col justify-center items-center">
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
        <img src="/Poze/logoPsihologescu.avif" className="w-1/2 md:w-1/3"></img>
        <p className="text-gray-400 text-sm">
          găsește-ți echilibrul prin terapie
        </p>
      </div>
      <div className="w-full px-8 md:w-1/2 my-20 text-lg gap-8 flex flex-col justify-center items-center">
        <p className="text-center">
          Aici poți afla tot ce e nevoie să știi despre cookie-urile utilizate
          de www.psihologescu.ro și despre politica noastră de confidențialitate
          a datelor personale prelucrate pe site. ​
        </p>
        <p className="text-center">
          Accesează mai jos informații despre{" "}
          <span href="/cookies" className="text-orange-500">
            cookie-uri
          </span>{" "}
          sau
          <span href="/policy" className="ml-1 text-orange-500">
            politica de confidențialitate.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-orange-500 text-3xl">
          <a href="/cookies">cookie-uri</a>
        </h1>
      </div>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-4 items-start w-full px-8 md:w-1/2">
          <h2 className="text-xl font-bold">1. Introducere</h2>
          <p className="text-base mb-8">
            Prezenta Politică privind fișierele cookies se aplică tuturor
            utilizatorilor paginii de internet
            <a
              href="http://www.psihologescu.ro"
              target="_blank"
              className=" ml-1 text-orange-500 underline"
            >
              www.psihologescu.ro
            </a>
            . Informațiile prezentate în continuare au ca scop informarea
            utilizatorilor acestei pagini cu privire la plasarea, utilizarea și
            administrarea cookie-urilor de către Psihologescu.
          </p>

          <h2 className="text-xl font-bold">2. Ce sunt cookie-urile?</h2>
          <p className="text-base">
            Folosim termenul „cookie”-uri pentru a ne referi la modulele cookie
            și la tehnologiile similare prin intermediul cărora se pot colecta
            informații în mod automat. Un „Internet Cookie” (cunoscut și ca
            „browser cookie” sau „HTTP cookie”) reprezintă un fișier de mici
            dimensiuni, alcătuit din litere și numere, ce este stocat pe
            dispozitivul utilizatorului.
          </p>
          <p className="text-base mb-8">
            Cookie-urile sunt instalate prin solicitarea emisă de un web-server
            către browser (ex.: Internet Explorer, Firefox, Chrome) și, odată
            instalate, au o durată de existență determinată. Ele nu conțin
            programe software, viruși sau spyware și nu pot accesa informațiile
            stocate pe hard drive-ul utilizatorului.
          </p>

          <h2 className="text-xl font-bold">
            3. Pentru ce scopuri sunt utilizate cookie-urile prin intermediul
            acestei pagini de internet:
          </h2>
          <ul className="list-disc pl-6 text-base">
            <li>
              Îmbunătățirea utilizării paginii, inclusiv identificarea erorilor
              care apar în timpul navigării.
            </li>
            <li>
              Furnizarea de statistici anonime privind modul de utilizare a
              paginii către [deținătorul website-ului].
            </li>
            <li>
              Anticiparea serviciilor sau produselor care vor fi puse la
              dispoziția utilizatorilor.
            </li>
          </ul>
          <p className="text-base mb-8">
            Feedback-ul obținut prin intermediul cookie-urilor permite adoptarea
            unor măsuri pentru îmbunătățirea accesibilității și eficienței
            paginii, precum și memorarea setărilor și preferințelor individuale.
          </p>

          <h2 className="text-xl font-bold">
            4. Care este durata de viață a cookie-urilor?
          </h2>
          <p className="text-base">
            Durata de viață a cookie-urilor variază în funcție de scopul pentru
            care sunt plasate. Se disting următoarele categorii:
          </p>
          <ul className="list-disc pl-6 text-base mb-8">
            <li>
              Cookie-uri de sesiune – sunt șterse automat la închiderea
              browserului.
            </li>
            <li>
              Cookie-uri persistente sau fixe – rămân stocate până la atingerea
              datei de expirare sau până la ștergerea manuală prin setările
              browserului.
            </li>
          </ul>

          <h2 className="text-xl font-bold">
            5. Ce sunt cookie-urile plasate de terți?
          </h2>
          <p className="text-base mb-8">
            Anumite secțiuni de conținut pot fi furnizate de terți, caz în care
            cookie-urile sunt denumite cookie-uri plasate de terți („third party
            cookie-uri”). Furnizorii terți trebuie să respecte regulile de
            protecție a datelor, iar exemple de astfel de furnizori sunt Google
            Analytics și Facebook.
          </p>

          <h2 className="text-xl font-bold">
            6. Ce cookie-uri sunt folosite prin intermediul acestei pagini de
            internet:
          </h2>
          <ul className="list-disc pl-6 text-base mb-8">
            <li>
              Cookie-uri esențiale – permit funcționalități de bază (ex.:
              securitate, verificarea identității, gestionarea rețelei) și nu
              pot fi dezactivate.
            </li>
            <li>
              Cookie-uri de marketing – urmăresc eficiența publicității și ajută
              la furnizarea de reclame adaptate intereselor utilizatorului.
            </li>
            <li>
              Cookie-uri funcționale – colectează date pentru memorarea
              preferințelor utilizatorilor, contribuind la personalizarea
              experienței de navigare.
            </li>
            <li>
              Cookie-uri Analytics – ajută la înțelegerea modului de
              interacțiune al vizitatorilor cu site-ul, identificarea erorilor
              și efectuarea unor analize generale.
            </li>
          </ul>

          <h2 className="text-xl font-bold">
            7. Ce tip de informații sunt stocate și accesate prin intermediul
            cookie-urilor?
          </h2>
          <p className="text-base mb-8">
            Cookie-urile stochează informații sub formă de text, permițând
            recunoașterea browserului până la expirarea lor sau până la
            ștergerea manuală.
          </p>

          <h2 className="text-xl font-bold">
            8. Particularizarea setărilor browserului în ceea ce privește
            cookie-urile
          </h2>
          <p className="text-base mb-8">
            Dacă dispozitivul este utilizat exclusiv de dumneavoastră, se pot
            seta termene lungi de expirare pentru stocarea istoricului de
            navigare. În cazul în care dispozitivul este folosit de mai multe
            persoane, este recomandată ștergerea datelor de navigare la
            închiderea browserului.
          </p>

          <h2 className="text-xl font-bold">
            9. Cum pot fi oprite cookie-urile?
          </h2>
          <p className="text-base">
            Utilizatorii își pot configura browserul pentru a respinge
            cookie-urile sau pentru a permite cookie-uri doar de la anumite
            site-uri. Dezactivarea sau refuzul cookie-urilor nu va afecta
            accesul la pagină, însă reclamele nu vor mai fi personalizate
            conform preferințelor.
          </p>
          <p className="text-base mb-8">
            Folosim cookie-uri și tehnologii similare pentru a activa serviciile
            și funcționalitățile site-ului, precum și pentru a înțelege modul de
            interacțiune al utilizatorilor cu acesta.
          </p>
        </div>
      </div>
    </div>
  );
}
