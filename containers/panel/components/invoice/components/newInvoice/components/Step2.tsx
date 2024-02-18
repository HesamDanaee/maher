import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import { v4 as uuid } from "uuid";

import { useForm } from "react-hook-form";
import Select from "@/components/common/Select";
import { SearchIcon } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";

const Step2 = () => {
  const {
    panel: {
      invoice: {
        main: {
          newInvoice: {
            stage2: {
              title,
              form: { title: formTitle, inputs, submit },
            },
          },
        },
      },
    },
  } = content;

  const { control } = useForm();

  return (
    <div className="flex flex-col rtl gap-y-16">
      <h1 className="text-secondary text-3xl font-[700] text-center ">
        {title}
      </h1>

      <div>
        <form>
          <h3 className="text-secondary">{formTitle}</h3>

          <div className="grid grid-cols-2 grid-rows-6 gap-x-8 gap-y-4">
            {inputs.map(({ name, title, type, options, placeholder }) => (
              <div key={uuid()} className="w-full">
                {type === "string" ? (
                  <Input
                    label={title}
                    control={control}
                    name={name}
                    placeholder={placeholder ?? ""}
                    type={type}
                    labelStyle="text-seconadry text-sm font-[300] pr-2"
                    style="gap-y-[8px]"
                    inputStyle="bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
                  />
                ) : (
                  <Select
                    options={options ?? []}
                    style="bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
                  />
                )}
              </div>
            ))}
          </div>
          <Button
            size="md"
            type="submit"
            variant="wide"
            text={submit}
            color="secondary"
            style="font-[700] col-start-13 col-end-9 mt-12 place-self-end"

            // state={errors ? "disabled" : "active"}
          />
        </form>
      </div>
    </div>
  );
};

export default Step2;
