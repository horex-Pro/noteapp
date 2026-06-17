import { useState } from "react";

function Editor({ note, onSave }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      content,
    };

    onSave(updatedNote);
  };
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs text-slate-400">مشاهده یادداشت</span>

          <h2 className="text-3xl font-bold mt-1">{note.title}</h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 text-sm"
          >
            ذخیره
          </button>

          <button className="px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 text-sm">
            حذف
          </button>
        </div>
      </div>

      <div className="text-sm text-slate-400 mb-6">
        دسته بندی: {note.category} | تاریخ: {note.date}
      </div>

      <div className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-slate-100 rounded-xl p-4 outline-none"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-slate-100 rounded-xl p-4 min-h-55 outline-none resize-none"
        />
      </div>
    </div>
  );
}

export default Editor;
