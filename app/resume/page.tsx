import { Navbar } from "app/components/nav";
import {} from "lucide-react";
export default function About({}) {
  return (
    <>
      <Navbar />
      <main className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <iframe
            className="min-h-screen"
            src="https://docs.google.com/document/d/1wrVUOvap_zdkSNf86tlAEmCE41_yRXmLfGSzRhlL9wU/pub?embedded=true"
          ></iframe>
        </section>
      </main>
    </>
  );
}
