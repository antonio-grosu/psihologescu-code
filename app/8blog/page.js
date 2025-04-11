import Contact from "../0components/7contact";
import BlogCardComponent from "../0components/8BlogCardComponent";

export default function Blog() {
  return (
    <div className="flex justify-center px-40">
      <BlogCardComponent
        image={"/PozeCarousel/poza1.webp"}
        heading={"Cum hranim relatia de cuplu prin practica recunostineti"}
        text={
          "Poate ca mare parte dintre noi am fost invatati sa credem ca relatiile curg de la sine si cumva sa lasam in afara controlului nostru..."
        }
      />
      {/* <Contact /> */}
    </div>
  );
}
