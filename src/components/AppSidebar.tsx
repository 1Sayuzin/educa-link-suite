import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Calendar, Home, MessageSquare, BarChart3, Users, ClipboardList, Settings, Info } from "lucide-react";

interface AppSidebarProps {
  role: "parent" | "teacher";
}

export function AppSidebar({ role }: AppSidebarProps) {
  const parentItems = [
    { title: "Início", url: "/parent", icon: Home },
    { title: "Cronograma", url: "/parent/schedule", icon: Calendar },
    { title: "Mensagens", url: "/parent/messages", icon: MessageSquare },
    { title: "Desempenho", url: "/parent/performance", icon: BarChart3 },
    { title: "Configurações", url: "/parent/settings", icon: Settings },
    { title: "Sobre/Contato", url: "/parent/about", icon: Info },
  ];

  const teacherItems = [
    { title: "Início", url: "/teacher", icon: Home },
    { title: "Turmas", url: "/teacher/classes", icon: Users },
    { title: "Notas", url: "/teacher/grades", icon: ClipboardList },
    { title: "Cronograma", url: "/teacher/schedule", icon: Calendar },
    { title: "Mensagens", url: "/teacher/messages", icon: MessageSquare },
    { title: "Configurações", url: "/teacher/settings", icon: Settings },
    { title: "Sobre/Contato", url: "/teacher/about", icon: Info },
  ];

  const items = role === "parent" ? parentItems : teacherItems;

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/60";

  return (
    <Sidebar className="w-64" collapsible="icon">
      <SidebarHeader>
        <div className="px-2 py-1 text-sm text-muted-foreground">Navegação</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{role === "parent" ? "Pais/Responsáveis" : "Professores"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
