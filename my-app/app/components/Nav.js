"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home", name: "Intro" },
  { id: "about", label: "About", name: "Profile" },
  { id: "skills", label: "Skills", name: "Toolbox" },
  { id: "projects", label: "Work", name: "Projects" },
  { id: "contact", label: "Contact", name: "Classifieds" },
];

const pad = (n) => String(n).padStart(2, "0");

export default function Nav() {
  const [active, setActive] = useState(0);
  const bar = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(sections.findIndex((s) => s.id === e.target.id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const counter = `${pad(active + 1)} / ${pad(sections.length)} · ${sections[active].name}`;

  return (
    <>
      {/* fire progress bar */}
      <div
        ref={bar}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-crimson via-ember to-yellow-300"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Desktop top bar */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 hidden border-b border-paper/10 bg-soot/80 backdrop-blur md:block"
      >
        <div className="mx-auto flex h-14 max-w-[1366px] items-center justify-between px-[71px] font-mono text-xs uppercase tracking-[0.2em]">
          <a
            href="#home"
            className="font-display text-xl font-black normal-case tracking-tight"
          >
            RD<span className="text-ember">.</span>
          </a>
          <ul className="flex gap-10">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`nav-link ${i === active ? "is-active" : ""}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="tabular-nums text-paper/60">{counter}</span>
        </div>
      </nav>

      {/* Mobile counter chip */}
      <div className="fixed right-3 top-3 z-50 border border-paper/15 bg-soot/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper/70 backdrop-blur md:hidden">
        {counter}
      </div>

      {/* Mobile bottom bar */}
      <nav
        aria-label="Primary mobile"
        className="fixed inset-x-3 bottom-3 z-50 border border-paper/20 bg-soot/90 pb-[env(safe-area-inset-bottom)] shadow-[0_0_30px_-6px_rgba(255,106,0,0.45)] backdrop-blur md:hidden"
      >
        <ul className="grid grid-cols-5">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`flex flex-col items-center gap-1.5 py-3 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                  i === active ? "text-ember" : "text-paper/60"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === active
                      ? "bg-ember shadow-[0_0_8px_2px_#ff6a00]"
                      : "bg-paper/20"
                  }`}
                />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
