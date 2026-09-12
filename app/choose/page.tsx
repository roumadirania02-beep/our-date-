"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Progress from "@/components/Progress";
import { activities } from "@/lib/activities";
import { getAnswers, setAnswers } from "@/lib/answers";

export default function ChoosePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setSelected(getAnswers().selected);
  }, []);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function next() {
    setAnswers({ selected });
    router.push("/favorite");
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 pb-28 pt-8">
      <Progress step={1} total={4} />

      <h1 className="mt-2 text-center font-display text-3xl italic text-plum">
        Okay… what sounds fun? 👀
      </h1>
      <p className="mt-2 text-center text-[14px] text-plum/55">
        Pick everything you'd love to do with me ♡
      </p>

      <div className="mt-7 grid grid-cols-2 gap-4">
        {activities.map((a) => {
          const active = selected.includes(a.id);
          return (
            <button
              key={a.id}
              onClick={() => toggle(a.id)}
              className={`group relative overflow-hidden rounded-card text-left transition ${
                active
                  ? "ring-[3px] ring-blushDeep scale-[0.98]"
                  : "ring-1 ring-plum/10"
              }`}
            >
              <div className="relative h-28 w-full">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/0" />
                <span className="absolute left-2.5 top-2.5 text-lg">
                  {a.emoji}
                </span>
                {active && (
                  <span className="absolute right-2.5 top-2.5 flex h-6 w-6 animate-popIn items-center justify-center rounded-full bg-blushDeep text-xs text-white">
                    ✓
                  </span>
                )}
              </div>
              <div className="bg-white/70 px-3 py-2.5">
                <p className="text-[13px] font-semibold text-plum">
                  {a.title}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-plum/55">
                  {a.line}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md bg-gradient-to-t from-cream via-cream to-transparent px-6 pb-6 pt-10">
        <button
          onClick={next}
          disabled={selected.length === 0}
          className="w-full rounded-full bg-plum py-4 text-[15px] font-medium text-cream shadow-[0_8px_24px_-8px_rgba(59,31,58,0.5)] transition active:scale-95 disabled:opacity-30"
        >
          Continue ({selected.length})
        </button>
      </div>
    </main>
  );
}
