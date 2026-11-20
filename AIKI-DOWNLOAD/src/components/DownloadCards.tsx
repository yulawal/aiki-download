"use client";
import { useState } from "react";
import { Download, X } from "lucide-react";
import { siteConfig as c } from "@/config/download";
import { AppleIcon, AndroidIcon } from "./Icons";
import { IOS_STEPS } from "./Installation";

export default function DownloadCards() {
  const [open, setOpen] = useState(false);
  const meta = [c.appVersion && `Version ${c.appVersion}`, c.apkSize].filter(Boolean).join(" · ");
  return (
    <section id="platforms" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl bg-card p-8 ring-1 ring-white/5">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black"><AppleIcon size={24} /></span>
          <h2 className="mt-6 text-2xl font-semibold">AIKI for iPhone</h2>
          <p className="mt-2 text-mute">Install AIKI directly on your iPhone and access your business operations from your Home Screen.</p>
          <p className="mt-3 text-sm text-mute">Installed as a web app (PWA) through Safari. No App Store download.</p>
          <button onClick={() => setOpen(true)} className="mt-7 w-full rounded-full bg-brand py-3.5 font-medium text-ink transition hover:bg-amber sm:w-auto sm:px-8">Install for iOS</button>
        </article>
        <article className="rounded-3xl bg-card p-8 ring-1 ring-white/5">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400"><AndroidIcon size={24} /></span>
          <h2 className="mt-6 text-2xl font-semibold">AIKI for Android</h2>
          <p className="mt-2 text-mute">Get the AIKI Android application and install it directly on your device.</p>
          {meta && <p className="mt-3 text-sm text-mute">{meta}</p>}
          <p className="mt-1 text-sm text-mute">Android may ask you to allow installs from your browser.</p>
          {c.androidApkUrl
            ? <a href={c.androidApkUrl} download className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-medium text-ink transition hover:bg-amber sm:w-auto sm:px-8"><Download size={18} /> Download APK</a>
            : <button disabled className="mt-7 w-full cursor-not-allowed rounded-full bg-white/10 py-3.5 font-medium text-mute sm:w-auto sm:px-8">Download APK · link coming soon</button>}
        </article>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Install AIKI on iPhone" className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md rounded-3xl bg-card p-7 ring-1 ring-white/10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between"><h3 className="text-xl font-semibold">Install AIKI on iPhone</h3>
              <button aria-label="Close" onClick={() => setOpen(false)} className="rounded-lg p-1 text-mute hover:text-white"><X size={20} /></button></div>
            <p className="mt-2 text-sm text-mute">AIKI on iOS is a Progressive Web App. Open the AIKI address in Safari, then add it to your Home Screen.</p>
            <ol className="mt-5 space-y-3">{IOS_STEPS.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-xs font-semibold text-brand">{i + 1}</span>{s}</li>))}</ol>
            {c.iosPwaUrl
              ? <a href={c.iosPwaUrl} className="mt-6 block rounded-full bg-brand py-3 text-center font-medium text-ink hover:bg-amber">Open AIKI in Safari</a>
              : <p className="mt-6 rounded-xl bg-white/5 p-3 text-center text-sm text-mute">The AIKI web address will be available soon.</p>}
          </div>
        </div>)}
    </section>
  );
}
