import ServiceCard from './ServiceCard';
import { AiOutlineFileProtect } from "react-icons/ai"; 
import { LuFilePenLine } from "react-icons/lu";
import { GrSystem } from "react-icons/gr";
import { SiCountingworkspro } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

export default function ServicesGrid() {
  // 1. Define the servicesData array here with Hindi updates
  const servicesData = [
    {
      icon: <AiOutlineFileProtect className="text-juris-teal" />,
      title: "Legal Rights Awareness",
      hindiTitle: "कानूनी अधिकारों के प्रति जागरूकता",
      description: "Learn about your basic civil rights, police detention guidelines, land tenancy laws, and consumer rights under Indian Penal Code.",
      badge: "Popular"
    },
    {
      icon: <LuFilePenLine className="text-juris-teal" />,
      title: "Complaint Filing Guidance",
      hindiTitle: "शिकायत दर्ज करने का मार्गदर्शन",
      description: "Step-by-step tutorials on how to write and file a First Information Report (FIR) or general grievance document in your local district.",
    },
    {
      icon: <GrSystem className="text-juris-teal" />,
      title: "Cybercrime Reporting Support",
      hindiTitle: "साइबर अपराध रिपोर्टिंग सहायता",
      description: "Protect yourself from online fraud, mobile payment scams, and fake lottery schemes. Draft immediate protection and report requests.",
    },
    {
      icon: <SiCountingworkspro className="text-juris-teal" />,
      title: "Consumer Protection",
      hindiTitle: "उपभोक्ता संरक्षण अधिकार",
      description: "Guides for resolving issues with fake/damaged products, unfair hospital billing, and poor utilities or electrical department services.",
    },
    {
      icon: <FaHeart className="text-red-600" />,
      title: "Domestic Violence Help",
      hindiTitle: "घरेलू हिंसा निवारण सहायता",
      description: "Completely secure, strictly confidential guide to legal resources, protection shelters, and immediate support circles in rural zones.",
      badge: "Confidential & Safe",
      isUrgent: true
    },
    {
      icon: <FaPhoneVolume className="text-juris-teal" />,
      title: "Immediate Helpline Directory",
      hindiTitle: "आपातकालीन हेल्पलाइन नंबर",
      description: "Instantly find verified national and state contact numbers for free local legal aid, police command centers, and district magistrates.",
      isUrgent: true,
      hasLargeButton: true
    }
  ];

  return (
    <section className="w-full px-6 py-16 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-juris-blue">
          How JurisAI Helps You Every Day
        </h2>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
          Select one of the major assistance categories below to get step-by-step guidance, templates, and helpful references instantly.
        </p>
      </div>

      {/* 2. The Loop that maps over servicesData */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            subTitle={service.hindiTitle} // Mapped to subTitle to match your layout requirements
            description={service.description}
            badge={service.badge}
            isUrgent={service.isUrgent}
            hasLargeButton={service.hasLargeButton}
          />
        ))}
      </div>
    </section>
  );
}