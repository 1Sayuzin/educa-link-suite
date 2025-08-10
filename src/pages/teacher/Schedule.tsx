import AppLayout from "@/layouts/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Event { id: number; date: string; title: string; }

export default function TeacherSchedule() {
  const [events, setEvents] = useState<Event[]>([
    { id: 1, date: "2025-08-20", title: "Reunião de pais" },
  ]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addEvent = () => {
    if (!title || !date) return;
    setEvents((prev) => [...prev, { id: Date.now(), date, title }]);
    setTitle("");
    setDate("");
  };

  return (
    <AppLayout role="teacher" title="Cronograma - Professores" description="Gerencie eventos do calendário">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Calendário</CardTitle></CardHeader>
          <CardContent>
            <DayPicker mode="single" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Eventos</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              <Input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
              <Button onClick={addEvent}>Adicionar</Button>
            </div>
            <ul className="space-y-2">
              {events.map((ev) => (
                <li key={ev.id} className="p-2 rounded-md bg-secondary text-secondary-foreground">
                  {new Date(ev.date).toLocaleDateString()} - {ev.title}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
