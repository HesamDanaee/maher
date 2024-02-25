"use client";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import Input from "@/components/common/Input";
import { servicesSchema } from "@/constants/validations/registerFourStepSchema";

// Data
import content from "@/constants/content.json";
import { inputStyle, submitButtonStyle } from "../styles";

import Button from "@/components/common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import useSWR from "swr";
import API_URLS from "@/configs/apiConfig";
import Select from "@/components/common/Select";

const mockData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
const Services = () => {
  const {
    register: {
      services: { title, inputs, button },
    },
  } = content;

  const { data } = useSWR<GoodsListRes>(API_URLS.getGoods);

  const goodsList = data?.data[0].map((good) => good.DescriptionOfID) ?? [];

  const methods = useForm<IServicesForm>({
    resolver: yupResolver(servicesSchema),
  });
  const { control, handleSubmit } = methods;

  const onSubmit = (data: IServicesForm) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-secondary text-4xl font-bold pb-10 max-sm:text-3xl">
        {title}
      </h1>

      <div className="max-w-[800px] w-4/6 max-xl:w-5/6 max-sm:w-[90%]">
        <form {...methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            {inputs.map(({ name, placeholder, type }) =>
              name === "unitOfGoods" ? (
                <Select
                  options={mockData}
                  style={`${inputStyle} mt-3 h-[48px]`}
                  DropDownStyle="w-full"
                />
              ) : (
                <Input
                  style={name === "address" ? "col-start-1 col-end-3" : ""}
                  control={control}
                  name={
                    name as
                      | "productCode"
                      | "productName"
                      | "unitOfGoods"
                      | "price"
                  }
                  key={uuid()}
                  placeholder={placeholder}
                  type={type}
                  inputStyle={inputStyle}
                />
              )
            )}
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

export default Services;
