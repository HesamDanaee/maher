import { Metadata } from "next";
import AuthGuard from "@/components/auth/AuthGaurd";
import Panel from "@/containers/panel/Panel";

export const metadata: Metadata = {
  title: "پنل ماهر ",
};

interface Props {
  params: {
    tab: "invoice" | "customers" | "goods" | "taxpayers";
    s: any;
  };
}

const PanelPage = ({ params: { tab } }: Props) => {
  return (
    <AuthGuard>
      <Panel tab={tab} />
    </AuthGuard>
  );
};

export default PanelPage;
