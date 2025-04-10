export default function Post1() {
  return (
    <div>
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src="/PozeCarousel/poza1.webp"
          alt="Practica recunoștinței"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-sm mt-2">21 dec. 2021</p>
      <h1 className="mt-4 text-2xl text-customOrange mb-16">
        Cum hrănim relația de cuplu prin practica recunoștinței?
      </h1>
      <p className="text-sm mt-2 truncate overflow-hidden hidden md:block whitespace-nowrap mb-8">
        Poate că mare parte dintre noi am fost învățați să credem că relațiile
        curg de la sine și cumva să lăsăm în afara controlului nostru ceea ce se
        întâmplă cu ele: dacă merge, merge, dacă nu, nu.
      </p>
    </div>
  );
}
