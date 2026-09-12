export type Answers = {
  selected: string[];
  favorite: string | null;
  idea: string;
};

const KEY = "our-date-answers";

const empty: Answers = { selected: [], favorite: null, idea: "" };

export function getAnswers(): Answers {
  if (typeof window === "undefined") return empty;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

export function setAnswers(patch: Partial<Answers>) {
  if (typeof window === "undefined") return;
  const current = getAnswers();
  const next = { ...current, ...patch };
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function clearAnswers() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
