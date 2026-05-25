import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 border-b border-slate-100 max-w-7xl mx-auto relative z-50">
      <div className="flex items-center justify-between w-full">
        
        {/* Left side: Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-juris-blue rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
            J
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-juris-blue">JurisAI</span>
              <span className="bg-juris-light-teal text-juris-teal text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0">
                Civic-Tech India
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wide font-medium">
              AI Legal Companion • आपका लीगल असिस्टेंट
            </p>
          </div>
        </div>

        {/* Desktop Navigation (Hidden on mobile, flex on desktop 'md' screens up) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 flex items-center gap-1 cursor-pointer hover:bg-slate-100 transition-colors">
            <span>English / हिंदी</span>
            <span className="text-xs text-slate-400">▼</span>
          </div>

          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-juris-blue transition-colors">
            About Us
          </a>

          <button className="bg-juris-blue text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-opacity-90 transition-all shadow-sm cursor-pointer">
            Get Help
          </button>
        </div>

        {/* Mobile Hamburger Trigger (Visible on mobile, hidden on 'md' screens up) */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-juris-blue text-2xl focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer (Controlled by isOpen state) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg px-6 py-5 flex flex-col gap-4 md:hidden animate-linear-to-b duration-200 z-40">
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 flex items-center justify-between cursor-pointer">
            <span>English / हिंदी</span>
            <span className="text-xs text-slate-400">▼</span>
          </div>

          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-slate-600 hover:text-juris-blue py-2 border-b border-slate-50"
          >
            About Us
          </a>

          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-juris-blue text-white font-bold text-sm py-3 rounded-xl shadow-sm cursor-pointer text-center mt-2"
          >
            Get Help
          </button>
        </div>
      )}

    </nav>
  );
}