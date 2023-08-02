"use client";
import { FC, Fragment } from "react";
import Image from "next/image";
import { AnimationOnScroll } from "..";

interface Images {
  urlImg: string;
  altImg: string;
  _id: string;
}

interface Props {
  title: string;
  colorTitle?: string;
  bgColor?: string;
  images: Images[];
}

export const Grid: FC<Props> = ({
  bgColor,
  title,
  colorTitle = "text-white",
  images,
}) => {
  return (
    <Fragment>
      <div
        className={`sticky top-0 z-40 h-24 ${bgColor} flex justify-center items-center mt-4 -mb-0.5 rounded-lg`}
      >
        <h2 className={` ${colorTitle} font-breeSerif text-3xl`}>
          <p className="animate__animated animate__infinite animate__pulse">
            {title}
          </p>
        </h2>
      </div>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 md:px-4 ${bgColor} rounded-lg`}
      >
        {images &&
          images.map((img) => (
            <AnimationOnScroll
              key={img._id}
              classNameInView="scale-100 animate__animated animate__zoomInDown "
              classNameNotInView="scale-0"
            >
              <Image
                alt={img.altImg}
                src={img.urlImg}
                className="h-auto w-full rounded-lg"
                width={400}
                height={400}
              />
            </AnimationOnScroll>
          ))}
      </div>
    </Fragment>
  );
};
