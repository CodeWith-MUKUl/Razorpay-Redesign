import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeUp from "../../FadeUp";

import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/scrll1.png";
import Img3 from "../../assets/img3.png";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const containerWrapperRef = useRef(null);

  const Items = [
    {
      i: <i className="ri-stack-line "></i>,
      tittle: "Payment links without writing a line of code",
      desc: "Generate smart links with amount, currency and all local payment methods, ready to send.",
      src: Img1,
    },
    {
      i: <i className="ri-store-3-line"></i>,
      tittle: "Payments in installments with or without interest",
      desc: "Define whether the interest is assumed by your company or by the client, depending on the country strategy.",
      src: Img2,
    },
    {
      i: <i className="ri-calendar-schedule-line"></i>,
      tittle: "Subscriptions",
      desc: "Design and manage subscriptions that adapt to your business: flexible cycles, automatic billing and frictionless price changes.",
      src: Img3,
    },
  ];

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const wrapper = containerWrapperRef.current;
        if (!wrapper) return;

        const sections = gsap.utils.toArray(".horizontal-section", wrapper);
        if (!sections.length) return;

        const totalPanels = sections.length;

        const tween = gsap.to(sections, {
          xPercent: -100 * (totalPanels - 1),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 15%",
            pin: true,
            scrub: 1,
            snap: 1 / (totalPanels - 1),
            end: () => "+=" + wrapper.offsetWidth * (totalPanels - 1),
            anticipatePin: 1,
          },
        });

        return () => tween.kill();
      },
    });
  }, { scope: containerWrapperRef });

  return (
    <div ref={containerWrapperRef} className="w-full overflow-hidden">
      <div className="flex flex-col gap-5 md:flex-row md:flex-nowrap md:h-screen">
        {Items.map((item, index) => (
          <div
            key={index}
            className="horizontal-section w-full h-auto flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row md:w-screen md:h-screen md:flex-shrink-0 md:select-none md:gap-8"
          >

            <div className="text flex flex-col gap-3 md:gap-4 lg:w-1/2 lg:h-full lg:justify-center lg:px-12">
              
              <FadeUp>
                <div className="w-fit text-2xl sm:text-3xl text-[#4e336f] md:text-4xl lg:text-6xl">
                  {item.i}
                </div>
              </FadeUp>

              <FadeUp>
                <h1 className='leading-normal pt-2 text-lg sm:text-xl text-[#22004B] font-["ppmori-regular"] font-bold tracking-wide md:text-2xl lg:text-4xl'>
                  {item.tittle}
                </h1>
              </FadeUp>

              <FadeUp>
                <p className='text-[#4e336f] pt-2 text-base sm:text-lg leading-tight font-["ambit-regular"] md:text-xl lg:text-3xl'>
                  {item.desc}
                </p>
              </FadeUp>

            </div>

            <div className="img w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden lg:w-1/2 lg:h-full lg:flex lg:items-center lg:justify-center">
              <img
                className="w-full h-full object-cover object-center lg:object-cover"
                src={item.src}
                alt=""
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
