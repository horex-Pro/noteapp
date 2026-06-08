function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold">
            N
          </div>

          <div>
            <h2 className="font-bold">NoteX</h2>

            <p className="text-xs text-slate-400">React Notes</p>
          </div>
        </div>

        <nav className="space-y-2">
          <a className="block px-4 py-3 rounded-xl bg-slate-800">
            📝 همه یادداشت‌ها
          </a>

          <a className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300">
            📌 سنجاق شده
          </a>

          <a className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300">
            🗂 دسته بندی
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
