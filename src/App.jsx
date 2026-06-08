import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import Editor from "./Components/Editor";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "ایده پروژه",
      content: "ساخت اپلیکیشن مدیریت یادداشت با React و Tailwind",
      category: "ایده",
      date: "۱۴۰۳/۰۹/۱۲",
      pinned: true,
    },
    {
      id: 2,
      title: "مطالب کلاس",
      content: "آموزش props و state در React",
      category: "آموزش",
      date: "۱۴۰۳/۰۹/۱۰",
      pinned: false,
    },
    {
      id: 3,
      title: "لیست کارها",
      content: "آماده سازی تمرین برای دانشجوها",
      category: "کار",
      date: "۱۴۰۳/۰۹/۰۹",
      pinned: false,
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(notes[0]);
  return (
    <div className="flex min-h-screen bg-linear-to-br from-slate-100 to-slate-200">
      <Sidebar />

      <main className="flex-1 p-6">
        <Header />

        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-4 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-5 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">یادداشت‌ها</h2>

              <button className="px-4 py-2 text-sm rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                + جدید
              </button>
            </div>

            <NoteList notes={notes} onSelect={setSelectedNote} selectedNote={selectedNote} />
          </div>

          <div className="col-span-8 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-soft">
            <Editor note={selectedNote} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
