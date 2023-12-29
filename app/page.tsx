import AuthGuard from "@/components/auth/AuthGaurd";
import Panel from "@/containers/panel/Panel";

export default function PanelPage() {
  return (
    <main className="w-full h-full">
      <AuthGuard>
        <Panel />
      </AuthGuard>
    </main>
  );
}
