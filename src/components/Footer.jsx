
import { FaBalanceScale } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full bg-juris-blue text-slate-300 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-700/50 pb-10">
        
        {/* COLUMN 1: Branding & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white text-juris-blue rounded-xl flex items-center justify-center font-black text-lg shadow-sm">
              <FaBalanceScale />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">JurisAI</span>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
            An AI-driven multilingual system working to bridge the justice gap in rural and semi-urban India. Guided by local laws and legal experts.
          </p>
          <p className="text-[11px] text-slate-500 font-semibold mt-2 tracking-wide">
            © 2026 JurisAI Civic-Tech India Project.
          </p>
        </div>

        {/* COLUMN 2: Emergency Assistance Numbers */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-black tracking-widest text-orange-400 uppercase">
            Emergency Assistance
          </h4>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            If you are experiencing domestic violence or physical danger, please seek urgent help immediately using our confidential channels.
          </p>
          
          {/* Helpline Badges Container */}
          <div className="flex flex-col gap-2.5 mt-2">
            {/* National Helpline Badge */}
            <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3 flex items-center justify-between text-xs font-semibold">
              <span className="text-white font-bold">National Helpline</span>
              <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-md font-extrabold text-[11px]">
                112 / 1091
              </span>
            </div>

            {/* Free Legal Aid Cell Badge */}
            <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3 flex items-center justify-between text-xs font-semibold">
              <span className="text-white font-bold">Free Legal Aid Cell</span>
              <span className="bg-teal-500/10 text-juris-teal border border-teal-500/20 px-2.5 py-0.5 rounded-md font-extrabold text-[11px]">
                15100
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN 3: Legal Disclaimer & Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-black tracking-widest text-emerald-400 uppercase">
            Legal Disclaimer
          </h4>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            JurisAI is an AI-powered legal assistance system designed to educate and guide rural communities. It does not constitute formal legal counsel. For complex court cases, please consult with a registered National Legal Services Authority (NALSA) advocate.
          </p>
          
          {/* Policy Links */}
          <div className="flex items-center gap-4 text-[11px] font-bold text-juris-teal mt-2">
            <a href="#privacy" className="hover:underline transition-all">
              Privacy Policy
            </a>
            <span className="text-slate-700 font-normal">|</span>
            <a href="#terms" className="hover:underline transition-all">
              Terms of Civic Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}