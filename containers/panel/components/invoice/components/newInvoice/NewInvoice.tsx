import { useParams } from "next/navigation";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

const NewInvoice = () => {
  const step = useParams<{ tab: [string, string, "manual" | "file"] }>().tab[1];

  return (
    <div className="w-full h-full">
      {step === "manual" ? <Step1 /> : <Step2 />}
    </div>
  );
};

export default NewInvoice;
