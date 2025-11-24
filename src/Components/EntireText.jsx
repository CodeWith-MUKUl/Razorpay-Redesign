import React from "react";
import FadeUp from "../FadeUp";

const EntireText = () => {
  return (
    <div className='w-full py-10 md:px-5 lg:px-[5vw]'>

      <FadeUp>
        <h1 className='text-5xl text-[#22004b] font-normal leading-tight font-["ppmori-regular"] text-center md:text-end text-[7.5vh] lg:text-[5vw] lg:leading-snug'>
          An entire ecosystem of
        </h1>
      </FadeUp>

      <FadeUp>
        <h1 className='text-5xl text-[#22004b] font-normal leading-tight font-["ppmori-regular"] text-center text-[7.5vh] lg:text-[5vw] lg:leading-snug'>
          payment solutions, gateways
        </h1>
      </FadeUp>

      <FadeUp>
        <h1 className='text-5xl text-[#22004b] font-normal leading-tight font-["ppmori-regular"] text-center md:text-start text-[7.5vh] lg:text-[5vw] lg:leading-snug'>
          and processors.
        </h1>
      </FadeUp>

    </div>
  );
};

export default EntireText;
