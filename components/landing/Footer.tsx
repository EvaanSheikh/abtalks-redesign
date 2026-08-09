export default function Footer() {
  return (
    <footer className="px-5 py-10 bg-[#09090B] text-[#A1A1AA] text-sm">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Brand */}
        <p className="text-white font-semibold">ABTalks</p>

        {/* Links */}
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Contact</span>
          <span>Twitter</span>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          © 2026 ABTalks. All rights reserved.
        </p>

      </div>

    </footer>
  );
}