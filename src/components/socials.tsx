import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import {
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  MailIcon,
  FileIcon,
} from "./icons";

const items = [
  { key: "github", href: site.socials.github, label: "GitHub", Icon: GitHubIcon },
  { key: "twitter", href: site.socials.twitter, label: "Twitter", Icon: TwitterIcon },
  { key: "linkedin", href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { key: "email", href: site.socials.email, label: "Mail", Icon: MailIcon },
  { key: "resume", href: site.socials.resume, label: "Resume", Icon: FileIcon },
];

const hoverCardsData: Record<string, {
  pronouns?: string;
  handle: string;
  bio: string;
  stats?: string[];
  bannerText: string;
}> = {
  github: {
    handle: "@abhidinkale",
    bio: "AI Engineer & Product Builder. Exploring intelligent agents and autonomous systems across health, finance, and edtech.",
    stats: ["8+ Products", "Open Source AI"],
    bannerText: "build • break • learn",
  },
  twitter: {
    handle: "@abhidinkale",
    bio: "Building AI-powered products for the real world. Thinking about agentic workflows, quantitative systems, and tech.",
    stats: ["AI Tech", "Agent Systems"],
    bannerText: "connect • share • build",
  },
  linkedin: {
    pronouns: "He/Him",
    handle: "in/abhidinkale",
    bio: "AI Engineer × Product Builder | Computer Science Student @ Lovely Professional University.",
    stats: ["Open to Connect", "Punjab, India"],
    bannerText: "network • build • lead",
  },
  email: {
    handle: site.email,
    bio: "Available for ambitious AI projects, agent engineering, collaborations, and discussions on tech.",
    stats: ["Direct Channel", "Prompt Reply"],
    bannerText: "collab • discuss • build",
  },
  resume: {
    handle: "Curriculum Vitae",
    bio: "Comprehensive overview of AI engineering background, products shipped, and technical foundations.",
    stats: ["PDF Document", "1-Page CV"],
    bannerText: "skills • systems • projects",
  },
};

export function Socials({ className = "" }: { className?: string }) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {items
        .filter((i) => i.href)
        .map(({ key, href, label, Icon }) => {
          const card = hoverCardsData[key];

          return (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative flex size-10 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-400 hover:shadow-md"
              >
                <Icon className="size-4 transition-transform duration-200 group-hover:scale-110" />
              </a>

              {/* Hover popover card */}
              <AnimatePresence>
                {hoveredKey === key && card && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] shadow-2xl z-50 hidden sm:block"
                  >
                    <div className="bg-[var(--chip)] px-3.5 py-1.5 border-b border-[var(--line)] font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                      {card.bannerText}
                    </div>
                    <div className="p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[var(--fg)]">
                          {card.handle}
                        </span>
                        {card.pronouns && (
                          <span className="font-mono text-[10px] text-[var(--soft)]">
                            {card.pronouns}
                          </span>
                        )}
                      </div>
                      <p className="text-[11.5px] leading-relaxed text-[var(--muted)]">
                        {card.bio}
                      </p>
                      {card.stats && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {card.stats.map((s) => (
                            <span
                              key={s}
                              className="rounded border border-[var(--line)] bg-[var(--chip)] px-1.5 py-0.5 font-mono text-[9px] text-[var(--soft)]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
    </div>
  );
}
