import Image from "next/image";

export default function BlogCardComponent({ image, heading, text }) {
  return (
    <div className="flex flex-col max-w-[1800px] lg:flex-row w-full lg:gap-12 px-4 lg:px-8 lg:py-10 pb-10 border border-solid border-black/10">
      {/* aici tin poz */}
      <div
        className={`w-full lg:w-1/2 bg-cover bg-center md:min-h-[500px] min-h-[300px]`}
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      {/* aici tin chestiile din dreapta */}
      <div className="flex w-full lg:w-1/2 flex-col gap-12 relative">
        {" "}
        {/* aici tin chestiile din dreapta sus, poza psihologescu si data */}{" "}
        <div className="flex gap-4 text-lg">
          {" "}
          {/* <Image src="" width={20} height={20}></Image>{" "} */}
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
        <div className="lg:absolute bottom-0 w-full border-t border-solid border-black/40 pt-10">
          {/* aici trebuie sa schimb cu comentariile actuale */}
          <p>0 comentarii</p>
        </div>
      </div>
    </div>
  );
}
