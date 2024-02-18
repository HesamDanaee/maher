import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import content from "@/constants/content.json";
import Select from "@/components/common/Select";
import Button from "@/components/common/Button";
interface Props {
  title: string;
}

const NewCustomerModal = ({ title }: Props) => {
  const router = useRouter();

  const {
    panel: {
      customers: {
        newCustomer: {
          button,
          modal: {
            inputs: { options, individual, legalEnteties, submit },
          },
        },
        searchInput: { placeholder },
        table,
      },
    },
  } = content;

  const { control } = useForm();

  return (
    <div className="w-full h-full px-4 flex flex-col items-center gap-y-10">
      <h2 className="text-lg font-[500]">{title}</h2>

      <div className="w-full flex flex-col gap-x-4 justify-between items-center max-md:flex-col max-md:gap-y-6 max-md:w-full ">
        <Select
          options={options}
          size="w-[426px] max-sm:w-[260px]"
          style="w-[426px] max-sm:w-[260px] bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none mb-2"
        />
        {individual.map(({ name, placeholder, type }) => (
          <Input
            key={uuid()}
            name={name}
            placeholder={placeholder}
            type={type}
            control={control}
            labelStyle="text-seconadry text-sm font-[300] pr-2"
            style="w-full gap-y-[8px]"
            inputStyle="bg-primary text-secondary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
          />
        ))}
        <Button
          size="md"
          type="submit"
          color="accent"
          variant="wide"
          style="w-full my-4"
          text={submit}
        />
      </div>
    </div>
  );
};

export default NewCustomerModal;
