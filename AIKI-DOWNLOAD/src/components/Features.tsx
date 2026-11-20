import { ClipboardCheck, Camera, ArrowUpRight, CalendarClock } from "lucide-react";

const items = [
  [ClipboardCheck, "Operational Accountability", "Make responsibilities visible and track work progress."],
  [Camera, "Proof & Exception Reporting", "Capture evidence of completed work and report operational obstacles."],
  [ArrowUpRight, "Intelligent Escalation", "Notify the appropriate superior when intervention is required."],
  [CalendarClock, "Availability Management", "Keep teams informed about availability changes."],
] as const;

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Everything your business needs to stay accountable.</h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([Icon, t, d]) => (
          <article key={t} className="group rounded-3xl bg-card p-6 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:ring-brand/40">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-ink"><Icon size={22} /></span>
            <h3 className="mt-5 font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
          </article>))}
      </div>
    </section>
  );
}
