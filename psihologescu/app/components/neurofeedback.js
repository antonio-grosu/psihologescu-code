import Link from "next/link";

export default function Neurofeedback() {
  return (
    <div>
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <h1 className="text-5xl text-customOrange">neurofeedback</h1>
        <p className="w-5/6 text-center">
          Terapia neurofeedback a devenit tot mai populară în ultimii 20 de ani
          în Europa și acesta este termenul general utilizat pentru antrenarea
          creierului. Sistemul de lucru folosit se bazează pe tehnologia EEG
          (electroencefalogramă) și presupune plasarea unor electrozi la nivelul
          scalpului și captarea semnalului undelor cerebrale. Ceea ce este
          obținut se transformă în feedback vizual, auditiv și tactil.
          Variațiile undelor cerebrale sunt redate în timp real și astfel se
          creează un continuum între perceperea feedbackului și optimizarea a
          ceea ce creierul a înțeles la nivel de funcționare. Persoana care
          beneficiaza de neurofeedback este activă în interacțiunea cu
          feedbackul, însă nu influențează în mod intenționat și conștient
          reglarea propriilor unde cerebrale.
        </p>
        <p className="w-5/6 text-center">
          Pe scurt, este ca a învăța să mergem pe bicicletă și trebuie să facem
          multe repetiții și ajustări până ajungem să ne bucurăm de plimbare.
        </p>
        <p className="w-5/6 text-center">
          Neurofeedback-ul nu aduce daune creierului sau sănătății
          utilizatorului, fiind o terapie foarte sigură, ce nu are
          contraindicații referitoare la starea fiziologică. Folosește doar
          mecanismele de autoreglare proprii utilizatorului și tocmai de aceea
          neurofeedback-ul este o terapie recomandată persoanelor ce prezintă
          simptome din categoriile: tulburări de somn, ADHD, epilepsie,
          anxietate, depresie, atacuri de panică, vertij, tulburări de limbaj,
          deficiențe de atenție, AVC, tulburări din spectrul autist.
        </p>
        <Link href="/neurofeedbackext" className="underline">
          mai mult
        </Link>
      </div>
      <img src="./Poze/pozaNeurofeedback.avif" className="my-12"></img>
    </div>
  );
}
