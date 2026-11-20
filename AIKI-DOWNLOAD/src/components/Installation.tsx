"use client";
import { useState } from "react";
import { Share, SquarePlus, Smartphone, Download, FolderOpen, ShieldCheck, Compass, CheckCircle2, type LucideIcon } from "lucide-react";

export const IOS_STEPS = ["Open the AIKI app link in Safari.", "Tap the Share icon.", "Select Add to Home Screen.", "Confirm Add.", "Launch AIKI from your Home Screen."];
const ANDROID_STEPS = ["Tap Download APK.", "Wait for the download to finish.", "Open the downloaded APK.", "Follow Android's installation prompts.", "Open AIKI."];
const IOS_ICONS: LucideIcon[] = [Compass, Share, SquarePlus, CheckCircle2, Smartphone];
const AND_ICONS: LucideIcon[] = [Download, Download, FolderOpen, ShieldCheck, Smartphone];

export default function Installation() {
  const [tab, setTab] = useState<"iphone" | "android">("iphone");
  const steps = tab === "iphone" ? IOS_STEPS : ANDROID_STEPS;
  const icons = tab === "iphone" ? IOS_ICONS : AND_ICONS;
  return (
    <section id="installation" className="mx-auto max-w-3xl px-5 py-20">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Install AIKI in five steps.</h2>
      <div role="tablist" aria-label="Platform" className="mt-8 inline-flex rounded-full bg-card p-1 ring-1 ring-white/5">
        {(["iphone", "android"] as const).map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition ${tab === t ? "bg-brand text-ink" : "text-mute hover:text-white"}`}>{t === "iphone" ? "iPhone" : "Android"}</button>))}
      </div>
      <ol role="tabpanel" className="mt-8 space-y-3">
        {steps.map((s, i) => { const Icon = icons[i]; return (
          <li key={s} className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-white/5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand/15 text-sm font-semibold text-brand">{i + 1}</span>
            <span className="flex-1">{s}</span>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-mute"><Icon size={18} /></span>
          </li>); })}
      </ol>
      {tab === "android" && <p className="mt-4 text-sm text-mute">Android may ask you to approve installing an app from your browser. Allow it for this install only.</p>}
    </section>
  );
}
