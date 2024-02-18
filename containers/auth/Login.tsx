"use client";

// Globals
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import Input from "@/components/common/Input";

// Zustand
import { useAuthStore } from "@/stores/authStore";
import { useToastStore } from "@/stores/toastStore";
// Constants
import content from "@/constants/content.json";
import { loginSchema } from "@/constants/validations/authSchema";

//API

import { inputStyle } from "./styles";
import API_URLS from "@/configs/apiConfig";
import { generateFormData } from "@/utils/common";
import useSWRMutation from "swr/mutation";
import { sendReq } from "@/utils/network";

export type IFormLogin = {
  mobile: string;
  password: string;
};

const Login = () => {
  const { trigger } = useSWRMutation(API_URLS.login, sendReq);

  // * - * - Page Static Data - * - * //
  const {
    login: { title, inputs, notif, button },
  } = content;

  // * - * - Hooks - * - * //
  const router = useRouter();
  // * - * - Zustand - * - * //
  const { login } = useAuthStore();
  const { showToast } = useToastStore();

  // * - * - Hook Forms - * - * //
  const { handleSubmit, control } = useForm<IFormLogin>({
    defaultValues: {
      mobile: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  // * - * - Handlers - * - * //
  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    try {
      const formData = generateFormData(data);
      const res = await trigger({ method: "POST", body: formData });
      if (!res) throw "something went wrong";
      showToast("ورود با موفقیت انجام شد", "success", 2000);
      login(res.access_token, res.expires_in);
      router.push("/");
    } catch (err) {
      console.error("Error handling login request:", err);
    }
  };

  // * - * - JSX - * - * //
  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[300px]  flex flex-col justify-between items-center gap-y-10">
        {/* Title */}
        <h1 className="text-4xl text-primary leading-10 font-bold text-start">
          {title}
        </h1>

        {/* Inputs */}
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-3"
          >
            {inputs.map(({ title, name, placeholder, type }) => (
              <Input
                name={name as "mobile" | "password"}
                control={control}
                key={uuid()}
                label={title}
                placeholder={placeholder}
                type={type}
                inputStyle={inputStyle}
              />
            ))}

            {/* Question */}
            <div className="w-full flex gap-x-2">
              <p className="text-xs">{notif[1]}</p>
              <Link href={"signup"}>
                <p className="text-xs text-accent">{notif[2]}</p>
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-large w-full btn-accent text-primary text-xl font-[800] shadow-md rounded-xl mt-10"
            >
              {button}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
