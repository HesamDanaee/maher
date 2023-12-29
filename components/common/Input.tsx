import { Path, Controller, UseFormRegister } from "react-hook-form";

import { IFormLogin } from "@/containers/auth/Login";
import { IFormSignUp } from "@/containers/auth/Signup";

interface Props {
  label: Path<IFormLogin | IFormSignUp>;
  placeholder: string;
  required: boolean;
  type: string;
  register: UseFormRegister<IFormLogin | IFormSignUp>;
}

const Input = ({ label, placeholder, required, type, register }: Props) => {
  return (
    <div
      className={`flex gap-y-4 ${
        type !== "checkbox" ? "flex-col" : "gap-x-3 items-center mt-2"
      }`}
    >
      <label className="text-sm text-primary font-[600]">{label}</label>
      <Controller
        name={label}
        render={({ field, formState: { errors } }) => (
          <input
            {...field}
            {...register}
            required={required}
            placeholder={placeholder}
            type={type}
            aria-invalid={errors[`${label}`] ? "true" : "false"}
            autoComplete="on"
            className={`text-primary ${
              type === "checkbox"
                ? "checkbox checkbox-primary checkbox-xs"
                : "input input-large min-w-[300px] input-primary focus:border-accent focus:outline-none focus:shadow-sm placeholder:text-xs text-sm shadow-md transition-[border] duration-100 ease-linear"
            }  `}
          />
        )}
      />
    </div>
  );
};

export default Input;
