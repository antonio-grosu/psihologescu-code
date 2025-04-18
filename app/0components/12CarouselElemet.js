export default function CarouselElement({ text }) {
  return (
    <div className="min-w-full px-8 md:px-16 bg-netrual-100 gap-16 flex justify-center items-center py-40 ">
      <p className="w-full text-md font-medium text-center leading-[2em]">
        {text}
      </p>
    </div>
  );
}
