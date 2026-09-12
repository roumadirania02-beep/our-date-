"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Progress from "@/components/Progress";
import { activities } from "@/lib/activities";
import { getAnswers, setAnswers } from "@/lib/answers";

export default function FavoritePage() {
  const router = useRouter();
  const [chosen, setChosen] = useState<string[]>([]);
  const [favorite, setFavorite] = useState<string | null>(null);

  useEffect(() => {
    const a = getAnswers();
    if (a.selected.length === 0) {
      router.replace("/choose");
      return;
    }
    setChosen(a.selected);
    setFavorite(a.favorite);
  }, [router]);

  const options = activities.filter((a) => chosen.includes(a.id));

  function next() {
    setAnswers({ favorite });
    router.push("/idea");
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 pb-28 pt-8">
      <Progress step={2} total={4} />

      <h1 className="mt-2 text-center font-display text-3xl italic text-plum">
        Okay… but if you had
        <br />
        to pick ONE? 👀
      </h1>
      <p className="mt-2 text-center text-[14px] text-plum/55">
        The one you'd be happiest to do with me ♡
      </p>

      <div className="mt-7 flex flex-col gap-3">
        {options.map((a) => {
          const active = favorite === a.id;
          return (
            <button
              key={a.id}
              onClick={() => setFavorite(a.id)}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
                active
                  ? "border-blushDeep bg-blush/20"
                  : "border-plum/10 bg-white/60"
              }`}
            >
              <span className="text-2xl">{a.emoji}</span>
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-plum">
                  {a.title}
                </p>
                <p className="text-[12px] text-plum/55">{a.line}</p>
              </div>
              {active && <span className="text-gold">★</span>}
            </button>
          );
        })}
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md bg-gradient-to-t from-cream via-cream to-transparent px-6 pb-6 pt-10">
        <button
          onClick={next}
          disabled={!favorite}
          className="w-full rounded-full bg-plum py-4 text-[15px] font-medium text-cream shadow-[0_8px_24px_-8px_rgba(59,31,58,0.5)] transition active:scale-95 disabled:opacity-30"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
