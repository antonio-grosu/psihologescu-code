import Contact from "../0components/7contact";
import BlogCardComponent from "../0components/8BlogCardComponent";
import Filter from "../0components/9Filter";

const blogData = [
  {
    image: "/PozeCarousel/poza1.webp",
    heading: "Cum hranim relatia de cuplu prin practica recunostineti",
    text: "Poate ca mare parte dintre noi am fost invatati sa credem ca relatiile curg de la sine si cumva sa lasam in afara controlului nostru...",
    labels: ["cuplu", "recunoștință"],
  },
  {
    image: "/PozeCarousel/poza3.webp",
    heading: "Cum hrănim relația de cuplu",
    text: "Text scurt...",
    labels: ["cuplu", "recunoștință"],
  },
  {
    image: "/PozeCarousel/poza2.webp",
    heading: "Gestionarea anxietății",
    text: "Text scurt...",
    labels: ["anxietate", "respirație"],
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col items-center px-8 md:px-40 py-40">
      <Filter />
      {blogData.map((value, index) => {
        console.log(value.image);
        return (
          <>
            <BlogCardComponent
              key={index}
              image={value.image}
              heading={value.heading}
              text={value.text}
            />
          </>
        );
      })}
      {/* <Contact /> */}
    </div>
  );
}
