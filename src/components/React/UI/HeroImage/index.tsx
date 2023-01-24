import React from "react";

export const HeroImage = ({ text }: String | any) => {
  return (
    <section
      id="hero"
      className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
    >
      <article className="sm:w-1/2 z-10">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          Edit this in
          <span className="text-indigo-700 dark:text-indigo-300">
            {" "}
            HeroImage.tsx
          </span>
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Balls Balls DoUBLE Balls There now you have to
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          -jON
        </p>
      </article>
      <img
        className="w-1/2 z-auto"
        src="https://raw.githubusercontent.com/jongan69/WWW-Page-Management-Design-1/main/assets/images/header-hero.png"
        alt="Rocket Dab"
      />
    </section>
  );
};
