import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { mes: "Mar", nota: 7.2 },
  { mes: "Abr", nota: 7.8 },
  { mes: "Mai", nota: 8.1 },
  { mes: "Jun", nota: 8.6 },
];

export default function ParentPerformance() {
  return (
    <AppLayout role="parent" title="Desempenho do Aluno" description="Gráficos e relatórios simples">
      <Card>
        <CardHeader><CardTitle>Evolução de Notas</CardTitle></CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="mes" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="nota" stroke="hsl(var(--primary))" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
