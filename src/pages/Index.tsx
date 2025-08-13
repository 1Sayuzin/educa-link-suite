import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Seo } from "@/components/Seo";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Seo title="Portal da Rede de Ensino" description="Escolha seu perfil para acessar: Responsável ou Docente" />
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold">Bem-vindo ao Portal</h1>
        <p className="text-lg text-muted-foreground">Selecione seu perfil para continuar</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={() => navigate("/login/parent")}>Sou Responsável</Button>
          <Button variant="hero" size="lg" onClick={() => navigate("/login/teacher")}>Sou Docente</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
