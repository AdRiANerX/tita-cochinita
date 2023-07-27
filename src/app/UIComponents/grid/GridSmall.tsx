import { FC, Fragment } from "react";
import Image from "next/image";

interface Props {
  title: string;
  colorTitle?: string;
  bgColor?: string;
}

export const GridSmall: FC<Props> = ({
  bgColor,
  title,
  colorTitle = "text-white",
}) => {
  return (
    <Fragment>
      <div
        className={`h-24 ${bgColor} flex justify-center items-center mt-4 -mb-0.5`}
      >
        <h2
          className={` ${colorTitle} font-breeSerif text-3xl animate__animated animate__infinite animate__pulse`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8 md:px-4 ${bgColor}`}
      >
        <Image
          alt=""
          src="/img/posts/10.png"
          className="h-auto w-full rounded-lg"
          width={200}
          height={200}
        />
        <Image
          alt=""
          src="/img/posts/01.png"
          className="h-auto w-full rounded-lg"
          width={200}
          height={200}
        />
        <Image
          alt=""
          src="/img/posts/04.png"
          className="h-auto w-full rounded-lg"
          width={200}
          height={200}
        />
        <Image
          alt=""
          src="/img/posts/10.png"
          className="h-auto w-full rounded-lg"
          width={200}
          height={200}
        />
      </div>
    </Fragment>
  );
};
