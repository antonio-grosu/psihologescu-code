export default function Contact() {
  return (
    <div className="mt-12">
      <img src="./Poze/pozaTantiCareScrie.avif" className="w-full"></img>
      <h1 className="text-red-500 text-5xl text-center pt-12">contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-8 gap-4">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center gap-8">
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
          <div className="flex flex-col gap-6 pl-32 mt-8">
            <div className="flex flex-row items-center gap-8">
              <img src="/Poze/orar.avif" className="w-12 h-12"></img>
              <p>
                Luni - Vineri<br></br>10:00 - 20:00
              </p>
            </div>
            <div className="flex flex-row items-center gap-8">
              <img src="/Poze/locatie.avif" className="w-12 h-12" />
              <a
                href="https://www.google.com/maps?q=Psihologescu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Strada Panait Iatropol, nr. 27,
                <br />
                sector 5, București
              </a>
            </div>
            <div className="flex flex-row items-center gap-8">
              <img src="/Poze/telefon.avif" className="w-12 h-12" />
              <a
                href="tel:+40740218232"
                className="text-blue-500 hover:underline"
              >
                (+40) 740 218 232
              </a>
            </div>
            <div className="flex flex-row items-center gap-8">
              <img src="/Poze/mail.avif" className="w-12 h-12" />
              <a
                href="mailto:psihologescu@gmail.com"
                className="text-blue-500 hover:underline"
              >
                psihologescu@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="">
          harta
        </div>
      </div>
    </div>
  );
}
