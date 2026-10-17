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
    { role: "assistant", content: "Hi there! 👋 I am the Amazon Fast Services AI assistant. How can I help you scale your brand today?" }
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

  const handleSend = async (e?: React.FormEvent, textOverride?: string) => {
    e?.preventDefault();
    const textToSend = textOverride || input.trim();
    if (!textToSend || isLoading) return;

    if (!textOverride) setInput("");
    
    // Add user message to state
    const newMessages: Message[] = [...messages, { role: "user", content: textToSend }];
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
      setMessages([...newMessages, { role: "assistant", content: "Sorry, an error occurred. Please contact us on WhatsApp at +92 314 2573033." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3.5 sm:p-4 bg-[#ff6b35] hover:bg-[#e85c2b] active:scale-95 text-white rounded-full shadow-[0_10px_30px_rgba(255,107,53,0.4)] transition-all duration-300 hover:scale-105 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100 pointer-events-auto"
        }`}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Chat Window & Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop (tap to close on small screens) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 sm:hidden"
            />

            {/* Chatbot Container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[410px] h-[88dvh] sm:h-[580px] max-h-[100dvh] sm:max-h-[85vh] flex flex-col bg-[#111111]/98 backdrop-blur-2xl border-t sm:border border-white/10 rounded-t-[26px] sm:rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col border-b border-white/10 bg-white/[0.03]">
                {/* Mobile Drag Indicator Bar */}
                <div className="pt-2 pb-1 sm:hidden flex justify-center">
                  <div className="w-10 h-1 bg-white/20 rounded-full" />
                </div>

                <div className="flex items-center justify-between px-4 py-3 sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-[#ff6b35] to-[#ff8c5a] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base leading-tight truncate">
                        Amazon Fast Services AI
                      </h3>
                      <p className="text-[#ff6b35] text-[11px] sm:text-xs flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online • Instant replies
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Chat"
                    className="p-1.5 sm:p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full active:scale-95 transition"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto px-3.5 py-4 sm:p-5 flex flex-col gap-3.5 scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[13px] sm:text-sm leading-relaxed whitespace-pre-wrap break-words ${
                        msg.role === "user"
                          ? "bg-[#ff6b35] text-white rounded-tr-sm shadow-md"
                          : "bg-white/10 text-white/95 rounded-tl-sm border border-white/5"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Quick Action Chips (Only show at the start) */}
                {messages.length === 1 && !isLoading && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1">
                    {[
                      "What are your prices?",
                      "How does US LLC Formation work?",
                      "Do you manage PPC?",
                    ].map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleSend(undefined, chip)}
                        className="text-[11px] sm:text-xs bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white/80 px-2.5 py-1.5 rounded-full transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"></span>
                      <span
                        className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick WhatsApp Support Link */}
              <div className="px-4 py-2 border-t border-white/5 bg-white/[0.02] flex justify-center shrink-0">
                <Link
                  href="https://wa.me/923142573033"
                  target="_blank"
                  className="text-[11px] sm:text-xs text-white/60 hover:text-[#ff6b35] transition flex items-center gap-1.5 py-0.5"
                >
                  Need human help? Chat on WhatsApp &rarr;
                </Link>
              </div>

              {/* Input Area (Safe padding for iPhone Home bar) */}
              <form
                onSubmit={handleSend}
                className="p-3 sm:p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-2 items-center shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-base sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#ff6b35] transition"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff6b35] text-white flex items-center justify-center shrink-0 hover:bg-[#e85c2b] active:scale-95 disabled:opacity-40 disabled:hover:bg-[#ff6b35] transition shadow-md"
                >
                  <Send className="w-4 h-4 sm:w-4.5 sm:h-4.5 ml-0.5" />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
