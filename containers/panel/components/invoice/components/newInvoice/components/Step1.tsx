import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import { v4 as uuid } from "uuid";

import { useForm } from "react-hook-form";
import Select from "@/components/common/Select";
import { SearchIcon } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";

const Step1 = () => {
  const router = useRouter();

  const {
    panel: {
      invoice: {
        main: {
          newInvoice: {
            stage1: {
              title,
              title2,
              tabTitle,
              button,
              form: {
                searchInput,
                inputs: { main, level2 },
              },
            },
            stage2,
          },
        },
      },
    },
  } = content;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col col-start-2 col-end-12 row-start-2 row-end-7 rtl gap-y-8">
      <h1 className="text-secondary text-3xl font-[700] text-center">
        {title}
      </h1>
      <div className="w-full flex flex-col gap-y-4">
        {/* Input wrapper */}

        <div className="w-full flex justify-end">
          <div className="w-2/5 relative">
            <input
              className="w-full bg-primary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
              placeholder={searchInput.placeholder}
            />
            <span className="h-full bg-accent absolute left-0 top-1/2 -translate-y-1/2 flex justify-center items-center px-2 border-[1px] border-transparent rounded-l-lg hover:cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-accent group transition duration-200 ease-in-out">
              <SearchIcon style="fill-primary w-[30px] h-[30px] group-hover:fill-accent transition duration-200 ease-in-out" />
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-4">
          {/* Title */}
          <h3 className="text-secondary text-xl font-[600] leading-loose">
            {title2}
          </h3>
          {/* Inputs */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 grid-rows-2 gap-y-4 gap-x-3">
              {main.map(({ name, title, options }) => (
                <div key={uuid()} className="col-span-4">
                  <label className="font-secondary text-sm font-[300] leading-8">
                    {title}
                  </label>
                  <Select
                    options={options}
                    style="bg-primary border-[1px] border-secondary outline-none focus:outline-none focus:border-[1px] focus:border-accent"
                  />
                </div>
              ))}
              {level2.map(({ name, title, type }) => (
                <div className="col-span-6 flex flex-col" key={uuid()}>
                  <Input
                    control={control}
                    name={name}
                    placeholder={title}
                    type={type}
                    label={title}
                    style="w-full"
                    inputStyle="bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
                  />
                </div>
              ))}

              <Button
                size="md"
                type="submit"
                variant="wide"
                text={button}
                color="secondary"
                style="font-[700] col-start-13 col-end-9 mt-12 place-self-end"
                onClick={() => router.push("panel/invoice/manual/step2")}
                // state={errors ? "disabled" : "active"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step1;
