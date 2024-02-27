import { Metadata } from "next";
import Register from "@/containers/register/Register";
import {
  registerRouteMetadata,
  registerRouteMetadata2,
} from "@/constants/metadata";

interface Props {
  params: {
    slug: RegisterSlugs;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const param: RegisterParams = params.slug[0];
  const param2: RegisterParams2 = params.slug[1];

  return {
    title:
      param && param2
        ? registerRouteMetadata[param] + " / " + registerRouteMetadata2[param2]
        : param
        ? registerRouteMetadata[param]
        : "",
  };
}

const RegisterPage = ({ params: { slug } }: Props) => {
  return <Register slug={slug} />;
};

export default RegisterPage;
