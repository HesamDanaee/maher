import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import intro from "@/assets/Illustrations/intro.svg";
import { Twitter, Instagram, Linkedin, Meta } from "@/assets/icons/Icons";

// page Data
import content from "@/constants/content.json";

interface Props {
  children: ReactNode;
}

const Welcome = ({ children }: Props) => {
  const {
    CTA: { title, subtitle },
  } = content;

  return (
    <main className="w-full h-[100vh] min-h-[100vh] flex">
      <article className="w-1/2 h-full flex justify-center items-center bg-primary">
        <div className="w-2/3 h-full flex flex-col justify-between items-center pb-16">
          <div className="flex flex-col justify-between items-center text-white text-center py-20">
            <Image
              src={intro}
              width={100}
              height={100}
              alt="intro"
              className="w-[400px]"
            />
            <h1 className="text-3xl font-semibold leading-10 my-16">{title}</h1>
            <p className="text-sm leading-8 font-[400]">{subtitle}</p>
          </div>

          {/* Social Icons */}
          <div className="w-full">
            <ul className="flex flex-row justify-evenly">
              <li className="hover:cursor-pointer">
                <Link href="#">
                  <Meta />
                </Link>
              </li>

              <li className="hover:cursor-pointer">
                <Link href="#">
                  <Linkedin />
                </Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="#">
                  <Instagram />
                </Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link href="#">
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="w-1/2 h-full bg-white">{children}</article>
    </main>
  );
};

export default Welcome;
