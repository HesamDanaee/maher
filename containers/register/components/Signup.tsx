"use client";

import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import Input from "@/components/common/Input";

// Data
import content from "@/constants/content.json";

// Styles
import { inputStyle, submitButtonStyle } from "../styles";

// Yup
import {
  signupFormIndividualSchema,
  signupFormLegalEntetiesSchema,
} from "@/constants/validations/registerFourStepSchema";

// Components
import Button from "@/components/common/Button";
import Switch from "@/components/common/Switch";

// Hooks
import useSession from "@/hooks/useSession";
import { yupResolver } from "@hookform/resolvers/yup";

// Types
interface Props {
  slug: "individual" | "legalEnteties";
}

const Signup = ({ slug }: Props) => {
  // * - * - Static Data - * - * //
  const {
    register: {
      signup: {
        title,
        inputs: { titles, enTitles, individual, legalEnteties },
        button,
      },
    },
  } = content;

  // * - * - Hook Form - * - * //
  const methodsIndividual = useForm<IRegisterFormIndividual>({
    resolver: yupResolver(signupFormIndividualSchema),
  });

  const methodsLegalEntities = useForm<IRegisterFormLegalEntities>({
    resolver: yupResolver(signupFormLegalEntetiesSchema),
  });

  const { control, handleSubmit } = methodsIndividual;
  const { control: control2, handleSubmit: handleSubmit2 } =
    methodsLegalEntities;

  // * - * - Session Storage - * - * //

  const { setItem } = useSession({ key: "registerForm" });
  // * - * - Handlers - * - * //
  const onSubmit = (
    data: IRegisterFormIndividual | IRegisterFormLegalEntities
  ) => {
    setItem({
      signup: data,
    });
  };

  // - * - * - JSX - * - * - //
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-secondary text-4xl font-bold pb-10 max-sm:text-3xl">
        {title}
      </h1>
      <Switch selected={slug} options={titles} enOptions={enTitles} size="xs" />
      <div className="max-w-[800px] w-4/6 max-xl:w-5/6 max-sm:w-[90%]">
        <form
          {...(slug === "individual"
            ? methodsIndividual
            : methodsLegalEntities)}
          onSubmit={
            slug === "individual"
              ? handleSubmit(onSubmit)
              : handleSubmit2(onSubmit)
          }
        >
          <div className="grid grid-cols-2 grid-rows-4 gap-x-3">
            {slug === "individual" &&
              individual.map(({ name, placeholder, type }) => (
                <Input
                  style={
                    name === "address"
                      ? "col-start-1 col-end-3"
                      : "max-sm:col-start-1 max-sm:col-end-3"
                  }
                  control={control}
                  name={name as IRegisterFormIndividNames}
                  key={uuid()}
                  placeholder={placeholder}
                  type={type}
                  inputStyle={inputStyle}
                />
              ))}
            {slug === "legalEnteties" &&
              legalEnteties.map(({ name, placeholder, type }) => (
                <Input
                  style={
                    name === "address"
                      ? "col-start-1 col-end-3"
                      : "max-sm:col-start-1 max-sm:col-end-3"
                  }
                  control={control2}
                  name={name as IRegisterFormLegalEntetiesNames}
                  key={uuid()}
                  placeholder={placeholder}
                  type={type}
                  inputStyle={inputStyle}
                />
              ))}
          </div>
          {/* Submit */}
          <Button
            size="md"
            type="submit"
            color="accent"
            state="outline"
            style={submitButtonStyle}
            text={button}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
