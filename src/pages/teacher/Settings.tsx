import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/AppLayout";

export default function TeacherSettings() {
  return (
    <AppLayout role="teacher" title="Configurações" description="Preferências de conta e notificações">
      <form className="space-y-6 max-w-xl">
        <Card>
          <CardHeader><CardTitle>Dados Profissionais</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" placeholder="Seu nome" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seuemail@escola.com" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Notificações</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Receber e-mails</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Receber push</span>
              <Switch />
            </div>
          </CardContent>
        </Card>
        <Button>Salvar alterações</Button>
      </form>
    </AppLayout>
  );
}
