import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { Seo } from "@/components/Seo";

interface AppLayoutProps extends PropsWithChildren {
  role: "parent" | "teacher";
  title?: string;
  description?: string;
}

export default function AppLayout({ role, children, title, description }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <Seo title={title ?? "Portal da Rede de Ensino"} description={description} />
      <div className="min-h-screen flex w-full bg-background">
        <header className="h-14 flex items-center border-b w-full fixed top-0 left-0 right-0 bg-background z-20 px-3">
          <SidebarTrigger className="mr-2" />
          <h1 className="text-lg font-semibold">{role === "parent" ? "Área dos Pais" : "Área do Professor"}</h1>
        </header>
        <div className="flex w-full pt-14">
          <AppSidebar role={role} />
          <SidebarInset>
            <main className="p-4 md:p-6 max-w-7xl mx-auto w-full">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
