import Link from "next/link";

export const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "blog", href: "/blog" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
];

export function Navbar() {
  return (
    <nav className="my-16">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
