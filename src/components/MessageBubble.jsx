import { BsRobot } from "react-icons/bs";
import { MdGavel } from "react-icons/md";
import { HiVolumeUp } from "react-icons/hi";

export default function MessageBubble({ sender, time, text, hindiText, audioText, children }) {
  const normalizedSender = sender?.toLowerCase();
  const isBot = normalizedSender === 'bot';
  const isUser = normalizedSender === 'user';
  const isExpert = normalizedSender === 'expert';

  return (
    <div className={`flex flex-col mb-2 w-full ${isUser ? 'items-end' : 'items-start'}`}>
      
      {/* Sender Meta Info */}
      <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-slate-400">
        {!isUser && (
          <span className="text-sm text-slate-500">
            {isBot ? <BsRobot /> : <MdGavel className="text-juris-teal" />}
          </span>
        )}
        <span>
          {isBot 
            ? "JurisAI Legal Bot" 
            : isExpert 
              ? "JurisAI Expert Advice" 
              : "You (आप)"}
        </span>
        <span>•</span>
        <span className="font-medium text-[11px]">{time}</span>
      </div>

      {/* Message Bubble Frame */}
      <div className={`max-w-[85%] rounded-2xl p-4 shadow-2xs ${
        isUser 
          ? 'bg-juris-blue text-white rounded-tr-none font-medium' 
          : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
      }`}>
        
        {/* Main English Reply Text */}
        <p className="text-sm leading-relaxed whitespace-pre-line font-bold text-slate-900">{text}</p>

        {/* The New Sub-Reply text (Hindi translation paragraph) */}
        {hindiText && (
          <p className={`text-xs leading-relaxed mt-2 pt-2 border-t border-dashed ${
            isUser ? 'border-blue-400/30 text-blue-100' : 'border-slate-100 text-slate-600'
          }`}>
            {hindiText}
          </p>
        )}

        {/* Nested Checklist Block (if present) */}
        {children}

        {/* Interactive Audio Player Action Button */}
        {!isUser && audioText && (
          <button className="mt-4 flex items-center gap-2 bg-teal-50 border border-teal-100 text-juris-teal text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-teal-100/70 transition-all cursor-pointer">
            <HiVolumeUp className="text-base" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wide leading-none">Listen (बोलकर सुनें)</p>
              <p className="text-[8px] text-slate-400 font-medium mt-0.5 uppercase tracking-wider leading-none">
                VERIFIED LEGAL GUIDANCE
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}