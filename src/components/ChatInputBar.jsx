//import React from 'react';
import { BsKeyboard } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";

export default function ChatInputBar({ suggestions, onSuggestionClick, onSendSubmit, value, onChange }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(value.trim()) {
      onSendSubmit(value);
    }
  };

  return (
    <div className="w-full bg-slate-50 border-t border-slate-100 p-4 flex flex-col gap-3">
      
      {/* Context Action Suggestion Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {suggestions.map((pill, idx) => (
          <button
            key={idx}
            onClick={() => onSuggestionClick?.(pill)}
            className="bg-white border border-slate-200 text-slate-700 font-semibold text-xs px-3.5 py-2 rounded-xl whitespace-nowrap shadow-3xs hover:border-juris-blue hover:text-juris-blue transition-colors cursor-pointer"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Form Submission Track row */}
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-3xs">
          <input 
            type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type your legal question..." 
            className="flex-1 bg-transparent text-sm focus:outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          <BsKeyboard className="text-slate-400 text-lg cursor-pointer hover:text-slate-600" />
        </div>

        {/* Primary Audio Toggle button */}
        <button 
          type="button"
          className="w-11 h-11 bg-juris-blue text-white rounded-2xl flex items-center justify-center text-base shadow-sm hover:bg-opacity-95 transition-all active:scale-95 cursor-pointer"
        >
          <FaMicrophone />
        </button>
      </form>

      <p className="text-[10px] text-center text-slate-400 font-medium tracking-wide">
        Press the blue microphone to speak naturally
      </p>
    </div>
  );
}