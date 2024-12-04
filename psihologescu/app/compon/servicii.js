export default function Servicii() {
  return (
    <div>
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <h1 className="text-2xl text-orange-500">servicii</h1>
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
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-1/3 bg-gray-400 gap-4 p-6 aspect-square">
          <h1 className="text-center text-2xl mb-8">
            evaluare
            <br />
            psihologică
          </h1>
          <p className="text-center">
            Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
            asupra celui mai bun demers terapeutic.
          </p>
          <button className="underline">mai mult</button>
        </div>
        <div className="flex flex-col justify-center w-1/3 bg-customPeach gap-4 p-6 aspect-square">
          <h1 className="text-center text-2xl mb-8">neurofeedback</h1>
          <p className="text-center">
            Se poate folosi terapia neurofeedback pentru ameliorarea vieții și
            stării de sănătate dacă simptomele pe care le aveți indică aceasta.
          </p>
          <button className="underline">mai mult</button>
        </div>
        <div className="flex flex-col justify-center w-1/3 bg-customGray gap-4 p-6 aspect-square">
          <h1 className="text-center text-2xl mb-8">
            evaluare
            <br />
            psihologică
          </h1>
          <p className="text-center">
            Ne cunoaștem și, o dată cu examinarea inițială, decidem împreună
            asupra celui mai bun demers terapeutic.
          </p>
          <button className="underline">mai mult</button>
        </div>
      </div>
    </div>
  );
}
