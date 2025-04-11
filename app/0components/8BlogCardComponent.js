import Image from "next/image";

export default function BlogCardComponent({ image, heading, text }) {
  return (
    <div className="flex w-full gap-12 px-8 py-10 border border-solid border-black/10">
      <div
        className={`w-1/2 bg-cover bg-center min-h-[500px]`}
        style={{ backgroundImage: `url("/PozeCarousel/poza1.webp")` }}
      ></div>
      {/* aici tin chestiile din dreapta */}
      <div className="flex w-1/2 flex-col gap-12 relative">
        {" "}
        {/* aici tin chestiile din dreapta sus, poza psihologescu si data */}{" "}
        <div className="flex gap-4 text-lg">
          {" "}
          <Image src="" width={20} height={20}></Image>{" "}
          <div className="flex flex-col">
            <p>psihologescu</p>
            {/* aici trebuie sa schimb cu data cand a fost adaugat component */}
            <p>21 dec. 2021</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl text-orange-500 hover:text-orange-500/50 cursor-pointer">
            {heading}
          </h1>
          <p className="text-xl">{text}</p>
        </div>
        <div className="absolute bottom-0 w-full border-t border-solid border-black/40 pt-10">
          {/* aici trebuie sa schimb cu comentariile actuale */}
          <p>0 comentarii</p>
        </div>
      </div>
    </div>
  );
}
