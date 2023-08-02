import Link from "next/link";

const links = [
  {
    href: "#promos",
    name: "Promos",
  },
  {
    href: "#menu",
    name: "Menú",
  },
  {
    href: "#feed",
    name: "Feed",
  },
  {
    href: "#contacto",
    name: "Contáctanos",
  },
];
export const MenuItems = () => {
  return (
    <div className="w-full md:block md:w-auto animate__animated animate__backInDown">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-tita-dark border-2 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0 ">
        {links.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="block font-breeSerif text-xl lg:text-2xl text-tita-dark py-2 pl-3 pr-4"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
