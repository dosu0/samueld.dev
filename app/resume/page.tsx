import { Navbar } from "app/components/nav";
import {} from "lucide-react";
export default function About({}) {
  return (
    <>
      <Navbar />
      <main className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <embed src="/resume.pdf" width="100%" height="1000px" />
        </section>
      </main>
    </>
  );
}
