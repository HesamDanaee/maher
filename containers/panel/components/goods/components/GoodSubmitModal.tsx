import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import { v4 as uuid } from "uuid";

import { useForm } from "react-hook-form";
import Table from "@/components/common/Table";
import Button from "@/components/common/Button";
import Divider from "@/components/common/Divider";

const GoodSubmitModal = () => {
  const {
    panel: {
      goods: {
        newGood: {
          modal2: {
            addButton,
            inputs,
            submit,
            table: { thData },
            title,
          },
        },
      },
    },
  } = content;

  // - * - * - Forms - * - * - //

  const { control } = useForm();

  return (
    <div className="w-full flex flex-col gap-y-4">
      {/* Title */}
      <h1 className="text-center text-xl font-[700]">{title}</h1>

      {/* Inputs */}
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
        {inputs.map(({ name, label, type, options }) => (
          <Input
            key={uuid()}
            name={name}
            placeholder={label}
            type={type}
            control={control}
            style="w-full"
            inputStyle="bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
          />
        ))}
      </div>
      <Divider />
      {/* Table */}
      <div>
        <Table
          noDataText=""
          size="md"
          thData={thData}
          tbData={[]}
          variant="zebra"
        />
      </div>

      {/* Footer */}

      <div className="w-full flex justify-center">
        <Button
          size="md"
          type="submit"
          text={submit}
          color="accent"
          variant="wide"
        />
      </div>
    </div>
  );
};

export default GoodSubmitModal;
