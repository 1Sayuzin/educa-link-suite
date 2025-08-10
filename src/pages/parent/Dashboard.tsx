import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seo } from "@/components/Seo";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Port", valor: 8.5 },
  { name: "Mat", valor: 7.8 },
  { name: "Ciên", valor: 9.1 },
  { name: "Hist", valor: 8.0 },
];

export default function ParentDashboard() {
  return (
    <AppLayout role="parent" title="Dashboard - Pais" description="Visão geral do responsável">
      <Seo title="Dashboard Pais/Responsáveis" description="Acompanhe comunicados, cronograma e desempenho." />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>Próximo evento</CardTitle></CardHeader>
          <CardContent>Reunião de pais - 20/08 às 19h</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Mensagens</CardTitle></CardHeader>
          <CardContent>2 novas mensagens da escola</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Desempenho</CardTitle></CardHeader>
          <CardContent>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="valor" fill="hsl(var(--primary))" radius={[6,6,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
