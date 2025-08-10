import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function ParentSchedule() {
  return (
    <AppLayout role="parent" title="Cronograma - Pais" description="Visualize eventos escolares" >
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Calendário</CardTitle></CardHeader>
          <CardContent>
            <DayPicker mode="single" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Próximos eventos</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div>20/08 - Reunião de pais (Turma 5ºB)</div>
            <div>25/08 - Prova de Matemática</div>
            <div>01/09 - Feira de Ciências</div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
