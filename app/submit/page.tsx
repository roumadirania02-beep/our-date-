"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Progress from "@/components/Progress";
import FloatingHearts from "@/components/FloatingHearts";
import { getAnswers, clearAnswers } from "@/lib/answers";

export default function SubmitPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    if (getAnswers().selected.length === 0) router.replace("/choose");
  }, [router]);

  async function send() {
    setStatus("sending");
    const answers = getAnswers();
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      if (!res.ok) throw new Error("failed");
      clearAnswers();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-8 text-center">
        <FloatingHearts />
        <p className="font-display text-3xl italic text-plum">
          It's a date then… maybe 👀❤️
        </p>
        <p className="mt-3 text-[14px] text-plum/55">
          Your date ideas have been saved.
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-8 text-center">
      <Progress step={4} total={4} />

      <p className="mt-6 font-display text-3xl italic text-plum">
        That's it ♡
      </p>
      <p className="mt-3 text-[14px] text-plum/55">
        Your date ideas have been saved.
      </p>

      {status === "error" && (
        <p className="mt-4 text-[13px] text-red-500">
          Something went wrong — mind trying again?
        </p>
      )}

      <button
        onClick={send}
        disabled={status === "sending"}
        className="mt-8 w-full max-w-[280px] rounded-full bg-plum py-4 text-[15px] font-medium text-cream shadow-[0_8px_24px_-8px_rgba(59,31,58,0.5)] transition active:scale-95 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send my choices 💌"}
      </button>
    </main>
  );
}
