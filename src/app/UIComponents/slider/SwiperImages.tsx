"use client";
import { CSSProperties, FC } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

export interface SwiperImageProps {
  _id: string;
  urlImg: string;
  altImg: string;
}
interface Props {
  images: SwiperImageProps[];
  delay?: number;
}

export const SwiperImages: FC<Props> = ({ images, delay = 3000 }) => {
  const carouselImage: CSSProperties = {
    width: "100%",
    height: "auto",
  };

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop
      autoplay={{ delay }}
    >
      {images.map((image) => (
        <SwiperSlide key={image._id} style={carouselImage}>
          <Image
            alt=""
            src={image.urlImg}
            className="w-full h-full md:h-[600px] lg:h-[450px] object-cover"
            width={853}
            height={600}
            blurDataURL="data:image/webp;base64,UklGRp4CAABXRUJQVlA4WAoAAAAgAAAAEQEAmQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsAAAAPANAJ0BKhIBmgA/cbjYZbSuq6cgKAKQLglpbuCf8f5PIABPYB77ZOQ99soGXi5OQ+GK0+e7JR7Sp2ZNHPctKzX9B7xhI07R+gIwnyeQWvdkv8Qlych7+6WhVLPJos0RuMVp7ZORAVLzhBf46p7T20Iy2/ivI8SeAAD+7Jj73uiRufp3PNKJcmtFCvJswmh3pYKQBLSFi+0edg6nuwq5gRnJ0qsgko/9CRCIzLy4EAAA"
            placeholder="blur"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
