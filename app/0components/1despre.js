'use client'; // required for Framer Motion to work with Next.js App Router
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "./0Carousel";
import Post1 from "../6firstCarousel/Post1/page";
import Post2 from "../6firstCarousel/Post2/page";
import Post3 from "../6firstCarousel/Post3/page";
import Post4 from "../6firstCarousel/Post4/page";
import Post5 from "../6firstCarousel/Post5/page";
import Post6 from "../6firstCarousel/Post6/page";
import Post7 from "../6firstCarousel/Post7/page";
import Post8 from "../6firstCarousel/Post8/page";
import Post9 from "../6firstCarousel/Post9/page";
import Post10 from "../6firstCarousel/Post10/page";

const posts = [
  Post1,
  Post2,
  Post3,
  Post4,
  Post5,
  Post6,
  Post7,
  Post8,
  Post9,
  Post10,
];

export default function Despre() {
  return (
    <div>
      <div className="flex flex-col items-center p-8 gap-4 bg-gray-100">
        <motion.img
          src="/Poze/logoPsihologescu.avif"
          className="md:w-1/3 w-full"
          alt="Logo Psihologescu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <p className="text-gray-400 text-sm">găsește-ți echilibrul prin terapie</p>
        <div className="md:w-5/6 w-full">
          <Carousel autoSlide={true}>
            {posts.map((Post, index) => (
              <Post key={index} />
            ))}
          </Carousel>
        </div>

        <h1 className="text-5xl text-customOrange pt-8">despre psihologescu</h1>
        <p className="w-5/6 text-center">
          Psihologescu este un concept venit din dorința de a aduce mai multă
          stare de bine.
        </p>
        <p className="w-5/6 text-center">
          Ne bazăm pe două principii: descoperirea profundă a persoanei și
          folosirea neuroștiințelor.
        </p>
        <p className="w-5/6 text-center">
          Ceea ce este frumos de observat la oameni este faptul că fiecare
          dintre noi este unic.
        </p>
        <p className="w-5/6 text-center">psihoterapeut Adina Escu</p>
        <Link href="/1despreext" className="underline">
          mai mult
        </Link>
      </div>
      <img
        src="./Poze/pozaTantiPsiholog.avif"
        className="my-12"
        alt="Poza psiholog"
      />
    </div>
  );
}
