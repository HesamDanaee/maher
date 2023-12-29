import React from "react";
import Welcome from "@/containers/auth/Welcome";

interface Props {
  children: React.ReactNode;
}

const authLayout = ({ children }: Props) => {
  return (
    <main className="w-full min-h-[100vh] flex justify-center items-center bg-primary">
      <Welcome>{children}</Welcome>
    </main>
  );
};

export default authLayout;
