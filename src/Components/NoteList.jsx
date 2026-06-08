import NoteCard from "./NoteCard";

function NoteList({ notes }) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
