import linearEquations from "@/content/algebra1/linear-equations";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const data = {
    "linear-equations": linearEquations,
};

export default async function Page({params}) {
    const {slug} = await params;
    const topic = data[slug];
    if (!topic) return <div>Not found</div>;
console.log("slug:", params.slug);
    return (
        <div className="px-20 py-10">
            <h1 className="text-center text-2xl mb-10">{topic.title}</h1>
            {topic.sections.map((sec, i)=>(
                <div key={i}>
                    <h2>{sec.heading}</h2>
                    <BlockMath math={sec.content} />
                </div>
            ))}
        </div>
    )
}