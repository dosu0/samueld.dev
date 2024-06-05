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

          <p>AHS '26</p>
          <p>
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
            yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap yap
          </p>
        </section>
      </main>
    </>
  );
}
