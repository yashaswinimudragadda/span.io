import { MdOutlineFileDownload } from "react-icons/md";

export default function TemplateDownloads() {
  const templates = [
    { title: 'Police General Diary (GD) Application', desc: 'Bilingual • Word format' },
    { title: 'Consumer Forum Claim Letter', desc: 'English / Hindi • PDF format' },
    { title: 'Land Boundary Dispute Complaint', desc: 'Regional • Word format' }
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-black text-juris-blue tracking-tight">
          Download Simplified Templates
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-0.5 leading-relaxed">
          Pre-approved simple letter templates for civic and police requests.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {templates.map((tmpl, idx) => (
          <div 
            key={idx} 
            className="border border-slate-100 rounded-2xl p-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-all cursor-pointer group"
          >
            <div className="flex flex-col pr-2">
              <span className="text-xs font-extrabold text-slate-700 group-hover:text-juris-blue transition-colors">
                {tmpl.title}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">{tmpl.desc}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-teal-50 text-juris-teal flex items-center justify-center shrink-0 group-hover:bg-juris-teal group-hover:text-white transition-all">
              <MdOutlineFileDownload className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}