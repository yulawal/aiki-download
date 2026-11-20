"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [["Features", "#features"], ["Installation", "#installation"], ["Support", "#support"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/60 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="AIKI home"><Logo /></a>
        <ul className="hidden items-center gap-8 text-sm text-mute md:flex">
          {links.map(([l, h]) => <li key={h}><a className="transition hover:text-white" href={h}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#download" className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-ink shadow-lg shadow-brand/20 transition hover:bg-amber">Download AIKI</a>
          <button className="rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (<ul className="border-t border-white/5 bg-ink/95 px-5 py-3 md:hidden">
        {links.map(([l, h]) => <li key={h}><a onClick={() => setOpen(false)} className="block py-3 text-mute hover:text-white" href={h}>{l}</a></li>)}
      </ul>)}
    </header>
  );
}
