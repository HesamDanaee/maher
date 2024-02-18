import Link from "next/link";
import { v4 as uuid } from "uuid";

interface Props {
  navbar: {
    text: string;
    href: string;
  }[];
  tab: PanelSlugs;
}

const Navbar = ({ navbar, tab }: Props) => {
  return (
    <nav className="flex col-start-4 col-end-10 max-xl:hidden">
      <ul className="w-full flex justify-evenly max-2xl:justify-center items-center gap-x-10 max-2xl:gap-x-8 text-secondary">
        {navbar.map(({ text, href }) => (
          <li key={uuid()}>
            <Link
              href={`/panel/${href}`}
              className={`hover:bg-base-100 ${
                href === tab && "bg-base-300 border-[1px] border-secondary"
              }  hover:cursor-pointer text-md font-medium max-2xl:text-sm p-3 rounded-md transition-[background-color] duration-250 ease-out`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
