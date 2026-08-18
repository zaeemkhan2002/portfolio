import Link from "next/link";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { CONTACT, ROLE } from "@/data/profile";

const socials = [
  { href: CONTACT.github, label: "GitHub", icon: Github },
  { href: CONTACT.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: Mail },
  { href: CONTACT.resume, label: "CV", icon: FileDown },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.07]">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="label">Get in touch</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-2xl font-semibold tracking-tight text-slate-100 transition-colors hover:text-cyan-300 sm:text-3xl"
            >
              {CONTACT.email}
            </a>
            <p className="text-sm text-slate-500">
              {ROLE} · {CONTACT.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="chip px-3 py-2 hover:border-cyan-400/35 hover:text-cyan-200"
              >
                <Icon size={15} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
