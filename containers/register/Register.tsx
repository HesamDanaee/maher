// Globals
import { ReactNode } from "react";
import Image from "next/image";

// Data
import content from "@/constants/content.json";

// Components
import Signup from "./components/Signup";
import UniqueIdentifier from "./components/UniqueIdentifier";
import Services from "./components/Services";
import FinalStep from "./components/FinalStep";
import Steps from "@/components/steps/Steps";

interface Props {
  slug: [
    "signup" | "uniqueIdentifier" | "services" | "finalStep",
    "individual" | "legalEnteties"
  ];
}

const Register = ({ slug: stage }: Props) => {
  const {
    register: { steps },
  } = content;
  const links = [
    "/register/signup/individual",
    "/register/uniqueIdentifier",
    "/register/services",
    "/register/finalStep",
  ];
  const stepsArr = Object.values(steps);

  const stages: {
    signup: ReactNode;
    uniqueIdentifier: ReactNode;
    services: ReactNode;
    finalStep: ReactNode;
  } = {
    signup: <Signup slug={stage[1]} />,
    uniqueIdentifier: <UniqueIdentifier />,
    services: <Services />,
    finalStep: <FinalStep />,
  };

  return (
    <article
      className="w-full min-h-[100vh] grid grid-cols-12 grid-rows-1"
      style={{ direction: "rtl" }}
    >
      <div className="col-start-1 col-end-6 flex justify-center items-center max-lg:hidden relative bg-secondary">
        {/* Steps */}
        <Steps
          links={links}
          bg="primary"
          direction="vertical"
          size="medium"
          steps={stepsArr}
        />
      </div>
      <div className="col-start-6 col-end-13 max-lg:col-span-full bg-primary max-lg:pt-16 max-lg:pb-4">
        <div className="w-full bg-white flex justify-center items-center lg:hidden relative">
          {/* Steps */}
          <Steps
            links={links}
            bg="primary"
            direction="horizontal"
            size="small"
            steps={stepsArr}
          />
        </div>
        {stages[stage[0]]}
      </div>
    </article>
  );
};

export default Register;
