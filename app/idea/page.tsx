"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Progress from "@/components/Progress";
import { getAnswers, setAnswers } from "@/lib/answers";

export default function IdeaPage() {
  const router = useRouter();
  const [idea, setIdea] = useState("");

  useEffect(() => {
    setIdea(getAnswers().idea);
  }, []);

  function next() {
    setAnswers({ idea });
    router.push("/submit");
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 pb-28 pt-8">
      <Progress step={3} total={4} />

      <h1 className="mt-2 text-center font-display text-3xl italic leading-snug text-plum">
        Is there something else
        <br />
        you'd love to do with me? ♡
      </h1>
      <p className="mt-2 text-center text-[14px] text-plum/55">
        Maybe you have an idea I haven't thought of… tell me 👀
      </p>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={5}
        placeholder="Your little idea goes here… 💭"
        className="mt-7 w-full resize-none rounded-2xl border border-plum/10 bg-white/70 p-4 text-[14px] text-plum placeholder:text-plum/35 focus:border-blushDeep focus:outline-none"
      />
      <p className="mt-2 text-center text-[12px] text-plum/40">
        A place, an activity, a little adventure… anything ♡
      </p>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md bg-gradient-to-t from-cream via-cream to-transparent px-6 pb-6 pt-10">
        <button
          onClick={next}
          className="w-full rounded-full bg-plum py-4 text-[15px] font-medium text-cream shadow-[0_8px_24px_-8px_rgba(59,31,58,0.5)] transition active:scale-95"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
