import { FaRegFilePdf } from "react-icons/fa6";

export default function DocumentVault() {
  const documents = [
    { name: "Notice_UnpaidWages_Ramesh.pdf", meta: "Draft • 12 KB • Hindi & English", isUrgent: false },
    { name: "FIR_Draft_WalletTheft.pdf", meta: "Archived • Sept 2024", isUrgent: false }
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xs">
      <div className="mb-4">
        <h2 className="text-lg font-extrabold text-juris-blue tracking-tight">
          My Generated Drafts & Legal Files
        </h2>
        <p className="text-xs text-slate-400 font-medium">
          Generated safely by JurisAI. Ready to print or share with local Panchayats.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {documents.map((doc, idx) => (
          <div 
            key={idx} 
            className="border border-slate-100 bg-slate-50/40 rounded-2xl p-4 flex items-center gap-4 hover:border-slate-200 transition-all cursor-pointer group"
          >
            {/* Soft background file icon badge */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
              idx === 0 ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
            }`}>
              <FaRegFilePdf />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-extrabold text-slate-800 truncate group-hover:text-juris-blue transition-colors">
                {doc.name}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">{doc.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}