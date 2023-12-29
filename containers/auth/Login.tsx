"use client";

import { v4 as uuid } from "uuid";
import Link from "next/link";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import Input from "@/components/common/Input";
import content from "@/constants/content.json";

export type IFormLogin = {
  name: string;
  lastName: string;
  mobile: string;
  password: string;
  password2: string;
};

const Login = () => {
  const {
    signup: { title, inputs, notif, button },
  } = content;

  const methods = useForm<IFormLogin>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;
  console.log(errors);
  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <main className="w-full h-full min-h-[100vh] flex justify-center items-center">
      <div className="w-[300px]  flex flex-col justify-between items-center gap-y-10">
        <FormProvider {...methods}>
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
              {inputs.map(({ title, placeholder, required, type }) => (
                <Input
                  register={register}
                  key={uuid()}
                  label={
                    title as
                      | "password"
                      | "name"
                      | "lastName"
                      | "mobile"
                      | "password2"
                  }
                  placeholder={placeholder}
                  required={required === "1"}
                  type={type}
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
        </FormProvider>
      </div>
    </main>
  );
};

export default Login;
