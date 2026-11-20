import Logo from "./Logo";
import { siteConfig as c } from "@/config/download";

export default function Footer() {
  const mail = c.supportEmail ? `mailto:${c.supportEmail}` : "#support";
  const links: [string, string][] = [["Download AIKI", "#download"], ["Installation Guide", "#installation"], ["Support", mail], ["Privacy Policy", c.privacyPolicyUrl || "#"], ["Terms of Service", c.termsUrl || "#"]];
  return (
    <footer id="support" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div><Logo /><p className="mt-3 text-sm text-mute">System Intelligence.</p></div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-mute">
            {links.map(([l, h]) => <li key={l}><a className="transition hover:text-white" href={h}>{l}</a></li>)}
          </ul>
        </div>
        <p className="mt-10 text-xs text-mute">© {new Date().getFullYear()} AIKI. All rights reserved.</p>
      </div>
    </footer>
  );
}
