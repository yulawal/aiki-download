import { AppleIcon, AndroidIcon } from "./Icons";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rotate-12 rounded-[3rem] border border-white/5" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Your business.<br />Under control.</h1>
          <p className="mt-6 max-w-md text-lg text-mute">Bring operational clarity, accountability and intelligent oversight to your business. Take AIKI wherever work happens.</p>
          <div id="download" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#platforms" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 font-medium text-ink shadow-lg shadow-brand/25 transition hover:bg-amber"><AppleIcon /> Download for iPhone</a>
            <a href="#platforms" className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-medium transition hover:bg-white/10"><AndroidIcon /> Download for Android</a>
          </div>
          <p className="mt-4 text-sm text-mute">Available for iOS and Android</p>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}
