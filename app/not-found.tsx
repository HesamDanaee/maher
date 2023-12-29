import Image from "next/image";
import Link from "next/link";

import notfound from "@/assets/Illustrations/404.svg";

import data from "@/constants/content.json";

const NotFound = () => {
  const {
    404: { title, link },
  } = data;
  return (
    <main className="w-full h-full bg-primary flex justify-center items-center">
      <article className="flex flex-col justify-between items-center gap-y-20">
        <div className="flex flex-col justify-between items-center gap-y-14">
          <Image
            src={notfound}
            width={300}
            height={300}
            alt="404"
            className="w-auto h-auto"
          />
          <h1 className="text-4xl text-white font-black">{title}</h1>
        </div>
        <Link href={"/"}>
          <p className="link link-hover text-sm text-accent font-medium">
            {link}
          </p>
        </Link>
      </article>
    </main>
  );
};

export default NotFound;
