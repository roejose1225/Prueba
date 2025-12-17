export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-orange-500 text-xl">Tudelu</span>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#" className="px-2 py-1 rounded
    transition-colors duration-200
    hover:bg-orange-50 hover:text-orange-500">Home</a>
          <a href="#" className="px-2 py-1 rounded
    transition-colors duration-200
    hover:bg-orange-50 hover:text-orange-500">About</a>
          <a href="#" className="px-2 py-1 rounded
    transition-colors duration-200
    hover:bg-orange-50 hover:text-orange-500">Solutions</a>
          <a href="#" className="px-2 py-1 rounded
    transition-colors duration-200
    hover:bg-orange-50 hover:text-orange-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}