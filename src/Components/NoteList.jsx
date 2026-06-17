import NoteCard from "./NoteCard";

function NoteList({ notes, onSelect, selectedNote, onDelete }) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onSelect={() => onSelect(note)}
          isActive={selectedNote?.id === note.id}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;
