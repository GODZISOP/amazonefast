"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there! 👋 I am the AmazonFast AI assistant. How can I help you scale your brand today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to state
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      
      if (response.ok && data.reply) {
        setMessages([...newMessages, { role: "assistant", content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: "assistant", content: "Sorry, I am having trouble connecting to the server. Please connect with us directly on WhatsApp!" }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, an error occurred. Please contact us on WhatsApp at +92 332 2568950." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-[#ff6b35] hover:bg-[#e85c2b] text-white rounded-full shadow-2xl transition-transform hover:scale-105 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col bg-[#111111]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff6b35] rounded-full flex items-center justify-center text-white">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight">AmazonFast AI</h3>
                  <p className="text-white/50 text-xs">Replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition">
                <X size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-[#ff6b35] text-white rounded-tr-sm' 
                      : 'bg-white/10 text-white/90 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-4 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick WhatsApp Link if needed */}
            <div className="px-5 py-2 border-t border-white/5 bg-white/5 flex justify-center">
              <Link href="https://wa.me/923322568950" target="_blank" className="text-xs text-white/60 hover:text-[#ff6b35] transition flex items-center gap-1">
                Chat with a human on WhatsApp &rarr;
              </Link>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#ff6b35] text-white flex items-center justify-center shrink-0 hover:bg-[#e85c2b] disabled:opacity-50 disabled:hover:bg-[#ff6b35] transition"
              >
                <Send size={18} className="ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
