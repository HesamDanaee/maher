import { Metadata } from "next";
import Login from "@/containers/auth/Login";

export const metadata: Metadata = {
  title: "ورود به پنل",
  description: "ورود به پنل ماهر",
};

const login = () => {
  return <Login />;
};

export default login;
