import { Link } from "react-router-dom";

export default function Notes() {
  const notes = [
    {
      id: "f-dist",
      name: "F-Distribution",
      slug: "f-distribution"
    }
  ];

  return (
    <div className="notes-container">
      <h2>Notes</h2>
      
      {notes.map((note) => (
        <Link key={note.id} to={`/notes/${note.slug}`}>
          {note.name}
        </Link>
      ))}
    </div>
  );
}