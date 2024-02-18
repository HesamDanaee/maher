import Signup from "@/containers/auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
};

const SignupPage = async () => {
  return <Signup />;
};

export default SignupPage;
