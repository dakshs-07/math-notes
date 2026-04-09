"use client";

import { useState } from "react";

function page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async ()=>{
    if (!title || !content ) return alert("Title and content are needed to show notes!");
    setLoading(true);
    const res = await fetch("/api/notes", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({title, content})

    })
    const data = await res.json();
    setLoading(false);

    if (res.ok){
        alert("Saved successfully! Wooohooo!");
        setTitle("");
        setContent("");

    } else {
        alert(data.error || "Error found! Oopsies!")
    }
  }
  return (
    <div className="p-6 max-w-2x mx-auto">
      <h1 className="text-2xl font-bold tracking-wide text-center mb-4">
        Admin Panel
      </h1>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="math notes here, jebalyo :)"
        className="w-full p-2 border h-64 mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer" disabled={loading}>{loading?"Saving...": "Save"}</button>
    </div>
  );
}

export default page;
