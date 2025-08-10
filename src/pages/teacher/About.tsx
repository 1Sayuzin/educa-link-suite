import AppLayout from "@/layouts/AppLayout";

export default function TeacherAbout() {
  return (
    <AppLayout role="teacher" title="Sobre/Contato" description="Informações institucionais e contato">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Nossa Rede</h2>
        <p className="text-muted-foreground">Rede de ensino fundamental comprometida com formação integral e inovação pedagógica.</p>
        <h3 className="text-lg font-medium">Contato</h3>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>E-mail: contato@redeensino.com</li>
          <li>Telefone: (11) 1234-5678</li>
          <li>Endereço: Rua da Educação, 100</li>
        </ul>
      </section>
    </AppLayout>
  );
}
