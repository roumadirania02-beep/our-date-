import Link from "next/link";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-8 text-center">
      <FloatingHearts />

      <p className="font-display text-4xl italic leading-tight text-plum">
        What should we do
        <br />
        together? <span className="text-blushDeep">♡</span>
      </p>

      <p className="mt-5 max-w-[26ch] text-[15px] text-plum/60">
        You choose the plan, I'll take care of the rest.
      </p>

      <Link
        href="/choose"
        className="mt-10 w-full max-w-[280px] rounded-full bg-plum py-4 text-[15px] font-medium tracking-wide text-cream shadow-[0_8px_24px_-8px_rgba(59,31,58,0.5)] transition active:scale-95"
      >
        Let's choose ✨
      </Link>
    </main>
  );
}
