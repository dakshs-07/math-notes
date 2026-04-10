import clientPromise from "@/lib/db";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function POST(req) {
  try {
    const { title, content } = await req.json();
    if (!title || !content) {
      return Response.json(
        { error: "Missing fields! Check again bro" },
        { status: 404 },
      );
    }
    const client = await clientPromise;
    const db = client.db("MathNotesApp");
    const slug = slugify(title);

    const result = await db
      .collection("notes")
      .insertOne({ title, slug, content, createdAt: new Date() });

    return Response.json({ ...result, slug });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
