import Link from "next/link";

export default function Cui() {
  return (
    <div className="mt-12">
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <h1 className="text-5xl text-customOrange my-8">
          cui se adreseaza terapia?
        </h1>
        <p className="w-5/6 text-center">
          Psihoterapia și terapia neurofeedback se adresează persoanelor de
          toate vârstele.
        </p>
        <p className="w-5/6 text-center">
          În cadrul relației terapeutice dintre psihoterapeut și beneficiarul
          terapiei, se crează un mediu sigur în care se pot explora cauzele și
          soluțiile pentru problemele de sănătate sau neplăcerile cauzate de:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-8 justify-center gap-12 w-5/6">
          <div className="flex flex-col items-center">
            <img src="\Poze\anxietate.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">anxietate</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\depresie.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">depresie</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\stres.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">stres</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\tulburari de somn.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">tulburări de somn</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\oboseala cronica.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">oboseală cronică</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\PTSD.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">PTSD</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\dificultati de invatare.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">
              dificultăți<br></br>de învățare
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\traumatism cerebral AVC epilepsie.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">
              traumatism<br></br>cerebral, AVC,<br></br>epilepsie
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\autism.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">autism</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\tulburari obsesiv compulsive.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">
              tulburări obsesiv<br></br>compulsive
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\tulburari de dispozitie.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">
              tulburări de<br></br>dispoziție
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\vertij.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">vertij</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\ticuri nervoase.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">ticuri nervoase</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\migrene si cefalee.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">migrene și cefalee</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\tinitus.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">tinitus</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\adictii si abuz de substante.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">
              adicții și abuz<br></br>de substanțe
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="\Poze\tulburari de vorbire.avif"
              className="h-[65px] w-[65px]"
            ></img>
            <p className="text-center">tulburări de vorbire</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="\Poze\ADHD.avif" className="h-[65px] w-[65px]"></img>
            <p className="text-center">ADHD</p>
          </div>
        </div>
        <Link href="/5cuiext" className="underline my-8">mai mult</Link>
      </div>
      <img src="./Poze/pozaTantiGamerita.avif" className="w-full my-12"></img>
    </div>
  );
}
