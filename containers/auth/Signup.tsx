"use client";

import { v4 as uuid } from "uuid";
import Link from "next/link";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import { useGetPosts } from "@/libs/auth";

export type IFormSignUp = {
  name: string;
  lastName: string;
  mobile: string;
  password: string;
  password2: string;
};

const SignUp = () => {
  // * - * - Page Static Data - * - * //
  const {
    Login: { title, inputs, notif, button },
  } = content;

  // * - * - SWR - * - * //
  const { posts, isLoading, isError } = useGetPosts("4");

  console.log(posts);

  const methods = useForm<IFormSignUp>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  console.log(errors);

  const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
    console.log(data);
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
                  key={uuid()}
                  register={register}
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
        </FormProvider>
      </div>
    </main>
  );
};

export default SignUp;
