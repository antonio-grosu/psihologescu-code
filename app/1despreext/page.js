import Contact from "../0components/7contact";

export default function Despreext() {
  return (
    <div>
      <div className="mt-12 flex flex-col justify-center items-center">
        <img src="/Poze/logoPsihologescu.avif" className="w-1/2"></img>
        <p className="text-gray-400 text-sm">
          găsește-ți echilibrul prin terapie
        </p>
        <img src="/Poze/pozaDesprePage.avif" className="p-12"></img>
        <div className="flex flex-col gap-4 items-center m-12">
        <h1 className="text-5xl text-customOrange mb-12">despre</h1>
        <p className="text-center">
          Psihologescu este un concept venit din dorința de a aduce mai multă
          stare de bine. A apărut în anul 2010 la inițiativa Adinei Escu,
          psihoterapeut, și de atunci alegem cele mai eficiente metode atât din
          domeniul psihoterapiei, cât și al neuroștiințelor.
        </p>
        <p className="text-center">
          Ne bazăm pe două principii. Primul principiu este cel de a descoperi
          si sprijini omul printr-o înțelegere profundă a lui; iar al doilea
          principiu este cel de a folosi metode și informații din cercetările
          neuroștiințelor și biofeedbackului.
        </p>
        <p className="text-center">
          Ceea ce este frumos de observat la oameni este faptul că oricât de
          asemănători am părea, există ceva unic, nerepetitiv, în fiecare dintre
          noi. Dacă avem răbdare și puțină curiozitate vom găsi în noi acel ceva
          care ne aduce insprirație și noi resurse.
        </p>
        <p className="text-center">psihoterapeut Adina Escu</p>
        </div>
      </div>
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
}
