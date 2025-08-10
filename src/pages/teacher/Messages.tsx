import AppLayout from "@/layouts/AppLayout";
import SimpleChat from "@/components/chat/SimpleChat";

export default function TeacherMessages() {
  return (
    <AppLayout role="teacher" title="Mensagens" description="Envie comunicados aos pais">
      <SimpleChat youLabel="Você" otherLabel="Pais" />
    </AppLayout>
  );
}
