export default function Echipa() {
  return (
    <div>
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <h1 className="text-5xl text-customOrange">echipa psihologesu</h1>
        <p className="w-5/6 text-center">
          Serviciile Psihologescu sunt asigurate de către o mică echipă ce a
          început să se dezvolte recent. Cei doi psihoterapeuți, Adina Escu și,
          Arina Cismaru se ocupă de ședințele de terapie și de relația directă
          cu fiecare client pentru a asigura succesul demersului terapeutic.
        </p>
        <p className="w-5/6 text-center">
          În ceea ce privește cercetarea, comunicarea, prezența în mediul online
          și social media, echipa Psihologescu are membri de încredere care
          colaborează cu cei doi psihoterapeuți pentru ca mesajul nostru să
          ajungă la public sincer și corect.
        </p>
        <button className="underline">mai mult</button>
      </div>
      <img src="./Poze/pozaEchipa.avif" className="my-12"></img>
    </div>
  );
}
