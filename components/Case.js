import Image from "next/image";
import React from "react";

export default function Case({
  url,
  logoWidth,
  logoAlt,
  src,
  tags,
  content,
  aosDelay,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="p-6 transition ease-in-out rounded-lg group shadow-case hover:shadow-case-hover transition-duration-300 dark:bg-darkgray text-text"
    >
      <div className="h-full">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full"
          href={url}
        >
          <div className="h-40 mx-auto mb-4 overflow-hidden rounded-lg w-44 filter 2xl:dark:grayscale-100 dark:group-hover:filter-none">
            <Image
              placeholder="blur"
              blurDataURL={src}
              width={logoWidth}
              height={180}
              alt={`Logo ${logoAlt}`}
              src={src}
            />
          </div>
          <div className="flex flex-col justify-center">
            {content}
            <ul className="flex flex-wrap 2xl:dark:grayscale-100 dark:group-hover:filter-none">
              {tags.map((tag, i) => (
                <li
                  className="px-4 py-1 my-1 mr-2 text-sm text-white rounded-md bg-primary"
                  key={i}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
}
