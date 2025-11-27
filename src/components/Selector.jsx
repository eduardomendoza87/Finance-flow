import React from "react";
import { Smile, Frown, Meh, PartyPopper } from "lucide-react"; // Iconos ajustados

const moods = [
  { id: "sad", label: "Triste", icon: Frown },
  { id: "neutral", label: "Neutro", icon: Meh },
  { id: "happy", label: "Bien", icon: Smile },
  { id: "party", label: "Increíble", icon: PartyPopper },
];

export default function MoodSelector({ selectedMood, onSelect }) {
  return (
    <div>
      <label className="block mb-3 text-sm font-medium text-text-main">¿Cómo te sientes?</label>
      <div className="grid grid-cols-4 gap-4">
        {moods.map(({ id, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200
              ${
                selectedMood === id
                  ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                  : "bg-background border-border text-text-muted hover:bg-surface hover:border-primary/50"
              }
            `}
          >
            <Icon size={28} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
}