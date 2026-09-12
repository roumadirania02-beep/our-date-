import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import AdminLogin from "@/components/AdminLogin";
import { activities } from "@/lib/activities";

export const dynamic = "force-dynamic";

type Response = {
  id: string;
  created_at: string;
  activities_selected: string[];
  favorite_activity: string;
  custom_idea: string;
};

function label(id: string) {
  const a = activities.find((x) => x.id === id);
  return a ? `${a.emoji} ${a.title}` : id;
}

export default async function AdminPage() {
  const authed =
    cookies().get("admin_auth")?.value === process.env.ADMIN_PASSWORD &&
    !!process.env.ADMIN_PASSWORD;

  if (!authed) return <AdminLogin />;

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabaseAdmin
    .from("responses")
    .select("*")
    .order("created_at", { ascending: false });

  const responses = (data as Response[]) ?? [];

  return (
    <main className="min-h-dvh px-5 py-8">
      <p className="font-display text-2xl italic text-plum">💌 Date Results</p>
      <p className="mt-1 text-[13px] text-plum/50">
        {responses.length} response{responses.length === 1 ? "" : "s"}
      </p>

      {error && (
        <p className="mt-4 text-[13px] text-red-500">
          Couldn't load responses — check your Supabase setup.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {responses.map((r, i) => (
          <div
            key={r.id}
            className="rounded-2xl border border-plum/10 bg-white/70 p-4"
          >
            <p className="text-[11px] uppercase tracking-wide text-plum/40">
              Response #{String(responses.length - i).padStart(3, "0")} ·{" "}
              {new Date(r.created_at).toLocaleString("fr-FR")}
            </p>

            <p className="mt-3 text-[13px] font-semibold text-plum">
              ❤️ Activities selected
            </p>
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {r.activities_selected?.map((id) => (
                <li
                  key={id}
                  className="rounded-full bg-blush/25 px-2.5 py-1 text-[12px] text-plum"
                >
                  {label(id)}
                </li>
              ))}
            </ul>

            <p className="mt-3 text-[13px] font-semibold text-plum">
              ⭐ Favorite
            </p>
            <p className="text-[13px] text-plum/80">
              {label(r.favorite_activity)}
            </p>

            {r.custom_idea && (
              <>
                <p className="mt-3 text-[13px] font-semibold text-plum">
                  💭 Her/his own idea
                </p>
                <p className="text-[13px] italic text-plum/80">
                  "{r.custom_idea}"
                </p>
              </>
            )}
          </div>
        ))}

        {responses.length === 0 && !error && (
          <p className="mt-8 text-center text-[13px] text-plum/40">
            No responses yet.
          </p>
        )}
      </div>
    </main>
  );
}
