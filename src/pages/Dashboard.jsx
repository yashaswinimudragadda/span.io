import TimelineNode from '../components/TimelineNode';
import ContactCard from '../components/ContactCard';
import DocumentVault from '../components/DocumentVault';
import TemplateDownloads from '../components/TemplateDownloads';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-slate-50/50 text-slate-900 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT TWO-THIRDS MAIN COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* 1. Profile Welcome Banner */}
          <div className="bg-juris-blue text-white rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5 z-10">
              <span className="w-fit bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-md">
                Verified Profile
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1">
                Welcome back, Ramesh Kumar
              </h1>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                Village: Bilaspur, Chhattisgarh • ID: #JA-8902
              </p>
            </div>
            <button className="bg-juris-teal hover:bg-opacity-95 text-white text-xs md:text-sm font-extrabold px-5 py-3 rounded-xl shadow-xs transition-all shrink-0 cursor-pointer active:scale-[0.99] z-10">
              Continue AI Chat
            </button>
          </div>

          {/* 2. Timeline Tracking Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xs flex flex-col">
            <div className="flex justify-between items-start gap-4 mb-6">
              <div>
                <h2 className="text-lg font-extrabold text-juris-blue tracking-tight">
                  Active Action Plan: Unpaid Wages Recovery
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Based on Payment of Wages Act, 1936 guidelines
                </p>
              </div>
              <span className="bg-teal-50 text-emerald-700 border border-teal-100 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                Step 2 of 4 In Progress
              </span>
            </div>

            {/* Vertical Connecting Track Line */}
            <div className="flex flex-col relative before:absolute before:left-3.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">              
              <TimelineNode 
                stepNumber="1" 
                title="Gather Evidence & Identity" 
                hindiTitle="साक्ष्य और पहचान पत्र एकत्रित करें"
                description="Collect pay slips, text messages, or contracts that prove employment status and pending dues."
                status="completed" 
              />

              <TimelineNode 
                stepNumber="2" 
                title="Draft Complaint / Notice" 
                hindiTitle="शिकायत या कानूनी नोटिस का मसौदा तैयार करें"
                description="Create a written draft detailing dates, employer name, and violation of payment agreements."
                status="active"
              >
                <button className="bg-slate-50 border border-slate-200 hover:bg-slate-100 text-juris-teal font-extrabold text-xs px-4 py-2 rounded-xl shrink-0 transition-all cursor-pointer">
                  Generate Template Draft
                </button>
              </TimelineNode>

              <TimelineNode 
                stepNumber="3" 
                title="Submit at Labor Commissioner Cell" 
                hindiTitle="श्रम आयुक्त कार्यालय (लेबर कमिश्नर सेल) में जमा करें"
                description="File the physical or digital document at the nearest regional department for official dispute lookup."
                status="pending" 
              />

              <TimelineNode 
                stepNumber="4" 
                title="Mediation & Conciliation" 
                hindiTitle="मध्यस्थता और सुलह वार्ता"
                description="Attend the formal conciliation meeting with a local Labor Officer for speedy settlement."
                status="pending" 
              />

            </div>
          </div>

          {/* 3. Document Vault Component Section */}
          <DocumentVault />

        </div>

        {/* RIGHT ONE-THIRD SIDEBAR COLUMN */}
        <div className="flex flex-col gap-6">
          
          {/* Legal Aid Help Numbers Block */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-2xs flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-black text-juris-blue tracking-tight">
                Free Legal Aid & Advisors
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5 leading-relaxed">
                Reach out to government-supported free legal aid networks in your state of Chhattisgarh.
              </p>
            </div>
            
            <ContactCard title="BILASPUR DISTRICT COURT AID CELL" location="Near District Secretariat, Bilaspur" phone="07752-224560" />
            <ContactCard title="STATE LEGAL SERVICES AUTHORITY" location="Vidhan Sabha Road, Raipur" phone="0771-2244510" />
          </div>

          {/* Document Templates Download Section */}
          <TemplateDownloads />

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}