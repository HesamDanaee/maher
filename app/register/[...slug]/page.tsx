import { Metadata } from "next";
import Register from "@/containers/register/Register";
import { registerRouteMetadata } from "@/constants/metadata";

interface Props {
  params: {
    slug: RegisterSlugs;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const param: RegisterParams = params.slug[0];

  return {
    title: registerRouteMetadata[param],
  };
}

const RegisterPage = ({ params: { slug } }: Props) => {
  return <Register slug={slug} />;
};

export default RegisterPage;
