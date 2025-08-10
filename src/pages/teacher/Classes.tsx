import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeacherClasses() {
  return (
    <AppLayout role="teacher" title="Turmas" description="Gerencie turmas e alunos">
      <div className="grid gap-4 md:grid-cols-2">
        {["5ºA", "5ºB", "6ºA", "6ºB"].map((t) => (
          <Card key={t}>
            <CardHeader><CardTitle>Turma {t}</CardTitle></CardHeader>
            <CardContent>Alunos: 28</CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
