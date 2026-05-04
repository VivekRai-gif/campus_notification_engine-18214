import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight, Bot } from 'lucide-react';

const quickReplies = [
  'When is the next placement drive?',
  'Show upcoming events',
  'Exam schedule this semester?',
  'How to register for hackathon?',
];

const botResponses = {
  'When is the next placement drive?': 'The next placement drive is by **Microsoft** on **May 22nd** at the Placement Cell, Block A. Make sure your resume is updated on the portal!',
  'Show upcoming events': 'Here are the top upcoming events:\n• **TechX Hackathon** — May 20\n• **Web3 Talk** — May 15\n• **Cultural Fest Euphoria** — May 28\n\nVisit the Events page for full details.',
  'Exam schedule this semester?': 'Mid-term exams begin on **May 18th**. The detailed schedule has been published on the academics portal. Check your personalized timetable.',
  'How to register for hackathon?': 'Head to the **Events** page, find "TechX Hackathon 2026" and click **RSVP Now**. Teams of 2-4 are allowed. Registration closes May 19.',
};

const defaultResponse = "Thanks for your question! I'm CampusBuddy AI — I can help with events, placements, exams, and campus info. Try one of the quick replies below, or visit the Dashboard for real-time updates.";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    setShowWelcome(false);
    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = botResponses[msg] || defaultResponse;
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[90] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
          isOpen 
            ? 'bg-[#1c1c1c] rotate-0' 
            : 'bg-gradient-to-br from-purple-600 to-indigo-500 shadow-purple-500/30 animate-bounce-slow'
        }`}
        style={{ animationDuration: '3s' }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white fill-white/20" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-[100px] right-6 z-[90] w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-border overflow-hidden flex flex-col animate-fade-in-up"
          style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-500 px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Chat with</h3>
              <h2 className="text-white font-serif text-xl -mt-0.5">CampusBuddy AI</h2>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/70 text-xs font-medium">Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF9F6]">
            {showWelcome && messages.length === 0 && (
              <div className="flex flex-col items-center text-center py-6 px-4">
                {/* Avatar illustration area */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-4 ring-4 ring-white shadow-lg">
                  <Bot className="w-14 h-14 text-purple-600" />
                </div>
                <h3 className="font-serif text-2xl text-[#1c1c1c] mb-1">Hi there! 👋</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  I'm your campus assistant. Ask me about events, placements, exams, or anything campus-related.
                </p>
                <button
                  onClick={() => { setShowWelcome(false); }}
                  className="btn-expand bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20"
                >
                  Let's Chat! <ArrowRight className="w-4 h-4 btn-arrow" />
                </button>
              </div>
            )}

            {!showWelcome && messages.length === 0 && (
              <div className="space-y-2 py-2">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-1">Quick questions:</p>
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="w-full text-left px-4 py-3 bg-white border border-border rounded-xl text-sm text-[#1c1c1c] hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 hover:translate-x-1"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-br-md'
                    : 'bg-white border border-border text-[#1c1c1c] rounded-bl-md shadow-sm'
                }`}>
                  {msg.text.split('\n').map((line, j) => (
                    <span key={j}>
                      {line.split(/\*\*(.*?)\*\*/).map((part, k) =>
                        k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                      )}
                      {j < msg.text.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

            {/* Quick replies after conversation starts */}
            {messages.length > 0 && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.filter(q => !messages.some(m => m.text === q)).slice(0, 2).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-xs font-medium text-purple-600 hover:bg-purple-100 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          {!showWelcome && (
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="p-3 border-t border-border bg-white flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#F5F2EB] border border-transparent rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
