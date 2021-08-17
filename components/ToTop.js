import React from "react";
import { animateScroll as scroll } from "react-scroll";

import { BsChevronDoubleUp } from "react-icons/bs";

const ToTop = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-delay={200}
      onClick={() => scroll.scrollToTop()}
    >
      <div className="p-2 border-2 rounded-full cursor-pointer border-primary">
        <BsChevronDoubleUp className="text-3xl transition-colors duration-300 md:text-4xl text-primary hover:text-hv" />
      </div>
    </div>
  );
};

export default ToTop;
