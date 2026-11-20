import { ShieldCheck, AlertTriangle, Bell, CheckCircle2 } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px] animate-float sm:w-[300px]" aria-hidden>
      <div className="absolute -inset-10 rounded-full bg-brand/25 blur-3xl" />
      <div className="relative rounded-[2.8rem] border border-white/15 bg-black p-2.5 shadow-2xl shadow-black/60">
        <div className="relative overflow-hidden rounded-[2.3rem] bg-ink px-4 pb-6 pt-9">
          <div className="absolute left-1/2 top-2.5 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
          <div className="flex items-center justify-between">
            <div><p className="text-[11px] text-mute">Today</p><p className="text-lg font-semibold">Overview</p></div>
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-card"><Bell size={16} /><i className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand" /></span>
          </div>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand to-amber p-4 text-ink">
            <p className="text-[11px] font-medium opacity-80">Tasks on track</p>
            <p className="text-3xl font-bold">86%</p>
            <div className="mt-2 h-1.5 rounded-full bg-ink/20"><div className="h-full w-[86%] rounded-full bg-ink" /></div>
          </div>
          {[[CheckCircle2, "Proof submitted", "Site inspection", "text-emerald-400"], [AlertTriangle, "Exception raised", "Supplier delay", "text-amber"], [ShieldCheck, "Escalated", "To line manager", "text-brand"]].map(([I, t, s, c]) => {
            const Icon = I as typeof CheckCircle2;
            return (<div key={t as string} className="mt-2.5 flex items-center gap-3 rounded-2xl bg-card p-3">
              <Icon size={18} className={c as string} /><div><p className="text-xs font-medium">{t as string}</p><p className="text-[11px] text-mute">{s as string}</p></div>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
}
