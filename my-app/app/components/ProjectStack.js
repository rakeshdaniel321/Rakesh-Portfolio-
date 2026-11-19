"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function ProjectStack({ projects }) {
  const refs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const cards = refs.current;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!card || !next) return;
        const stickyNext = parseFloat(getComputedStyle(next).top) || 0;
        const travel = window.innerHeight - stickyNext;
        const p =
          1 -
          clamp((next.getBoundingClientRect().top - stickyNext) / travel, 0, 1);
        card.style.setProperty("--p", p.toFixed(3));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stack flex flex-col gap-6 pb-4">
      {projects.map((p, i) => (
        <article
          key={p.title}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="stack-card burn p-5 md:p-8"
          style={{
            position: "sticky",
            top: `calc(var(--stack-top) + ${i * 14}px)`,
          }}
        >
          <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-center">
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em]">
                <span className="font-bold text-crimson">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-caption">{p.tag}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl font-black uppercase leading-[1.05] tracking-tighter sm:text-4xl md:text-5xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/80">
                {p.desc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/60 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fire flex-1 sm:flex-none"
                >
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark flex-1 sm:flex-none"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>

            {/* preview: hidden on mobile so the sticky card stays short */}
            <div className="relative hidden aspect-[4/3] overflow-hidden border border-ink md:block">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  fill
                  sizes="35vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              ) : (
                <div className="clipping absolute inset-0 grid place-items-center">
                  <span className="font-display text-8xl font-black text-ink/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
