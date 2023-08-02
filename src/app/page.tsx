import Image from "next/image";
import Link from "next/link";

import "animate.css";

import { NavBar } from "./UIComponents/NavBar";
import { SwiperImages } from "./UIComponents/slider/SwiperImages";
import { Grid, GridSmall } from "./UIComponents/grid";

const feedImages = [
  {
    _id: "01",
    urlImg: "/img/feed/01.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "02",
    urlImg: "/img/feed/02.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "03",
    urlImg: "/img/feed/03.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "04",
    urlImg: "/img/feed/04.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "05",
    urlImg: "/img/feed/05.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "06",
    urlImg: "/img/feed/06.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "07",
    urlImg: "/img/feed/07.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "08",
    urlImg: "/img/feed/08.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "09",
    urlImg: "/img/feed/09.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "10",
    urlImg: "/img/feed/10.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "11",
    urlImg: "/img/feed/11.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "12",
    urlImg: "/img/feed/12.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "13",
    urlImg: "/img/feed/13.png",
    altImg: "Feed Tita Cochinita de Barrio Puebla",
  },
];

const menuImages = [
  {
    _id: "001",
    urlImg: "/img/promos/promo-1.webp",
    altImg: "Promoción 1 Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "002",
    urlImg: "/img/promos/promo-2.webp",
    altImg: "Promoción 2 Tita Cochinita de Barrio Puebla",
  },
];

const promoImages = [
  {
    _id: "001",
    urlImg: "/img/promos/promo-1.webp",
    altImg: "Promoción 1 Tita Cochinita de Barrio Puebla",
  },
  {
    _id: "002",
    urlImg: "/img/promos/promo-2.webp",
    altImg: "Promoción 2 Tita Cochinita de Barrio Puebla",
  },
];

const slideImages = [
  {
    _id: "01",
    urlImg: "/img/slide/01.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
  {
    _id: "02",
    urlImg: "/img/slide/02.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
  {
    _id: "03",
    urlImg: "/img/slide/03.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
  {
    _id: "04",
    urlImg: "/img/slide/04.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
  {
    _id: "05",
    urlImg: "/img/slide/05.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
  {
    _id: "06",
    urlImg: "/img/slide/06.webp",
    altImg: "Tita Cochinita de Barrio - Recuerdos",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <SwiperImages images={slideImages} />

      <section id="promos">
        <Grid
          images={promoImages}
          bgColor="bg-tita-dark"
          title="😎 ¡PROMOS! 👇🏽"
        />
      </section>

      <section id="menu">
        <Grid
          images={menuImages}
          title="🌮🌯 ¡Menú! 🍜👇🏽"
          colorTitle="text-tita-dark"
        />
      </section>

      <section id="feed">
        <GridSmall
          images={feedImages}
          bgColor="bg-tita-dark"
          title="🤳📸 ¡Feed! 👇🏽"
        />
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
