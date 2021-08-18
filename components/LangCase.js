import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

const LangCase = ({ lang, title, aosDirection, aosDelay }) => {
  const renderStars = (amount) =>
    Array.apply(null, { length: 5 }).map((_, i) => (
      <span className="fill-current text-primary" key={i}>
        {i < amount ? <RiStarSFill /> : <RiStarSLine />}
      </span>
    ));

  return (
    <div
      className="px-6 mt-4 lg:w-1/2"
      data-aos={aosDirection}
      data-aos-delay={aosDelay}
    >
      <h1 className="mb-4 text-lg md:text-2xl text-primary">{title}</h1>
      <div className="flex flex-col flex-wrap lg:flex-row md:justify-between lg:justify-start">
        {lang.map((lang) => {
          const { id, src, alt, stars } = lang;
          return (
            <div key={alt} className="flex items-center mb-3 mr-3 lg:mr-6 ">
              <div key={id} className="w-10 h-10 mr-2 sm:mr-0 ">
                <Image
                  src={src}
                  alt={alt}
                  height={400}
                  width={400}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="ml-2 capitalize text-text">
                <p>{alt}</p>
                <caption className="flex">{renderStars(stars)}</caption>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LangCase;
