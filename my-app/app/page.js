import Image from "next/image";
const services = ["Web Apps", "E-commerce", "Booking Systems", "Telegram Bots"];
export default function Home() {
  return (
    <div>
      <header className="mx-auto max-w-[1366px] px-6 md:px-[71px] pt-10 pb-6 lg:pt-16 lg:pb-10">
        <h1 className="font-display font-black uppercase tracking-tighter text-center text-ink text-4xl sm:text-6xl lg:text-7xl leading-none">
          The Rakesh Daniel Times
        </h1>
        <div className="mt-8 border-t-2 border-ink" />
        <div className="mt-[3px] border-t border-ink" />

        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between border-b border-ink py-3 font-body font-semibold text-xs sm:text-sm uppercase tracking-widest">
          <span>Sunday, November 1, 2026</span>
          <span>Chennai, India</span>
          <span>Freelance Edition</span>
        </div>
      </header>
      <main className="mx-auto max-w-[1366px] px-6 md:px-[71px] pt-10 pb-6">
        <section className="grid grid-cols-1 md:grid-cols-[1.75fr_1fr_1fr] mt-8 pb-8 border-b-2 border-ink">
          {/* Left: headline */}
          <div className="md:pr-12 md:border-r border-ink">
            <p className="text-crimson font-semibold text-sm uppercase tracking-[0.25em]">
              The Front-Page Story
            </p>
            <h2 className="mt-6 font-display font-black uppercase tracking-tighter leading-[1.05] text-5xl lg:text-6xl">
              Full Stack Developer Available for Hire
            </h2>
            <p className="mt-6 italic text-xl text-ink/80 max-w-xl">
              Thoughtful digital work, built from the first sketch to the final line of code.
            </p>
            <p className="mt-6 max-w-md leading-relaxed">
              Meet Rakesh Daniel, a freelance full stack developer based in Chennai. From considered
              interfaces to dependable systems behind the scenes, he builds practical web experiences
              for ambitious ideas and growing businesses.
            </p>
            <a
              href="mailto:yourmail@example.com"
              className="inline-block mt-8 bg-crimson text-white font-semibold px-8 py-3.5 hover:bg-ink transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Middle: photo */}
          <figure className="mt-10 md:mt-0 md:px-6 md:border-r border-ink">
            <div className="border border-ink p-2">
              <Image
                src="/Images/Profile_Pic/Rakesh_pic.jpeg"
                alt="Rakesh Daniel, full stack developer"
                width={600}
                height={750}
                priority
                className="w-full h-auto grayscale contrast-110"
              />
            </div>
            <figcaption className="mt-2 border-t border-ink pt-2 text-xs italic text-caption">
              Rakesh Daniel · Full stack developer, Chennai
            </figcaption>
          </figure>

          {/* Right: services */}
          <aside className="mt-10 md:mt-0 md:pl-6 self-start">
            <div className="border border-ink p-6">
              <h3 className="font-display font-bold text-2xl border-b border-ink/30 pb-4">
                Today&apos;s Services
              </h3>
              <ul className="divide-y divide-ink/30">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 py-3 text-sm">
                    <span className="text-crimson text-xs">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
       <footer className="mt-[3px] border-t border-ink pt-2 text-center text-xs text-caption mb-1 p-3">
        © 2026 Rakesh Daniel · Chennai, India
      </footer>
    </div>
  );
}
