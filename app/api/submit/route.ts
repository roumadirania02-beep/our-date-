import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Server-side client using the service role key — never exposed to the
// browser. Keep this key only in Vercel's environment variables.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const selected: string[] = Array.isArray(body.selected)
      ? body.selected
      : [];
    const favorite: string | null =
      typeof body.favorite === "string" ? body.favorite : null;
    const idea: string = typeof body.idea === "string" ? body.idea : "";

    if (selected.length === 0 || !favorite) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from("responses").insert({
      activities_selected: selected,
      favorite_activity: favorite,
      custom_idea: idea,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
