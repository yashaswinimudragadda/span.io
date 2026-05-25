import { BsChatDots } from "react-icons/bs";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";



export default function HeroSection() {
  return (
    <section className="w-full bg-white px-6 py-12 md:py-20 max-w-7xl mx-auto rounded-3xl mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Heading & Action CTA Blocks (Spans 7 columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Government Aligned Badge */}
          <div className="flex">
            <span className="bg-juris-light-teal text-juris-teal font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-juris-teal rounded-full animate-pulse"></span>
              Government-Aligned Civic Assistance • भारत सरकार द्वारा मान्यता प्राप्त
            </span>
          </div>

          {/* Main Typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-juris-blue leading-tight">
            Your Legal Rights, <br />
            <span className="text-juris-teal">Simplified in Your Language.</span>
          </h1>
          
          <p className="text-slate-600 font-medium tracking-wide text-sm md:text-base leading-relaxed max-w-xl">
            अपने अधिकारों के प्रति जागरूक बनें। JurisAI is a safe, completely free, and expert-backed assistant. 
            It explains Indian law, cybercrime support, and helps you file complaints without legal jargon.
          </p>

          {/* Core App Actions Container */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm max-w-xl mt-4">
            <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-4">
              Choose an option to start
            </p>
            
            {/* The Two Big Feature Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Button 1: Chat Mode */}
              <button className="bg-juris-teal hover:bg-opacity-90 text-white text-left p-4 rounded-xl flex flex-col justify-between transition-all shadow-sm group">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-lg mb-4">
                  <BsChatDots className="text-juris-teal" />
                </div>

                <div>
                  <h4 className="font-bold text-sm tracking-wide uppercase">Ask a Question</h4>
                  <p className="text-xs text-teal-100 mt-0.5 group-hover:translate-x-1 transition-transform">
                    Start Chatting Online →
                  </p>
                </div>
              </button>

              {/* Button 2: Voice Mode */}
              <button className="bg-juris-blue hover:bg-opacity-90 text-white text-left p-4 rounded-xl flex flex-col justify-between transition-all shadow-sm group">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-lg mb-4">
                  <MdOutlineHeadsetMic className="text-juris-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide uppercase">Voice Assistant</h4>
                  <p className="text-xs text-slate-300 mt-0.5 group-hover:translate-x-1 transition-transform">
                    बोलकर जानकारी पाएं →
                  </p>
                </div>
              </button>

            </div>
            
            <p className="text-[11px] text-slate-400 font-medium text-center mt-4">
              <AiOutlineFileProtect className="inline-block mr-2" />
              100% Secure, private connection under Indian Data Protection acts.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: App Features Checklist Panel (Spans 5 columns on large screens) */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-md relative overflow-hidden">
            
            {/* Active Status Ribbon */}
            <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider">
              Active Aid
            </span>

            {/* Profile Summary Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-400">
                <FaBalanceScale />
              </div>
              <div>
                <h3 className="font-bold text-lg text-juris-blue">Justice For All Communities</h3>
                <p className="text-xs text-slate-400 font-medium">Rural & Semi-Urban focused legal literacy</p>
              </div>
            </div>

            {/* Bullet List Containers */}
            <div className="flex flex-col gap-3">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-medium text-slate-700 flex items-center gap-3">
                <span className="text-juris-teal text-base"><BsClockHistory className="text-juris-teal"/></span>
                <span>Text-to-Speech enables listening in local dialects</span>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-medium text-slate-700 flex items-center gap-3">
                <span className="text-juris-teal text-base"><BsClockHistory className="text-juris-teal"/></span>
                <span>Provides clean, structured 1-2-3 templates for filings</span>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-medium text-slate-700 flex items-center gap-3">
                <span className="text-juris-teal text-base"><BsClockHistory className="text-juris-teal"/></span>
                <span>Direct phone directories for local legal help cells</span>
              </div>
            </div>

            {/* Language Footer Row */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-cyan-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">अ</span>
                <span className="w-7 h-7 rounded-full bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">क</span>
                <span className="w-7 h-7 rounded-full bg-amber-600 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white">म</span>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                Supported in 12 Indian Languages
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}