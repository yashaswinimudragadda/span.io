import { useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import MessageBubble from '../components/MessageBubble';
import ChatInputBar from '../components/ChatInputBar';

export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      time: '1 min ago',
      text: 'Hello! I am your AI assistant. I can guide you through complaints, consumer rights, and cybercrime laws. What is your concern today?',
      hindiText: 'नमस्ते! मैं आपका एआई सहायक हूँ। मैं शिकायतों, उपभोक्ता अधिकारों और साइबर अपराध कानूनों में आपका मार्गदर्शन कर सकता हूँ। आज आपकी क्या समस्या है?',
      audioText: 'बोले गए निर्देश'
    }
  ]);

  const quickPills = [
    "Draft wage notice / वेतन नोटिस का ड्राफ्ट", 
    "Where is nearest legal cell? / नजदीकी कानूनी सहायता केंद्र कहाँ है?"
  ];

  const executeSend = (textToSend) => {
    if (!textToSend || !textToSend.trim()) return;

    const containsTranslation = textToSend.includes(" / ");

    // 1. Instantly append the User message (Renders with blue bg on right side)
    setMessages(prev => [
      ...prev, 
      {
        id: Date.now(),
        sender: 'user',
        time: 'Just Now',
        text: containsTranslation ? textToSend.split(" / ")[0] : textToSend,
        hindiText: containsTranslation 
          ? textToSend.split(" / ")[1] 
          : (() => {
              const lowerInput = textToSend.toLowerCase();
              if (lowerInput.includes("wage") || lowerInput.includes("pay") || lowerInput.includes("complain")) {
                return "मेरा नियोक्ता पिछले 2 महीनों से मेरा वेतन देने से इंकार कर रहा है। मैं शिकायत कैसे दर्ज करूँ?";
              }
              if (lowerInput.includes("legal") || lowerInput.includes("cell")) {
                return "नजदीकी कानूनी सहायता केंद्र कहाँ है?";
              }
              return "मैं इस समस्या के समाधान के लिए कानूनी सहायता चाहता हूँ।";
            })()
      }
    ]);
    
    setInputValue("");

    // 2. Schedule the Expert System response block (Renders with white bg on left side)
    setTimeout(() => {
      setMessages(currentMessages => [
        ...currentMessages, 
        {
          id: Date.now() + 1,
          sender: 'expert', 
          time: 'Just Now',
          text: 'Under the Payment of Wages Act, 1936, you have strong protections. Here are the 3 steps you should follow right now:',
          hindiText: 'वेतन भुगतान अधिनियम, 1936 के तहत आपके पास मजबूत अधिकार हैं। अभी इन 3 कदमों का पालन करें:',
          audioText: 'कानूनी सलाह दस्तावेज',
          hasChecklist: true 
        }
      ]);
    }, 450);
  };

  return (
    <div className="max-w-md mx-auto h-screen bg-slate-50/60 border-x border-slate-100 flex flex-col overflow-hidden shadow-2xl relative font-sans antialiased">
      
      {/* Top Header Navbar */}
      <header className="bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-3">
          <button className="text-slate-600 p-1 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
            <FaChevronLeft className="text-sm" />
          </button>
          <div>
            <h3 className="font-extrabold text-sm text-slate-800">JurisAI Assistant</h3>
            <p className="text-[10px] text-slate-400 font-bold tracking-wide">AI Legal Companion</p>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl transition-all shadow-3xs flex items-center gap-1 cursor-pointer active:scale-95">
          <span>EXIT</span>
        </button>
      </header>

      {/* Scrollable Message Box Track */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 no-scrollbar pb-32">
        
        {/* Info Box Guard Banner */}
        <div className="bg-teal-50/50 border border-teal-100 rounded-2xl p-3.5 text-xs text-slate-600 font-medium leading-relaxed shrink-0">
          Welcome! You can type in English or speak via the microphone button at the bottom. Rest assured, your data is highly protected.
        </div>

        {/* Message Loop Stream Map */}
        {messages.map((msg) => (
          <MessageBubble 
            key={msg.id}
            sender={msg.sender}
            time={msg.time}
            text={msg.text}
            hindiText={msg.hindiText}
            audioText={msg.audioText}
          >
            {/* Injecting Checklist Elements inside the frame when true */}
            {msg.hasChecklist && (
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-slate-100">
                
                {/* Step 1 */}
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-teal-50 text-juris-teal border border-teal-100 rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5">1</span>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800">Write Down Facts / तथ्य लिखें</h5>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Record exact times, location, and name of perpetrator or company.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-teal-50 text-juris-teal border border-teal-100 rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5">2</span>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800">Identify Witnesses / गवाहों की पहचान करें</h5>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Note down names and contact info of neighbors or coworkers who saw the event.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-teal-50 text-juris-teal border border-teal-100 rounded-full flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5">3</span>
                  <div>
                    <h5 className="text-xs font-extrabold text-slate-800">Draft of Application / आवेदन का मसौदा</h5>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">Write a plain paper letter with police station head name. JurisAI can write this draft for you below.</p>
                  </div>
                </div>
              </div>
            )}
          </MessageBubble>
        ))}
      </div>

      {/* Input Operations Interface Footer */}
      <div className="shrink-0 bg-white border-t border-slate-100">
        <ChatInputBar 
          value={inputValue}
          onChange={setInputValue}
          suggestions={quickPills} 
          onSuggestionClick={(pillText) => executeSend(pillText)}
          onSendSubmit={(typedText) => executeSend(typedText)}
        />
      </div>
      
    </div>
  );
}