import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Seo } from "@/components/Seo";

export default function TeacherLogin() {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Seo title="Login - Professores" description="Acesso para Professores" />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login - Professores</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required placeholder="seuemail@escola.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full">Entrar</Button>
            <p className="text-xs text-muted-foreground">Obs.: Autenticação real será habilitada ao conectar o Supabase.</p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
