import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { notes } from "../data/notes";
import MathMarkdown from "../components/MathMarkdown";
import ReactMarkdown from "react-markdown"


export default function NotePage() {
    
    const { slug } = useParams();
    console.log("slug:", slug);
    console.log("notes:", notes);
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
          <h1>{note.title}</h1>
          <div className="markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          
        </div>
    );
}