const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

async function getNote(subject, slug) {
  const res = await fetch(`${baseUrl}/api/notes/${subject}/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}
export default async function Page({ params }) {
  const { subject, slug } = await params;
  const note = await getNote(subject, slug);

  if (!note) return <div>Not found!</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{note.title}</h1>
      <p className="text-gray-500">{note.subject}</p>
      <div className="mt-5">{note.content}</div>
    </div>
  );
}
