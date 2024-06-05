import { Navbar } from "app/components/nav";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <main className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <Navbar />
      <section className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">

        <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
          my blog
        </h1>
        <BlogPosts />
      </section>
    </main>
  );
}
