"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-8">
      <p className="font-display text-2xl italic text-plum">💌 Date Results</p>
      <form onSubmit={submit} className="mt-8 w-full max-w-xs">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-2xl border border-plum/10 bg-white/70 p-4 text-[14px] focus:border-blushDeep focus:outline-none"
          autoFocus
        />
        {error && (
          <p className="mt-2 text-[13px] text-red-500">Wrong password.</p>
        )}
        <button
          disabled={loading}
          className="mt-4 w-full rounded-full bg-plum py-3.5 text-[14px] font-medium text-cream transition active:scale-95 disabled:opacity-50"
        >
          {loading ? "…" : "Enter"}
        </button>
      </form>
    </main>
  );
}
