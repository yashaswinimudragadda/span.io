
import { FaMicrophoneLines } from "react-icons/fa6";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";



export default function VoiceBanner() {
  return (
    <div className="w-full bg-white border-y border-slate-100 py-8 px-6 my-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Icon & Accessibility Message */}
        <div className="flex items-center gap-5 flex-1 max-w-3xl">
          {/* Circular Microphone Graphic */}
          <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-juris-teal text-2xl shrink-0 shadow-2xs">
            <FaMicrophoneLines className="text-juris-teal" />
          </div>
          
          {/* Text block */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-extrabold text-juris-blue tracking-tight">
              Cant read or write? Simply Speak.
            </h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
              Our AI assistant understands voice recordings in local dialects and reads responses back to you with clean TTS voice output.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Action Button */}
        <div className="shrink-0">
          <button className="bg-juris-blue hover:bg-opacity-95 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2.5 cursor-pointer active:scale-[0.98]">
            <span className="text-base"><PiSpeakerSimpleHighFill /></span>
            <span>Try Voice Guide</span>
          </button>
        </div>

      </div>
    </div>
  );
}