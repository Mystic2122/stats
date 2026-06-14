import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notes from "../data/notes";
import MathMarkdown from "../components/MathMarkdown";

export default function NotePage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const note = notes.find((n) => n.slug === slug);

    useEffect(() => {
        if (!note) return;

        fetch(note.file)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch(() => setContent("Failed to load note."));
    }, [note]);
    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div>
          <div className="markdown">
            <MathMarkdown content={content} />
          </div>
          
        </div>
    );
}