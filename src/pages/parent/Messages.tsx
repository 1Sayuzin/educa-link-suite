import AppLayout from "@/layouts/AppLayout";
import SimpleChat from "@/components/chat/SimpleChat";

export default function ParentMessages() {
  return (
    <AppLayout role="parent" title="Mensagens" description="Comunique-se com a escola">
      <SimpleChat youLabel="Você" otherLabel="Escola" />
    </AppLayout>
  );
}
