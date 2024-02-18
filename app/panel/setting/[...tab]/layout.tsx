import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return <main className="w-full min-h-[100vh] bg-primary">{children}</main>;
};

export default layout;
