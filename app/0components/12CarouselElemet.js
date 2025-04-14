export default function CarouselElement({ text }) {
  return (
    <div className="min-w-full px-16 bg-netrual-100 gap-16 flex justify-center items-center py-40 ">
      <p className="w-1/2 text-md font-medium text-center leading-[2em]">
        {text}
      </p>
    </div>
  );
}
