"use client";

import { InView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
}

export function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: Props) {
  return (
    <InView
      triggerOnce
      threshold={1}
      delay={100}
      onChange={(e) => console.log("entro", e)}
    >
      {({ inView, ref }) => {
        console.log(inView);
        return (
          <div
            ref={ref}
            className={` ${inView ? classNameInView : classNameNotInView}`}
          >
            {children}
          </div>
        );
      }}
    </InView>
  );
}
