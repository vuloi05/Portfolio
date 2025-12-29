"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa6";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function ChatbotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Hello! I am Loi's AI assistant. Would you like to know more about Loi's experience or projects?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Giả lập gọi API (Bạn sẽ thay thế phần này bằng fetch tới API thực tế của bạn)
      // const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: input }) });
      // const data = await response.json();
      
      // Demo response giả lập độ trễ
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "bot",
          content: "Thank you for your question. Currently, this feature is being integrated with a real API by Loi. Please come back later!",
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20 h-[100dvh] flex flex-col">
      <div
        className="flex-1 flex flex-col p-4 md:p-10 border-[.5px] rounded-2xl border-zinc-600 bg-zinc-900/50 relative overflow-hidden"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <h1 className="text-3xl mb-5 text-center font-bold text-zinc-100">Chat with Loi&apos;s AI</h1>
        
        {/* Khu vực hiển thị tin nhắn */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar mb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user" ? "bg-zinc-700" : "bg-blue-600"
                }`}
              >
                {msg.role === "user" ? <FaUser /> : <FaRobot />}
              </div>
              <div
                className={`p-3 rounded-2xl max-w-[80%] md:max-w-[70%] text-sm md:text-base leading-relaxed ${
                  msg.role === "user"
                    ? "bg-zinc-700 text-white rounded-tr-none"
                    : "bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-tl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <FaRobot />
              </div>
              <div className="bg-zinc-800 border border-zinc-700 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Khu vực nhập liệu */}
        <form onSubmit={handleSend} className="relative mt-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about Loi..."
            className="w-full bg-zinc-800 border border-zinc-600 rounded-full py-4 pl-6 pr-14 text-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-zinc-700 hover:bg-zinc-600 rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}