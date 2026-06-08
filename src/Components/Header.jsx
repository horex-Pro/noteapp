function Header() {
  return (
    <header className="flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-5 shadow-soft">
      <div>
        <h1 className="text-2xl font-bold">دفترچه یادداشت</h1>

        <p className="text-sm text-slate-500">مدیریت یادداشت ها</p>
      </div>

      <input
        placeholder="جستجو..."
        className="bg-slate-100 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </header>
  );
}

export default Header;
