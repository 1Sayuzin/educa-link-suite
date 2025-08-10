import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface Message { id: number; author: string; text: string; time: string; }

export default function SimpleChat({ youLabel = "Você", otherLabel = "Escola" }: { youLabel?: string; otherLabel?: string; }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, author: otherLabel, text: "Bem-vindo! Este é o canal de comunicação.", time: "08:00" },
  ]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { id: Date.now(), author: youLabel, text, time }]);
    setText("");
  };

  return (
    <div className="space-y-3">
      <Card>
        <CardContent className="p-4 space-y-2 max-h-[50vh] overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className={m.author === youLabel ? "text-right" : "text-left"}>
              <div className={m.author === youLabel ? "inline-block bg-primary text-primary-foreground rounded-md px-3 py-2" : "inline-block bg-secondary text-secondary-foreground rounded-md px-3 py-2"}>
                <div className="text-xs opacity-80 mb-1">{m.author} • {m.time}</div>
                <div>{m.text}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Input placeholder="Escreva uma mensagem" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} />
        <Button variant="default" onClick={send}>Enviar</Button>
      </div>
    </div>
  );
}
