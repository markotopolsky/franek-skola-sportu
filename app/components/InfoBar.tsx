"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function InfoBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="bg-brand-magenta text-white">
      <div className="relative mx-auto flex h-9 max-w-[1200px] items-center justify-center px-10 text-xs">
        <span className="truncate text-center">Škola športu Senec - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Zavrieť"
          className="absolute right-6 grid h-6 w-6 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
