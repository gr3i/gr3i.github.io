// src/components/TerminalHero.jsx
import { useEffect, useState } from "react";

const lines = [
  "Booting gr3i.github.io...",
  "Loading environment: complete",
  "Authenticating visitor...",
  "Access granted ✅",
  "",
  "Welcome to the digital space of gr3i",
  "Type `explore` to continue..."
];

	export default function Termina() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[i++]]);
      } else {
        clearInterval(interval);
      }
    }, 500); // rychlost zápisu řádků
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-green-400 font-mono text-lg p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-black border border-green-700 p-6 rounded-lg shadow-lg">
        {displayedLines.map((line, index) => (
          <div key={index} className="whitespace-pre">
            {line}
          </div>
        ))}
        <div className="mt-2 animate-pulse text-green-500">▊</div>
      </div>
    </section>
  );
}

