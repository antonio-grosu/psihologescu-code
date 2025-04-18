import { useEffect } from "react";

export const PopUp = ({ hidden, setHidden }) => {
  // useEffect(() => {
  //   if (localStorage.getItem("popup") === "true") {
  //     setHidden(true);
  //   } else {
  //     localStorage.setItem("popup", "false");
  //   }
  // }, [setHidden]);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (!hidden)
    return (
      <div
        className="absolute left-1/2  w-full h-screen bg-black/40 -translate-x-1/2 z-[9999] 
      flex flex-col gap-4 items-center  px-8  items-center justify-center
      bg-gray-200 p-8 rounded-lg shadow-lg"
      >
        <div className="md:w-1/2 w-full bg-gray-100 p-24 rounded-xl xl:w-1/3">
          <h1 className="text-xl font-semibold text-center">
            Ai nevoie de terapie?
          </h1>
          <button
            className="bg-orange-500 mt-12 hover:bg-orange-600 transition-colors text-white p-2 rounded-md w-full"
            onClick={() => {
              setHidden(true);
              localStorage.setItem("popup", "true");
            }}
          >
            Da, vreau să aflu mai multe
          </button>
          <button
            className="bg-orange-500/50 mt-2 text-black hover:bg-orange-600 transition-colors  p-2 rounded-md w-full"
            onClick={() => {
              setHidden(true);
              localStorage.setItem("popup", "true");
            }}
          >
            Inchide
          </button>
        </div>
      </div>
    );

  return null;
};
