import { useState, type FormEvent } from "react";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Dots from "./Dots";
import SectionHeader from "./SectionHeader";

const field = "w-full rounded-xl border-[2.5px] border-on-surface bg-surface-container-low px-3.5 py-2.5 font-body-md text-on-surface shadow-[3px_3px_0px_#1b1b1e] transition-all focus:bg-surface-container-lowest focus:shadow-[4px_4px_0px_#40c2fd] focus:outline-none";
const label = "font-label-code text-xs font-bold uppercase";
const card = "rounded-2xl border-[3px] border-on-surface bg-surface-container-lowest p-space-md shadow-[4px_4px_0px_#1b1b1e] transition-transform hover:-translate-y-1";
const mini = "mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border-[1.5px] border-on-surface bg-surface-container-low px-3 py-2 font-label-code text-xs font-bold shadow-[2px_2px_0px_#1b1b1e] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${String(f.get("message"))}\n\n— ${String(f.get("name"))} (${String(f.get("email"))})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-[1280px] px-gutter-mobile py-space-xl lg:px-margin">
      <SectionHeader badge="06 // INBOX & COFFEE CHAT" tone={1} title="LET'S BUILD SOMETHING AWESOME!" emoji="📬" emojiClass="rotate-6" desc="Got a project in mind, an internship opening, or just want to talk tech and coffee? Drop a note!" />
      <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
        <div className="flex flex-col gap-space-md lg:col-span-5">
          <Reveal>
            <div className={card}>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-on-surface bg-primary-fixed"><Icon name="alternate_email" className="text-primary" /></div>
                <div className="min-w-0">
                  <span className="font-label-code text-xs font-bold uppercase text-on-surface-variant">Direct Email</span>
                  <p className="break-all font-headline-sm text-sm">{profile.email}</p>
                </div>
              </div>
              <button type="button" onClick={copy} className={`${mini} hover:bg-primary-fixed`}>
                <Icon name={copied ? "check" : "content_copy"} className="text-sm" />
                <span aria-live="polite">{copied ? "Copied! 📋" : "Copy Email Address"}</span>
              </button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={card}>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-on-surface bg-secondary-fixed"><Icon name="business_center" className="text-secondary" /></div>
                <div>
                  <span className="font-label-code text-xs font-bold uppercase text-on-surface-variant">Professional Network</span>
                  <p className="font-headline-sm text-sm">Dzaki Yushiibanaa on LinkedIn</p>
                </div>
              </div>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${mini} hover:bg-secondary-fixed`}>
                <Icon name="send" className="text-sm" /><span>Connect on LinkedIn</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={card}>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-on-surface bg-on-surface">
                  <Icon name="code" className="text-surface" />
                </div>
                <div>
                  <span className="font-label-code text-xs font-bold uppercase text-on-surface-variant">Code & Repositories</span>
                  <p className="font-headline-sm text-sm">My projects on GitHub</p>
                </div>
              </div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${mini} hover:bg-surface-container-high`}>
                <Icon name="terminal" className="text-sm" /><span>View GitHub Profile</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-2xl border-[3px] border-on-surface bg-tertiary-fixed p-space-md shadow-[4px_4px_0px_#1b1b1e]">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📍</span>
                <div>
                  <span className="font-label-code text-xs font-bold uppercase text-on-tertiary-fixed-variant">Location</span>
                  <h4 className="font-headline-sm text-sm text-on-tertiary-fixed">{profile.location}</h4>
                  <p className="mt-0.5 text-xs text-on-tertiary-fixed-variant">Ready for hybrid, on-site, or remote internships.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={100}>
          <div className="rounded-2xl border-[3.5px] border-on-surface bg-surface-container-lowest p-space-md shadow-[6px_6px_0px_#1b1b1e] lg:p-space-lg">
            <div className="mb-space-md flex items-center justify-between border-b-[2px] border-on-surface pb-3">
              <div className="flex items-center gap-2"><Dots size="w-3.5 h-3.5" /><span className="ml-2 font-label-code text-xs font-bold">compose-message.sh</span></div>
              <span className="rounded border border-on-surface bg-primary-fixed px-2 py-0.5 font-label-badge text-xs text-on-primary-fixed">Quick Reply Mode</span>
            </div>
            <form onSubmit={submit} className="flex flex-col gap-space-sm">
              <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
                <div className="flex flex-col gap-1.5"><label htmlFor="c-name" className={label}>Your Name *</label><input id="c-name" name="name" required type="text" placeholder="e.g. Raditya Pratama" className={field} /></div>
                <div className="flex flex-col gap-1.5"><label htmlFor="c-email" className={label}>Your Email *</label><input id="c-email" name="email" required type="email" placeholder="name@company.com" className={field} /></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-subject" className={label}>Subject / Project Category</label>
                <select id="c-subject" name="subject" className={field}>
                  <option>Internship Opportunity</option>
                  <option>Freelance Web / UI-UX Project</option>
                  <option>Collaboration</option>
                  <option>Saying Hi & Tech Networking ☕</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5"><label htmlFor="c-msg" className={label}>Your Message *</label><textarea id="c-msg" name="message" required rows={4} placeholder="Tell me what you are working on, goals, or timelines..." className={field} /></div>
              <button type="submit" className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-[3px] border-on-surface bg-primary-container py-3.5 font-headline-sm text-headline-sm text-on-primary-container shadow-[4px_4px_0px_#1b1b1e] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#1b1b1e] active:translate-x-1 active:translate-y-1 active:shadow-none">
                <span>{sent ? "Opening your email app… 📬" : "Send Message"}</span><Icon name="send" className="font-bold" />
              </button>
              <p className="mt-1 text-center font-label-code text-xs text-on-surface-variant">🔒 Strictly no spam. Typical response time &lt; 24 hours.</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
