function NoteCard({ note, onSelect, isActive }) {
  return (
    <div
      onClick={onSelect}
      className={`
group rounded-2xl p-4 border transition cursor-pointer
${
  isActive
    ? "bg-indigo-50 border-indigo-400 shadow-soft"
    : "bg-white border-slate-100 shadow-sm hover:shadow-soft"
}
`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
          {note.category}
        </span>

        {note.pinned && <span>📌</span>}
      </div>

      <h3 className="font-semibold mb-1 group-hover:text-indigo-600 transition">
        {note.title}
      </h3>

      <p className="text-sm text-slate-500 line-clamp-2">{note.content}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-slate-400">{note.date}</span>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <button className="text-xs px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
            ویرایش
          </button>

          <button className="text-xs px-3 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
