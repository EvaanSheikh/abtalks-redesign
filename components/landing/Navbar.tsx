export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-white/10 z-50 px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-white font-bold text-lg">
        ABTalks
      </h1>

      {/* CTA */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition shadow-lg hover:shadow-blue-500/50">
        Start Challenge
      </button>

    </nav>
  );
}