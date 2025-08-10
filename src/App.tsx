import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ParentLogin from "./pages/login/ParentLogin";
import TeacherLogin from "./pages/login/TeacherLogin";
import ParentDashboard from "./pages/parent/Dashboard";
import ParentSchedule from "./pages/parent/Schedule";
import ParentMessages from "./pages/parent/Messages";
import ParentPerformance from "./pages/parent/Performance";
import ParentSettings from "./pages/parent/Settings";
import ParentAbout from "./pages/parent/About";
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherSchedule from "./pages/teacher/Schedule";
import TeacherClasses from "./pages/teacher/Classes";
import TeacherGrades from "./pages/teacher/Grades";
import TeacherMessages from "./pages/teacher/Messages";
import TeacherSettings from "./pages/teacher/Settings";
import TeacherAbout from "./pages/teacher/About";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login/parent" element={<ParentLogin />} />
            <Route path="/login/teacher" element={<TeacherLogin />} />

            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/parent/schedule" element={<ParentSchedule />} />
            <Route path="/parent/messages" element={<ParentMessages />} />
            <Route path="/parent/performance" element={<ParentPerformance />} />

            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/classes" element={<TeacherClasses />} />
            <Route path="/teacher/grades" element={<TeacherGrades />} />
            <Route path="/teacher/schedule" element={<TeacherSchedule />} />
            <Route path="/teacher/messages" element={<TeacherMessages />} />
            <Route path="/parent/settings" element={<ParentSettings />} />
            <Route path="/parent/about" element={<ParentAbout />} />
            <Route path="/teacher/settings" element={<TeacherSettings />} />
            <Route path="/teacher/about" element={<TeacherAbout />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
