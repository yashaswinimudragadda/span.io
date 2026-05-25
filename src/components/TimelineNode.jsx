//import React from 'react';

export default function TimelineNode({ stepNumber, title, hindiTitle, description, status, children }) {
  // Determine Boolean flags based on the status prop passed down
  const isCompleted = status === 'completed';
  const isActive = status === 'active';
  const isPending = status === 'pending';

  return (
    <div className={`flex gap-4 pb-8 relative last:pb-0 ${isPending ? 'opacity-50' : ''}`}>
      
      {/* LEFT ELEMENT: Dynamic Node Icon Indicators */}
      <div className="shrink-0 z-10 flex items-center justify-center">
        {isCompleted && (
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-xs">
            ✓
          </div>
        )}
        
        {isActive && (
          <div className="w-8 h-8 rounded-full bg-juris-blue text-white flex items-center justify-center text-xs font-black border-4 border-white ring-1 ring-juris-blue shadow-xs">
            {stepNumber}
          </div>
        )}
        
        {isPending && (
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 border border-slate-200 flex items-center justify-center text-xs font-bold">
            {stepNumber}
          </div>
        )}
      </div>

      {/* RIGHT ELEMENT: Heading Text Contents & Actions Box */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-0.5">
        <div className="flex flex-col gap-1">
          
          {/* Main Title Banner with dynamic color focus */}
          <h4 className={`text-sm font-extrabold tracking-tight ${isActive ? 'text-juris-blue' : 'text-slate-800'}`}>
            Step {stepNumber}: {title} 
            {hindiTitle && (
              <span className="text-xs font-bold text-juris-teal ml-1.5 opacity-90 tracking-normal">
                {hindiTitle}
              </span>
            )}
          </h4>
          
          {/* Sub-text Paragraph Guide */}
          <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        
        {/* Children Portal Placeholder: Renders your custom action buttons dynamically */}
        {children && (
          <div className="shrink-0 group-hover:scale-[1.01] transition-transform">
            {children}
          </div>
        )}
      </div>

    </div>
  );
}