import NoteCard from "./NoteCard";

function NoteList({ notes, onSelect, selectedNote }) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onSelect={() => onSelect(note)}
          isActive={selectedNote?.id === note.id}
        />
      ))}
    </div>
  );
}

export default NoteList;
