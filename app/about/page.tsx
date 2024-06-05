import { Navbar } from "app/components/nav";
import {} from "lucide-react";

export default function About({}) {
  return (
    <>
      <Navbar />
      <main className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
            about
          </h1>

          <p>this is where i yap about what i'm good at</p>

          <ul className="list-disc pl-6">
            <li>C</li>
            <li>Rust</li>
            <li>
              Web Development...
              <ul className="list-disc pl-6">
                <li>React</li>
                <li>Next.js</li>
                <li>Svelte (kit)</li>
              </ul>
            </li>
          </ul>

          <p>Currently learning:</p>
          <ul>Zig</ul>
        </section>
      </main>
    </>
  );
}
