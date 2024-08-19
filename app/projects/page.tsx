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
  SvelteOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";

import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  githubURL: string;
  imageURL?: string;
  imageAlt?: string;
  technologies: JSX.Element[];
};

function Project(props: ProjectProps) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl">{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.imageURL && props.imageAlt && (
          <Image
            src={props.imageURL}
            alt={props.imageAlt}
            width={500}
            height={500}
          />
        )}
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
}

const projects: ProjectProps[] = [
  {
    title: "pong",
    githubURL: "https://github.com/dosu0/pong",
    description: "the classic game pong...but made in C",
    technologies: [<CPlain size={32} />, <OpenglPlain size={32} />],
    imageURL: "/pong.jpeg",
    imageAlt: "pong",
  },
  {
    title: "kip",
    githubURL: "https://github.com/dosu0/kip-lang",
    description: "a compiled programming language written in Rust",
    technologies: [<RustOriginal size={32} className="dark:fill-zinc-300" />],
  },
  {
    title: "gpa calculator",
    githubURL: "https://github.com/dosu0/gpa-calculator",
    description: "a gpa calculator that integrates with infinite campus",
    technologies: [
      <SvelteOriginal size={32} />,
      <TypescriptOriginal size={32} />,
    ],
    imageURL: "/gpa-calculator.jpeg",
    imageAlt: "gpa calculator screenshot",
  },
  {
    title: "this website",
    githubURL: "https://github.com/dosu0/samueld.dev",
    description: "what you're looking at right now",
    technologies: [
      <NextjsOriginal size={32} />,
      <TypescriptOriginal size={32} />,
      <TailwindcssOriginal size={32} />,
      <ReactOriginal size={32} />,
    ],
    imageURL: "/samueld-dev.jpeg",
    imageAlt: "website screenshot",
  },
];

export default function Projects() {
  return (
    <main className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <Navbar />
      <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Carousel>
          <CarouselContent>
            {projects.map((props, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="">
                    <Project {...props} />
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
