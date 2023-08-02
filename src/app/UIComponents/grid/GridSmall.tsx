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

export const GridSmall: FC<Props> = ({
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
        <h2
          className={` ${colorTitle} font-breeSerif text-3xl animate__animated animate__infinite animate__pulse`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8 md:px-4 ${bgColor} rounded-lg`}
      >
        {images &&
          images.map((img) => (
            <AnimationOnScroll
              key={img._id}
              classNameInView="scale-100 animate__animated animate__zoomInDown delay-75"
              classNameNotInView="scale-0"
            >
              <Image
                alt={img.altImg}
                src={img.urlImg}
                className="h-auto w-full rounded-lg"
                width={400}
                height={400}
                quality={30}
                blurDataURL="data:image/webp;base64,UklGRp4CAABXRUJQVlA4WAoAAAAgAAAAEQEAmQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsAAAAPANAJ0BKhIBmgA/cbjYZbSuq6cgKAKQLglpbuCf8f5PIABPYB77ZOQ99soGXi5OQ+GK0+e7JR7Sp2ZNHPctKzX9B7xhI07R+gIwnyeQWvdkv8Qlych7+6WhVLPJos0RuMVp7ZORAVLzhBf46p7T20Iy2/ivI8SeAAD+7Jj73uiRufp3PNKJcmtFCvJswmh3pYKQBLSFi+0edg6nuwq5gRnJ0qsgko/9CRCIzLy4EAAA"
                placeholder="blur"
              />
            </AnimationOnScroll>
          ))}
      </div>
    </Fragment>
  );
};
