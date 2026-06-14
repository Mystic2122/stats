import { Link } from "react-router-dom";
import notes from "../data/notes";

export default function Notes() {
  return (
    <div className="notes-container">
      <h2>Notes</h2>
      {notes.map((note) => (
        <Link key={note.id} to={`/notes/${note.slug}`}>
          {note.title}
        </Link>
      ))}
    </div>
  );
}