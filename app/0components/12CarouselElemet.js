export default function CarouselElement({ text, numar }) {
  let cercuri = [];
  for (let i = 0; i < numar; i++) {
    cercuri.push(i);
  }
  return (
    <div className="w-full bg-indigo-100 flex flex-col  items-center py-24">
      <div className="flex justify-around items-center">
        <svg
          className="w-18 h-18 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        <p className="w-1/3 text-xl">{text}</p>
        <svg
          className="w-18 h-18 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
      {cercuri.map((value) => {
        return (
          <svg
            className="w-[48px] h-[48px] text-gray-800 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );
      })}
    </div>
  );
}
