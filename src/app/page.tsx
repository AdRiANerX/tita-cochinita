import Image from "next/image";
import Link from "next/link";

import "animate.css";

import { NavBar } from "./UIComponents/NavBar";
import { SwiperImages } from "./UIComponents/slider/SwiperImages";
import { Grid, GridSmall } from "./UIComponents/grid";

const images = [
  {
    _id: "001",
    urlImg: "/img/posts/01.png",
    altImg: "Imagen X",
  },
  {
    _id: "002",
    urlImg: "/img/posts/04.png",
    altImg: "Imagen X",
  },
  {
    _id: "003",
    urlImg: "/img/posts/10.png",
    altImg: "Imagen X",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <SwiperImages images={images} />

      <section id="promos">
        <Grid images={images} bgColor="bg-tita-dark" title="😎 ¡PROMOS! 👇🏽" />
      </section>

      <section id="menu">
        <Grid
          images={images}
          title="🌮🌯 ¡Menú! 🍜👇🏽"
          colorTitle="text-tita-dark"
        />
      </section>

      <section id="feed">
        <GridSmall bgColor="bg-tita-dark" title="🤳📸 ¡Feed! 👇🏽" />
      </section>

      <section
        id="contacto"
        className="bg-tita-dark flex flex-col justify-center items-center mt-4 pb-8"
      >
        <div className="h-24 bg-tita-dark flex justify-center items-center mt-4">
          <h2 className=" text-white font-breeSerif text-3xl animate__animated animate__infinite animate__pulse ">
            📲📍 ¡Síguenos! 👇🏽
          </h2>
        </div>
        <div className="flex justify-center items-center mb-8">
          <Link
            href="https://www.facebook.com/TITALONCHERIA"
            target="_blank"
            className="mx-4"
          >
            <Image
              alt="Icon Facebook"
              src="/icons/facebook-48.svg"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.instagram.com/tita_cochinita"
            target="_blank"
            className="mx-4"
          >
            <Image
              alt="Icon Instagram"
              src="/icons/instagram-48.svg"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60330.70281838338!2d-98.3055125513672!3d19.078288600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc7e6cfac5db7%3A0x30dd10edb484bd3f!2sTita%20Cochinita%20de%20Barrio!5e0!3m2!1ses-419!2smx!4v1690410251112!5m2!1ses-419!2smx"
          width="370"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h6 className="mt-4 text-white text-xs ">
          | Tita Cochinita de Barrio ® | 2023 |
        </h6>
        <span className="text-white text-xs">
          Power By{" "}
          <Link
            href="https://www.instagram.com/adrianerx1/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            @AdRiANerX
          </Link>
        </span>
      </section>
    </div>
  );
}
