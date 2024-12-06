export default function Servicii() {
  return (
    <div>
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <h1 className="text-5xl text-customOrange">servicii</h1>
        <p className="w-5/6 text-center">
          În cei 10 ani de experiență, Psihologescu a dezvoltat metode complexe
          de a veni în întâmpinarea nevoilor persoanelor de toate vârstele din
          societatea contemporană. Din punct de vedere al orientării
          terapeutice, Psihologescu abordează procesul terapeutic într-o manieră
          integrativă ce permite crearea unei relații unice cu fiecare persoană
          interesată de serviciile oferite.
        </p>
        <p className="w-5/6 text-center">
          Serviciile Psihologescu constau în evaluare psihologică, terapie
          neurofeedback și psihoterapie. Astfel, o dată cu evaluarea psihologică
          inițială se pun bazele relației terapeutice și se stabilește o metodă
          de lucru optimă.
        </p>
        <button className="underline">mai mult</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12">
        <div className="flex flex-col justify-center bg-customGray gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">
            evaluare psihologică
          </h1>
          <p className="text-center">
            Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
            asupra celui mai bun demers terapeutic.
          </p>
          <button className="underline">mai mult</button>
        </div>
        <div className="flex flex-col justify-center bg-customPeach gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">neurofeedback</h1>
          <p className="text-center">
            Se poate folosi terapia neurofeedback pentru ameliorarea vieții și
            stării de sănătate dacă simptomele pe care le aveți indică aceasta.
          </p>
          <button className="underline">mai mult</button>
        </div>
        <div className="flex flex-col justify-center bg-customPiele gap-4 p-6 lg:py-12">
          <h1 className="text-center text-4xl mb-8">psihoterapie</h1>
          <p className="text-center">
            Psihoterapia este întotdeauna recomandată, fiind una din cele mai
            complexe metode de explorare în siguranță a persoanei noastre.
          </p>
          <button className="underline">mai mult</button>
        </div>
      </div>
    </div>
  );
}
