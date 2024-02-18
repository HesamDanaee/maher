import Register from "@/containers/register/Register";

interface Props {
  params: {
    slug: [
      "signup" | "uniqueIdentifier" | "services" | "finalStep",
      "individual" | "legalEnteties"
    ];
  };
}

const RegisterPage = ({ params: { slug } }: Props) => {
  return <Register slug={slug} />;
};

export default RegisterPage;
