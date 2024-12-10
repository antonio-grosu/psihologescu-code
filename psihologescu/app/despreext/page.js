import Contact from "../compon/contact";

export default function Despreext() {
  return (
    <div>
      <div className="mt-12 flex justify-center">
        <img src="/Poze/logoPsihologescu.avif"></img>
        <img src="/Poze/pozaDesprePage.avif"></img>
        <h1 className="text-5xl text-customOrange">despre</h1>
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
      <div className="mt-12">
        <Contact />
      </div>
    </div>
  );
}
