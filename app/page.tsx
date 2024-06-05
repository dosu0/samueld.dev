import { BlogPosts } from "app/components/posts";
import React from "react";
// import Particles from "app/components/particles";
import { Navbar } from "app/components/nav";
import Typewriter from "app/components/typewriter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden dark:bg-gradient-to-tl from-black via-zinc-400/20 to-black">
      <div className="animate-fade-in">
        <Navbar />
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />*/}
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        samuel dosunmu
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h2 className="my-8 text-xl animate-fade-in">
        <Typewriter
          options={{
            strings: ["i make things", "d1 yapper", "idk idk idk"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className="my-8 text-center animate-fade-in">
        <BlogPosts />
      </div>
    </div>
  );
}
