import { Path, Controller, FieldValues, Control } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  placeholder: string;
  type: string;
  control: Control<T>;
  style?: string;
  labelStyle?: string;
  inputStyle?: string;
}

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
  control,
  style,
  labelStyle,
  inputStyle,
}: InputProps<T>) => {
  return (
    <div
      className={`flex relative gap-y-4 ${
        type !== "checkbox" ? "flex-col" : "gap-x-3 items-center mt-2"
      } ${style}`}
    >
      <label
        className={labelStyle ? labelStyle : "text-sm text-primary font-[600]"}
      >
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => (
          <input
            {...field}
            placeholder={
              errors[`${name}`]
                ? (errors[`${name}`]?.message as string)
                : placeholder
            }
            type={type}
            aria-invalid={errors[`${name}`] ? "true" : "false"}
            autoComplete="on"
            className={`text-primary ${
              type === "checkbox"
                ? "checkbox checkbox-primary checkbox-xs"
                : `input ${
                    errors[`${name}`] && "input-error placeholder:text-red-600"
                  } ${inputStyle} w-full`
            }  
             
            ${errors}
            `}
          />
        )}
      />
    </div>
  );
};

export default Input;
