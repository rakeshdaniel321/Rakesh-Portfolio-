export default function Flames({ count = 18, className = "" }) {
  return (
    <div className={`flames ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="flame"
          style={{
            height: `${55 + ((i * 37) % 45)}%`,
            "--d": `${0.7 + ((i * 13) % 7) / 10}s`,
            "--delay": `-${((i * 29) % 10) / 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Embers({ count = 14 }) {
  return (
    <div className="embers" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${(i * 53) % 100}%`,
            "--dur": `${3 + ((i * 7) % 4)}s`,
            "--delay": `-${(i * 11) % 6}s`,
            "--x": `${((i * 17) % 40) - 20}px`,
          }}
        />
      ))}
    </div>
  );
}
