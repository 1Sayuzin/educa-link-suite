import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeacherDashboard() {
  return (
    <AppLayout role="teacher" title="Dashboard - Professores" description="Resumo de atividades e turmas">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>Turmas</CardTitle></CardHeader>
          <CardContent>5 turmas ativas</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Pendências</CardTitle></CardHeader>
          <CardContent>3 lançamentos de notas pendentes</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Eventos</CardTitle></CardHeader>
          <CardContent>2 eventos esta semana</CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
