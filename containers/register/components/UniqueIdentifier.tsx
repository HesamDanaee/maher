"use client";

import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { inputStyle, submitButtonStyle } from "../styles";
import Button from "@/components/common/Button";

import { uniqueIdentifierSchema } from "@/constants/validations/registerFourStepSchema";

import { yupResolver } from "@hookform/resolvers/yup";

const UniqueIdentifier = () => {
  const {
    register: {
      uniqueIdentifier: { inputs, title, button },
    },
  } = content;

  const methods = useForm<IRegisterForm>({
    resolver: yupResolver(uniqueIdentifierSchema),
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-secondary text-4xl font-bold pb-10 max-sm:text-3xl">
        {title}
      </h1>

      <div className="max-w-[800px] w-4/6 max-xl:w-5/6 max-sm:w-[90%]">
        <form {...methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col">
            {inputs.map(({ name, placeholder, type }) => (
              <Input
                style={name === "address" ? "col-start-1 col-end-3" : ""}
                control={control}
                name={
                  name as
                    | "UniqueTaxIdentifier"
                    | "publicKey"
                    | "personalKey"
                    | "ElecSigCertificate"
                }
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

export default UniqueIdentifier;
