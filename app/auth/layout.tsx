import React from "react";
import Welcome from "@/containers/auth/Welcome";

interface Props {
  children: React.ReactNode;
}

const authLayout = ({ children }: Props) => {
  return (
    <main className="w-full flex justify-center items-center">
      <Welcome>{children}</Welcome>
    </main>
  );
};

export default authLayout;
