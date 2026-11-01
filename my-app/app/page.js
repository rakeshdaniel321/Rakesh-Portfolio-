

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

    </div>
  );
}
