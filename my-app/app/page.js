import Image from "next/image";
import Reveal from "./components/Reveal";
import LiveDate from "./components/LiveDate";
import Nav from "./components/Nav";
import CountUp from "./components/CountUp";
import ProjectStack from "./components/ProjectStack";
import Flames, { Embers } from "./components/Flames";
import {
  EMAIL,
  GITHUB,
  services,
  skills,
  allSkills,
  details,
  projects,
} from "./data";

const wrap = "mx-auto w-full max-w-[1366px] px-4 sm:px-6 md:px-[71px]";
const eyebrow =
  "font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-ember";
const sectionTitle =
  "mt-3 font-display font-black uppercase tracking-tighter leading-[1.02] text-4xl sm:text-6xl text-paper";
const dropCap =
  "first-letter:float-left first-letter:font-display first-letter:font-black first-letter:text-6xl first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-1 first-letter:text-ember";

const stats = [
  { to: services.length, label: "Services" },
  { to: allSkills.length, label: "Technologies" },
  { to: projects.length, label: "Projects" },
];

export default function Home() {
  return (
    <div className="overflow-x-clip pb-28 md:pb-0">
      <Nav />

      {/* ================= HOME ================= */}
      <section id="home" className={`${wrap} scroll-mt-16 pt-5 md:pt-24`}>
        {/* Burning masthead */}
        <header className="burn px-4 pb-14 pt-6 sm:px-10 md:pb-16">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-caption sm:text-xs">
            Freelance Edition · Open For New Projects
          </p>
          <h1 className="mt-3 text-center font-display text-[2.15rem] font-black uppercase leading-none tracking-tighter text-ink sm:text-6xl lg:text-8xl">
           The Rakesh Daniel ERA
          </h1>
          <div className="mt-5 border-t-2 border-ink" />
          <div className="mt-[3px] border-t border-ink" />
          <div className="flex flex-col gap-1 border-b border-ink py-2.5 text-center font-mono text-[10px] font-semibold uppercase tracking-widest sm:flex-row sm:justify-between sm:text-xs">
            <LiveDate />
            <span>Chennai, TamilNadu</span>
            <span>Available For Freelance</span>
          </div>
          {/* <Flames /> */}
          <Embers />
        </header>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* headline */}
          <div>
            <p className={eyebrow}>Special Edition · Open for Projects</p>
            <h2 className="mt-4 font-display text-[2.6rem] font-black uppercase leading-[1.02] tracking-tighter text-paper sm:text-6xl lg:text-7xl">
              Full Stack Developer{" "}
              <span className="fire-text">Available for Hire</span>
            </h2>
            <p className="mt-5 max-w-xl font-display text-lg italic text-paper/75 sm:text-xl">
              Turning your business ideas into fast, secure, and scalable web
              applications.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
              Hi, I&apos;m Rakesh Daniel, a freelance full stack developer based
              in Chennai. I build custom websites, e-commerce stores, and secure
              booking systems from scratch—delivering clean design, dependable
              code, and on-time results for growing businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-fire">  
                Hire Me
              </a>
              <a href="#projects" className="btn-ghost">
                See My Work
              </a>
            </div>
          </div>

          {/* photo in a burning frame */}
          <figure className="mx-auto w-full max-w-sm md:max-w-none">
            <div className="burn group p-3 pb-6">
              <div className="relative overflow-hidden">
                <Image
                  src="/Images/Profile_Pic/Rakesh_pic.jpeg"
                  alt="Rakesh Daniel, full stack developer"
                  width={600}
                  height={750}
                  priority
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="h-auto w-full grayscale contrast-125 sepia-[.35] transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0 group-hover:sepia-0"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ember/40 to-transparent mix-blend-multiply" />
              </div>
              {/* <Flames count={120} className="flames-sm" /> */}
              <Embers/>
            </div>
            <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-widest text-paper/60">
              Fig. 1 — Rakesh Daniel, full stack developer
            </figcaption>
          </figure>

          {/* services */}
          <aside className="self-start md:col-span-2 lg:col-span-1">
            <div className="burn p-5 sm:p-6">
              <h3 className="border-b border-ink/30 pb-4 font-display text-2xl font-bold">
                Today&apos;s Services
              </h3>
              <ul className="divide-y divide-ink/20">
                {services.map((s) => (
                  <li
                    key={s}
                    className="-mx-2 flex items-center gap-3 px-2 py-3 text-sm transition-colors duration-150 hover:bg-ink hover:text-paper"
                  >
                    <span className="text-xs text-crimson">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* breaking-news ticker */}
        <div className="mt-14 flex overflow-hidden border-y-2 border-ember/70 bg-crimson/90 text-white">
          <span className="z-10 shrink-0 bg-ink px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-widest">
            Breaking
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="ticker py-2 font-mono text-xs uppercase tracking-widest">
              {[0, 1].map((k) => (
                <div
                  key={k}
                  className="flex shrink-0 gap-10 pr-10"
                  aria-hidden={k === 1}
                >
                  {[...services, ...services].map((s, i) => (
                    <span key={`${s}-${i}`}>★ {s}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className={`${wrap} py-14`} aria-label="Edition stats">
        <Reveal>
          <div className="grid grid-cols-3 divide-x divide-paper/20 border-y border-paper/20">
            {stats.map((s) => (
              <div key={s.label} className="px-2 py-8 text-center">
                <div className="fire-text font-display text-5xl font-black sm:text-7xl">
                  <CountUp to={s.to} suffix="+" />
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-paper/60 sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className={`${wrap} scroll-mt-16 py-16 md:py-24`}>
        <Reveal>
          <p className={eyebrow}>Profile</p>
          <h2 className={sectionTitle}>About The Developer</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <p
              className={`max-w-xl text-lg leading-relaxed text-paper/80 ${dropCap}`}
            >
              I build clean, fast and reliable web applications, from e-commerce
              stores with payment integration to secure login systems. I care
              about simple design, clear code and delivering on time.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="burn divide-y divide-ink/20 px-5 py-2">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex justify-between gap-4 py-3 text-sm"
                >
                  <dt className="font-mono text-[11px] font-semibold uppercase tracking-widest text-caption">
                    {d.label}
                  </dt>
                  <dd className="text-right font-medium">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="scroll-mt-16 py-16 md:py-24">
        <div className={wrap}>
          <Reveal>
            <p className={eyebrow}>The Toolbox</p>
            <h2 className={sectionTitle}>Skills</h2>
             <Embers/>
          </Reveal>
        </div>

        <div className="mt-8 overflow-hidden border-y border-paper/15 py-3">
          <div className="ticker ticker-rev font-mono text-sm uppercase tracking-widest text-paper/70">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="flex shrink-0 gap-10 pr-10"
                aria-hidden={k === 1}
              >
                {[...allSkills, ...allSkills].map((s, i) => (
                  <span key={`${s}-${i}`}>
                    <span className="mr-3 text-ember">✦</span>
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`${wrap} mt-10`}>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-paper/50 sm:hidden">
            Swipe → for more
          </p>
          <Reveal>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
              {skills.map((g) => (
                <div
                  key={g.group}
                  className="skill-card min-w-[80%] snap-center p-5 sm:min-w-0"
                >
                  <h3 className="border-b border-paper/20 pb-3 font-display text-xl font-bold">
                    {g.group}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-paper/80">
                    {g.items.map((i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-xs text-ember">✦</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="scroll-mt-16 py-16 md:py-24">
        <div className={wrap}>
          <Reveal>
            <p className={eyebrow}>The Archive</p>
            <h2 className={sectionTitle}>Selected Projects</h2>
          </Reveal>
          <div className="mt-10">
            <ProjectStack projects={projects} />  
          </div>
        </div>
      
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className={`${wrap} scroll-mt-16 py-16 md:py-24`}>
        <Reveal>
          <p className={eyebrow}>Classifieds</p>
          <h2 className={sectionTitle}>Get In Touch</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="burn mt-8 max-w-3xl p-6 pb-14 sm:p-10 sm:pb-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-caption">
              Wanted: your next big idea
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              Have a project in mind? Send me an email and I&apos;ll get back to
              you soon.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 block break-all font-display text-2xl font-black text-crimson transition-colors hover:text-ink sm:text-4xl"
            >
              {EMAIL}
            </a>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${EMAIL}`} className="btn-fire">
                Send Email
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                GitHub Profile
              </a>
            </div>
            {/* <Flames count={14} className="flames-sm" /> */}
            <Embers/>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-paper/15 px-4 py-6 text-center font-mono text-[11px] uppercase tracking-widest text-paper/50">
        © 2026 Rakesh Daniel · Chennai, TamilNadu
      </footer>
    </div>
  );
}
