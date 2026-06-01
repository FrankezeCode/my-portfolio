"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const momPhotos = ["/mom-1.jpg", "/mom-2.jpg", "/mom-3.jpg"];

const Gratitude = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % momPhotos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="gratitude"
      className="px-8 md:px-20 mt-10 my-4 w-full"
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#8168d4]/20 to-[#41a4c8]/10 p-6 md:p-10 overflow-hidden">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div
            className="relative h-[22rem] md:h-[30rem] overflow-hidden rounded-3xl border border-white/10 bg-[#0f1624]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {momPhotos.map((photo, index) => (
              <Image
                key={photo}
                src={photo}
                alt={`Mom gratitude photo ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentPhotoIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div
            className="flex flex-col gap-5 text-center md:text-left"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#41a4c8]">
              Special Gratitude
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              For my mom, my first supporter.
            </h2>
            <div className="text-sm md:text-base leading-relaxed md:leading-loose tracking-wider text-[#e7e3e3] flex flex-col gap-4">
              <p>
                This section is dedicated to my mom, whose love, prayers, sacrifice, and constant
                encouragement have carried me through every season of my journey.
              </p>
              <p>
                Thank you for believing in me, supporting my dreams, and standing by me even when
                the road was difficult. Every milestone I celebrate is also a reflection of your
                strength, patience, and guidance.
              </p>
              <p className="font-semibold text-white">
                I am forever grateful for you.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-2">
              {momPhotos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setCurrentPhotoIndex(index)}
                  aria-label={`Show mom photo ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex
                      ? "w-8 bg-[#41a4c8]"
                      : "w-2.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gratitude;
