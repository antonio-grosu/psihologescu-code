export default function Contact() {
  return (
    <div className="mt-12 w-full xl:w-2/3 mb-20">
      <h1 className="text-red-500 text-5xl mb-10 xl:mb-20 text-center pt-12">
        contact
      </h1>
      {/* asta este tot pentru ecrane xl */}
      {/* asta este ala mare care contine tot contactul */}
      <div className="hidden xl:flex flex-col p-8 gap-4 w-full h-full">
        {/* asta este ala care tine toata partea de sus */}
        <div className="flex flex-col text-3xl gap-12 items-between text-xl">
          {/* asta este ala care tine partea sus stanga */}
          <div className="flex flex-col gap-8">
            {/* asta este ala care tine pozele cu ig si fb*/}
            <div className="flex flex-row gap-8">
              <a
                href="https://www.facebook.com/people/Psihologescu/100054663014756/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Poze/facebook-svgrepo-com.svg"
                  alt="Instagram Icon"
                  className="w-20 h-20 hover:opacity-75"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Poze/instagram-svgrepo-com.svg"
                  alt="Instagram Icon"
                  className="w-20 h-20 hover:opacity-75"
                />
              </a>
            </div>
            {/* aici sunt pozele cu ceasu si alte chestii de genu */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-row items-center gap-8">
                <img src="/Poze/orar.avif" className="w-16 h-16"></img>
                <p>
                  Luni - Vineri<br></br>10:00 - 20:00
                </p>
              </div>
              <div className="flex flex-row items-center gap-8">
                <img src="/Poze/locatie.avif" className="w-16 h-16" />
                Strada Panait Iatropol, nr. 27,
                <br />
                sector 5, București
              </div>
              <div className="flex flex-row items-center gap-8">
                <img src="/Poze/telefon.avif" className="w-16 h-16" />
                (+40) 740 218 232
              </div>
              <div className="flex flex-row items-center gap-8">
                <img src="/Poze/mail.avif" className="w-16 h-16" />
                psihologescu@gmail.com
              </div>
            </div>
          </div>
          {/* asta este ala care tine partea sus dreppta */}
          <div className="flex w-full h-auto bg-gray-200"></div>
        </div>
        {/* asta e divul care tine tot ce este jos */}
        <div className="flex flex-row-reverse w-full mt-12 text-xl gap-16 h-full">
          {/* asta este divul care tine jos dreapta */}
          <div className="flex flex-col gap-8">
            <p className="2xl:line-clamp-2 w-full 2xl:w-3/4">
              Te poți abona la newsletter-ul nostru pentru a primi noutăți
              despre proiectele Psihologescu.
            </p>
            <div className="w-full">
              <form className="border-orange-500 border w-full border-solid">
                <div className="w-full flex justify-between">
                  <input
                    className="placeholder-orange-500/40 w-full px-8 py-4"
                    type="mail"
                    name="mail"
                    id="mail"
                    placeholder="adresa de email"
                  ></input>
                  <button
                    type="submit"
                    className="bg-orange-500 px-8 text-white w-fit whitespace-nowrap py-4"
                  >
                    ma abonez
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* asta este divul care tine partea din stanga jos */}
          <div className="flex flex-col justify-between">
            <ul className="flex flex-col justify-between items-start h-full">
              <li>
                <a href="/terms" className="text-orange-500">
                  Politica de confidențialitate a datelor cu caracter personal
                </a>
              </li>
              <li>
                <a href="/terms" className="text-orange-500">
                  Politica de utilizare a cookie-urilor{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* aici ma ocup de ecrana mai mici */}
      {/* asta este divul care tine tot */}
      <div className="flex items-center flex-col px-8 gap-12 xl:hidden">
        {/* asta este divul care tine imaginile de ig si fb */}
        <div className="flex flex-row gap-8">
          <a
            href="https://www.facebook.com/people/Psihologescu/100054663014756/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Poze/facebook-svgrepo-com.svg"
              alt="Instagram Icon"
              className="w-20 h-20 hover:opacity-75"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Poze/instagram-svgrepo-com.svg"
              alt="Instagram Icon"
              className="w-20 h-20 hover:opacity-75"
            />
          </a>
        </div>
        {/* asta este divul care tine pozele si chestile gen orar */}
        <div className="flex flex-col gap-12 text-md">
          <div className="flex flex-row items-center gap-8">
            <img src="/Poze/orar.avif" className="w-12 h-12"></img>
            <p>
              Luni - Vineri<br></br>10:00 - 20:00
            </p>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img src="/Poze/locatie.avif" className="w-12 h-12" />
            Strada Panait Iatropol, nr. 27,
            <br />
            sector 5, București
          </div>
          <div className="flex flex-row items-center gap-8">
            <img src="/Poze/telefon.avif" className="w-12 h-12" />
            (+40) 740 218 232
          </div>
          <div className="flex flex-row items-center gap-8">
            <img src="/Poze/mail.avif" className="w-12 h-12" />
            psihologescu@gmail.com
          </div>
        </div>
        <div className="flex flex-col w-full">
          <ul className="flex flex-col gap-8 text-center items-center xl:items-start">
            <li>
              <a href="/terms" className="text-orange-500">
                Politica de confidențialitate a datelor cu caracter personal
              </a>
            </li>
            <li>
              <a href="/terms" className="text-orange-500">
                Politica de utilizare a cookie-urilor{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
          <p className="2xl:line-clamp-2 w-full 2xl:w-3/4">
            Te poți abona la newsletter-ul nostru pentru a primi noutăți despre
            proiectele Psihologescu.
          </p>
          <div className="w-full">
            <form className="border-orange-500 border w-full border-solid">
              <div className="w-full flex justify-between">
                <input
                  className="placeholder-orange-500/40 w-full px-8 py-4"
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder="adresa de email"
                ></input>
                <button
                  type="submit"
                  className="bg-orange-500 px-8 text-white w-fit whitespace-nowrap py-4"
                >
                  ma abonez
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
