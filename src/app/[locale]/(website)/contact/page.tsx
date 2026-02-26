"use client";

import { useEffect, useRef, useState } from "react";
import ChatBubble from "./_components/ChatBubble";

export const chatScript = [
  "مرحباً بك 👋 دعنا نبدأ، ما اسمك بالكامل؟",
  "ممتاز! الآن، ما هو رقم جوالك للتواصل معك؟",
  "رائع! وما هو بريدك الإلكتروني؟",
  "ممتاز ✨ ما نوع الخدمة التي تبحث عنها؟",
  "أخيراً، هل لديك أي تفاصيل إضافية عن مشروعك؟",
];
interface Message {
  id: number;
  text: string;
  from: "bot" | "user";
}

export default function AboutChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: chatScript[0], from: "bot" },
  ]);

  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);



  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      from: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot reply
    if (step < chatScript.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: chatScript[step],
            from: "bot",
          },
        ]);
        setStep(step + 1);
      }, 800);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            text: "🎉 شكراً لك! تم استلام بياناتك وسنتواصل معك قريباً.",
            from: "bot",
          },
        ]);
      }, 800);
    }
  };

  return (
    <section className="relative  min-h-[calc()100vh-200px] grid-bg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b1430]" />
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Content */}
      <div className="relative flex flex-col h-[calc(100vh-100px)]">
        {/* Header */}
        <div className="py-6 text-center">
          <h1 className="text-2xl font-bold text-white">تسجيل جديد ✨</h1>
          <p className="text-[#58FFE3] text-sm mt-1">
            دعنا نتعرف عليك وعلى مشروعك
          </p>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} text={msg.text} from={msg.from} />
            ))}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input (Fixed Bottom) */}
        <div className="sticky bottom-0  mb-6 ">
          <div className="max-w-3xl mx-auto bg-[#22284580] flex gap-3 border border-[#7A7A7A] p-4 rounded-2xl">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="
                flex-1
                rounded-xl
                bg-white/10
                px-4 py-3
                text-white
                outline-none
                placeholder:text-white/40
              "
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="
                w-12 h-12
                rounded-xl
                bg-[#58FFE3]
                text-[#0b1430]
                font-bold
              "
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
