import { Navbar } from "app/components/nav";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "app/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "app/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import {
  CPlain,
  NextjsOriginal,
  OpenglPlain,
  ReactOriginal,
  RustOriginal,
  SveltePlain,
  TailwindcssOriginal,
  TypescriptPlain,
} from "devicons-react";

import Image from "next/image";

// TODO: stop repeating code
/* const projects: ProjectProps[] = [
  {
    name: "pong",
    href: "https://github.com/dosu0/pong",
    description: "the classic game pong...but made in C",
    technologies: [CPlain, OpenglPlain],
    imageURL: "/projects/pong.png",
    imageAlt: "pong",
  },
]; */

export default function Projects() {
  const projects = [Pong, Kip, GPACalculator, ThisWebsite];
  return (
    <main className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <Navbar />
      <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Carousel>
          <CarouselContent>
            {projects.map((Project, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <Project />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}

function Pong() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">pong</CardTitle>
        <CardDescription>the classic game pong...but made in C</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="/pong.jpeg"
          alt="pong screenshot"
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <ul className="flex gap-4">
          <CPlain size={32} />
          <OpenglPlain size={32} />
        </ul>
        <a className="flex items-center" href="https://github.com/dosu0/pong">
          <ArrowUpRight />
          view code
        </a>
      </CardFooter>
    </>
  );
}

function Kip() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">kip</CardTitle>
        <CardDescription>
          a compiled programming language written in Rust
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img></img>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ul className="flex gap-4">
          <RustOriginal className="dark:fill-white" size={32} />
        </ul>
        <a
          className="flex items-center"
          href="https://github.com/dosu0/kip-lang"
        >
          <ArrowUpRight />
          view code
        </a>
      </CardFooter>
    </>
  );
}

function GPACalculator() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">gpa calculator</CardTitle>
        <CardDescription>
          a gpa calculator that integrates with infinite campus
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="/gpa-calculator.jpeg"
          alt="gpa calculator screenshot"
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <ul className="flex gap-4">
          <SveltePlain size={32} />
          <TypescriptPlain size={32} />
        </ul>
        <a
          className="flex items-center"
          href="https://github.com/dosu0/gpa-calculator"
        >
          <ArrowUpRight />
          view code
        </a>
      </CardFooter>
    </>
  );
}

function ThisWebsite() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">this website</CardTitle>
        <CardDescription>what you're looking at right now</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="/samueld-dev.jpeg"
          alt="website screenshot"
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <ul className="flex gap-4">
          <NextjsOriginal size={32} />
          <TypescriptPlain size={32} />
          <ReactOriginal size={32} />
          <TailwindcssOriginal size={32} />
        </ul>
        <a
          className="flex items-center"
          href="https://github.com/dosu0/samueld.dev"
        >
          <ArrowUpRight />
          view code
        </a>
      </CardFooter>
    </>
  );
}

// TODO: stop repeating code
/* type ProjectProps = {
  title: string;
  description: string;
  githubURL: string;
  imageURL: string;
  imageAlt: string;
  technologies: React.FC[];
};

function Project(props: ProjectProps) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.imageURL}
          alt={props.imageAlt}
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <ul className="flex gap-4">{props.technologies}</ul>
        <a className="flex items-center" href={props.githubURL}>
          <ArrowUpRight />
          view code
        </a>
      </CardFooter>
    </>
  );
} */
