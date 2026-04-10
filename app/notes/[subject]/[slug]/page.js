import clientPromise from "@/lib/db";
export async function GET(req, { params }) {
  try {
    const { subject, slug } = await params;
    const client = await clientPromise;
    const db = client.db("MathNotesApp");

    const note = await db.collection("notes").findOne({
      slug,
      subject,
    });
    if (!note) {
      return Response.json({ error: "Not found sorry" });
    }
    return Response.json(note);
  } catch (err) {
    return Response.json({ error: err.message });
  }
}
