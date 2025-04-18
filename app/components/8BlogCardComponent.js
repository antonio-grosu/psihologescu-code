import Image from "next/image";

export default function BlogCardComponent({ image, heading, text }) {
  return (
    <div className="flex flex-col w-full lg:gap-12 px-4 lg:px-8 lg:py-10 pb-10 border border-solid border-black/10">
      {/* aici tin poz */}
      <Image
        src={image}
        width={500}
        height={500}
        alt="poza"
        className="w-full  aspect-[16/9] object-cover"
      />
      {/* aici tin chestiile din dreapta */}
      <div className="flex w-full  flex-col gap-12 relative">
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
          <h1 className="text-2xl text-orange-500 hover:text-orange-500/50 cursor-pointer">
            {heading}
          </h1>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
