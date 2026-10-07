"use client";
import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter((s) => s.trim()).length : 0;

  return (
    <div className="space-y-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tempel atau ketik teks di sini..."
        className="w-full h-48 p-4 rounded-xl border border-border bg-background resize-none focus:outline-none focus:border-primary transition"
      />
      <div className="grid grid-cols-3 gap-4">
        <Stat label="Kata" value={words} />
        <Stat label="Karakter" value={chars} />
        <Stat label="Kalimat" value={sentences} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-4 rounded-xl border border-border text-center">
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
