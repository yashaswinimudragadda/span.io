export default function ServiceCard({ 
  icon, 
  title, 
  subTitle, // This handles your local translation text line dynamically
  description, 
  badge, 
  isUrgent, 
  hasLargeButton 
}) {
  return (
    <div 
      className={`relative bg-white border p-6 rounded-3xl shadow-xs transition-all duration-300 flex flex-col justify-between min-h-70
        ${isUrgent 
          ? 'border-orange-400 border-dashed bg-linear-to-b from-white to-orange-50/20' 
          : 'border-slate-100 hover:shadow-md'
        }`}
    >
      {/* Top Section: Icon, Headers, Description */}
      <div className="flex flex-col flex-1">
        
        {/* Top Row: Icon & Dynamic Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl font-semibold
            ${isUrgent 
              ? 'bg-red-50 text-red-500' 
              : 'bg-teal-50 text-teal-600'
            }`}
          >
            {icon}
          </div>
          
          {badge && (
            <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider
              ${isUrgent 
                ? 'bg-red-100 text-red-600' 
                : 'bg-amber-100 text-amber-800'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Headings */}
        <h3 className="text-lg font-extrabold text-juris-blue tracking-tight leading-snug">
          {title}
        </h3>
        
        <p className={`text-xs font-bold mt-0.5 mb-3 tracking-wide
          ${isUrgent ? 'text-red-500/90' : 'text-emerald-600/90'}`}
        >
          {subTitle}
        </p>
        
        {/* Main Text Content */}
        <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed flex-1">
          {description}
        </p>
      </div>

      {/* Bottom Section: Separated Action Footer */}
      <div className="mt-5 pt-4 border-t border-slate-100/80 w-full">
        {hasLargeButton ? (
          <button className="w-full bg-juris-orange hover:bg-opacity-95 text-white font-extrabold text-xs md:text-sm py-3 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]">
            <span>Open Helpline Directory</span>
            <span className="text-sm">↗</span>
          </button>
        ) : (
          <div className="flex items-center justify-between group cursor-pointer w-full">
            <span className="text-xs text-slate-400 font-semibold tracking-wide transition-colors group-hover:text-juris-blue">
              Tap to start guidelines
            </span>
            
            {/* The Circle Arrow Container - Centered Vertically via item-center */}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-300 group-hover:translate-x-1 shadow-xs shrink-0
              ${isUrgent ? 'bg-red-500' : 'bg-juris-blue'}`}
            >
              ➔
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
}