//import React from 'react';
// Import the phone icon from Font Awesome 6 pack in react-icons
import { FaPhoneFlip } from "react-icons/fa6";

export default function ContactCard({ title, location, phone }) {
  return (
    <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 flex flex-col gap-2">
      
      {/* Office Name / Header */}
      <h4 className="text-xs font-black text-slate-700 uppercase tracking-wide">
        {title}
      </h4>
      
      {/* Physical Address Description */}
      <p className="text-[11px] text-slate-400 font-medium">
        {location}
      </p>
      
      {/* Bottom Row: Phone Number & Clickable Action Button */}
      <div className="flex items-center justify-between mt-1 text-xs font-bold text-juris-teal">
        <span>{phone}</span>
        
        {/* Dynamic tel: link so users can click to call directly from a smartphone */}
        <a 
          href={`tel:${phone}`} 
          className="flex items-center gap-1 text-[11px] hover:underline cursor-pointer transition-all active:scale-95"
        >
          <FaPhoneFlip className="w-2.5 h-2.5" /> 
          <span>Call Now</span>
        </a>
      </div>

    </div>
  );
}