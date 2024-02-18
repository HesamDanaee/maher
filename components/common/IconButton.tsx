import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const IconButton = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default IconButton;
