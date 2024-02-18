import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import intro from "@/assets/Illustrations/intro.svg";
import { Twitter, Instagram, Linkedin, Meta } from "@/assets/icons/Icons";

// page Data
import content from "@/constants/content.json";
import Toast from "@/components/common/Toast";

interface Props {
  children: ReactNode;
}

const Welcome = ({ children }: Props) => {
  const {
    CTA: { title, subtitle },
  } = content;

  return (
    <main className="w-full h-[100vh] flex max-md:flex-col rtl">
      {/* Welcome section */}
      <article className="w-1/2 max-md:w-full flex justify-center items-center bg-primary">
        <div className="w-2/3 max-lg:w-full max-lg:px-8 h-full flex flex-col justify-between items-center pb-16">
          <div className="flex flex-col justify-between items-center text-white text-center py-20">
            <Image
              src={intro}
              width={100}
              height={100}
              alt="intro"
              priority
              className="w-[400px] max-lg:w-3/4 max-md:w-auto"
            />
            <h1 className="text-3xl font-semibold leading-10 my-16 max-md:my-6">
              {title}
            </h1>
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

      {/* Login | Signup section */}
      <article className="w-1/2 max-md:w-full max-md:py-44 min-h-full bg-white">
        {children}
      </article>
    </main>
  );
};

export default Welcome;
