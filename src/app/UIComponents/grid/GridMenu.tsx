import { FC, Fragment } from "react";
import Image from "next/image";
import { AnimationOnScroll } from "..";

const dataMenu = [
  {
    _id: "S1",
    nameSection: "Tacos",
    urlImg: "/img/menu/taco.gif",
    altImg: "Tacos de cochinita",
    items: [
      {
        _id: "ST1",
        name: "· Taco de cochinita",
        price: "20",
        popular: false,
      },
      {
        _id: "ST2",
        name: "· Taco de cochinita con Queso",
        price: "25",
        popular: true,
      },
      {
        _id: "ST3",
        name: "· Orden de 5 Tacos",
        price: "85",
        popular: false,
      },
      {
        _id: "ST4",
        name: "· Orden de 5 Tacos con Queso",
        price: "92",
        popular: false,
      },
      {
        _id: "ST5",
        name: "· Taco árabe de cochinita",
        price: "39",
        popular: false,
      },
      {
        _id: "ST6",
        name: "· Taco árabe de cochinita con Queso",
        price: "45",
        popular: true,
      },
    ],
  },
  {
    _id: "S2",
    nameSection: "Tortas",
    urlImg: "/img/menu/torta.gif",
    altImg: "Torta de cochinita",
    items: [
      {
        _id: "STT1",
        name: "· Torta de cochinita con frijol y mayonesa",
        price: "55",
        popular: false,
      },
      {
        _id: "STT1",
        name: "· Torta de cochinita con Queso, frijol y mayonesa",
        price: "62",
        popular: false,
      },
    ],
  },
  {
    _id: "S3",
    nameSection: "Gringa",
    urlImg: "",
    altImg: "",
    items: [
      {
        _id: "SG1",
        name: "· Gringa de cochinita, dos panes árabes, cochinita, queso y complementos.",
        price: "79",
        popular: false,
      },
    ],
  },
  {
    _id: "S4",
    nameSection: "Costra Maya",
    urlImg: "",
    altImg: "",
    items: [
      {
        _id: "SC1",
        name: "· Tortilla árabe y cochinita con costra de queso",
        price: "69",
        popular: true,
      },
    ],
  },
  {
    _id: "S5",
    nameSection: "Burrito Maya",
    urlImg: "",
    altImg: "",
    items: [
      {
        _id: "SB1",
        name: "· Tortilla de harina, cochinita, frijoles y arroz",
        price: "80",
        popular: false,
      },
      {
        _id: "SB2",
        name: "· Tortilla de harina, cochinita, frijoles y arroz con queso",
        price: "92",
        popular: true,
      },
    ],
  },
  {
    _id: "S6",
    nameSection: "Cochinita por Kilo",
    urlImg: "",
    altImg: "",
    items: [
      {
        _id: "SCK1",
        name: "· 1 Kilo de cochinita, con tortas de agua y tortillas",
        price: "265",
        popular: false,
      },
      {
        _id: "SCK2",
        name: "· 3/4 Kilo de cochinita, con tortas de agua y tortillas",
        price: "220",
        popular: false,
      },
      {
        _id: "SCK3",
        name: "· 1/2 Kilo de cochinita, con tortas de agua y tortillas",
        price: "140",
        popular: false,
      },
    ],
  },
  {
    _id: "S6",
    nameSection: "Refrescos",
    urlImg: "",
    altImg: "",
    items: [
      {
        _id: "SCK1",
        name: "· Refresco Lulu, Pascual u Orange Crush",
        price: "25",
        popular: false,
      },
    ],
  },
];
interface Props {
  title: string;
  colorTitle?: string;
  bgColor?: string;
}

export const GridMenu: FC<Props> = ({
  bgColor,
  title,
  colorTitle = "text-white",
}) => {
  return (
    <Fragment>
      <div
        className={`sticky top-0 z-40 h-24 ${bgColor} flex justify-center items-center mt-4 -mb-0.5`}
      >
        <h2 className={` ${colorTitle} font-breeSerif text-3xl`}>
          <p className="animate__animated animate__infinite animate__pulse">
            {title}
          </p>
        </h2>
      </div>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 md:px-4 ${bgColor}`}
      >
        {dataMenu.map((secc) => (
          <AnimationOnScroll
            key={secc._id}
            classNameInView="scale-100 animate__animated animate__zoomInDown "
            classNameNotInView="scale-0"
          >
            <p className="font-lobster text-center text-3xl m-4">
              {secc.nameSection}
            </p>
            {secc.urlImg !== "" && (
              <Image
                alt={secc.altImg}
                src={secc.urlImg}
                className="h-auto w-full rounded-lg"
                width={400}
                height={400}
                blurDataURL="data:image/webp;base64,UklGRp4CAABXRUJQVlA4WAoAAAAgAAAAEQEAmQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsAAAAPANAJ0BKhIBmgA/cbjYZbSuq6cgKAKQLglpbuCf8f5PIABPYB77ZOQ99soGXi5OQ+GK0+e7JR7Sp2ZNHPctKzX9B7xhI07R+gIwnyeQWvdkv8Qlych7+6WhVLPJos0RuMVp7ZORAVLzhBf46p7T20Iy2/ivI8SeAAD+7Jj73uiRufp3PNKJcmtFCvJswmh3pYKQBLSFi+0edg6nuwq5gRnJ0qsgko/9CRCIzLy4EAAA"
                placeholder="blur"
              />
            )}
            <ul className="mt-4">
              {secc.items.map((item) => (
                <li
                  key={item._id}
                  className="flex justify-between items-center border-b-2 mb-2 mx-4"
                >
                  <p className="flex justify-between items-center font-breeSerif text-xl">
                    {item.popular && (
                      <Image
                        alt="Popular - On Fire"
                        src="/icons/fire.png"
                        className=" rounded-lg"
                        width={20}
                        height={20}
                      />
                    )}
                    {item.name}
                  </p>
                  <p className="font-breeSerif text-2xl">${item.price}</p>
                </li>
              ))}
            </ul>
          </AnimationOnScroll>
        ))}
      </div>
    </Fragment>
  );
};
