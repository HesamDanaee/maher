"use client";

// Globals
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

// Components
import Input from "@/components/common/Input";

// Utils
import { generateFormData } from "@/utils/common";
import { sendReq } from "@/utils/network";

// Constants
import content from "@/constants/content.json";
import API_URLS from "@/configs/apiConfig";

// Zustand
import { useAuthStore } from "@/stores/authStore";
import { useToastStore } from "@/stores/toastStore";

// API

import { inputStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/constants/validations/authSchema";
import useSWRMutation from "swr/mutation";

export type IFormSignUp = {
  name: string;
  lastName: string;
  mobile: string;
  password: string;
  password2: string;
};

const SignUp = () => {
  const { trigger: signup } = useSWRMutation(API_URLS.signup, sendReq);
  const { trigger: triggerLogin } = useSWRMutation(API_URLS.login, sendReq);
  // * - * - Page Static Data - * - * //
  const {
    signup: { title, inputs, notif, button },
  } = content;

  // * - * - Hooks - * - * //
  const router = useRouter();

  // * - * - Zustand Store  - * - * //
  const { login } = useAuthStore();
  const { showToast } = useToastStore();

  // * - * - Hook Forms  - * - * //
  const methods = useForm<IFormSignUp>({
    defaultValues: {},
    resolver: yupResolver(signupSchema),
  });
  const { handleSubmit, control } = methods;

  // * - * - Handlers  - * - * //
  const handleLoginAfterSignUp = async (data: { [key: string]: string }) => {
    const { mobile, password } = data as IFormSignUp;
    const res = await triggerLogin({
      body: JSON.stringify({
        mobile,
        password,
      }),
      method: "POST",
    });

    // loginUser({ mobile, password }, (res) => {
    //   login(res.access_token, res.expires_in);
    //   router.push("/");
    // });
  };

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    try {
      const formData = generateFormData(data);

      const res = await signup({
        body: formData,
        method: "POST",
      });

      if (!res) throw new Error("something happened at signup");

      const logRes = await handleLoginAfterSignUp(data);
    } catch (err) {
      showToast((err as Error)?.message, "error", 3000);
    }
  };

  // * - * - JSX  - * - * //
  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[300px] flex flex-col justify-between items-center gap-y-10">
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
                control={control}
                key={uuid()}
                name={
                  name as
                    | "name"
                    | "lastName"
                    | "mobile"
                    | "password"
                    | "password2"
                }
                label={title}
                placeholder={placeholder}
                type={type}
                inputStyle={inputStyle}
              />
            ))}

            {/* Question */}
            <div className="w-full flex gap-x-2">
              <p className="text-xs">{notif[1]}</p>
              <Link href={"login"}>
                <p className="text-xs text-accent">{notif[2]}</p>
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-large w-full btn-accent text-xl font-[800] shadow-md rounded-xl mt-10"
            >
              {button}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
