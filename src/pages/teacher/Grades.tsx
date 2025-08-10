import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Grade { id: number; aluno: string; nota: string; }

export default function TeacherGrades() {
  const [grades, setGrades] = useState<Grade[]>([
    { id: 1, aluno: "Ana Souza", nota: "" },
    { id: 2, aluno: "Bruno Lima", nota: "" },
  ]);

  const save = () => {
    // Apenas simulação
    alert("Notas salvas (protótipo)");
  };

  return (
    <AppLayout role="teacher" title="Notas" description="Insira notas e observações">
      <Card>
        <CardHeader><CardTitle>Lançamento de Notas</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {grades.map((g) => (
            <div key={g.id} className="flex items-center gap-3">
              <div className="flex-1">{g.aluno}</div>
              <Input className="w-28" placeholder="0-10" value={g.nota} onChange={(e) => setGrades((prev) => prev.map(p => p.id === g.id ? { ...p, nota: e.target.value } : p))} />
            </div>
          ))}
          <Button onClick={save}>Salvar</Button>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
