"use client";

import { useState } from "react";
import ChatBubble from "./ChatBubble";
export const aboutChatQuestions = [
  {
    id: "name",
    question: "مرحباً بك 👋 دعنا نبدأ، ما اسمك بالكامل؟",
    placeholder: "اكتب اسمك هنا",
    type: "text",
  },
  {
    id: "phone",
    question: "ممتاز! ما هو رقم جوالك للتواصل معك؟",
    placeholder: "05xxxxxxxx",
    type: "tel",
  },
  {
    id: "email",
    question: "رائع! ما هو بريدك الإلكتروني؟",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    id: "service",
    question: "أخيراً، ما نوع الخدمة التي تبحث عنها؟",
    placeholder: "اختر نوع الخدمة",
    type: "select",
    options: [
      "الهوية البصرية",
      "التسويق الرقمي",
      "المواقع والتطبيقات",
      "الذكاء الاصطناعي",
    ],
  },
];
export default function AboutChatFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");

  const currentQuestion = aboutChatQuestions[step];

  const handleSend = () => {
    if (!input) return;

    setAnswers({
      ...answers,
      [currentQuestion.id]: input,
    });

    setInput("");
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col gap-6">

 
      {/* Input */}
      {currentQuestion && (
        <div className="flex gap-3 mt-4">
          <input
            type={currentQuestion.type}
            placeholder={currentQuestion.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="
              flex-1
              rounded-xl
              bg-white/10
              px-4 py-3
              text-white
              outline-none
              placeholder:text-white/40
            "
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
      )}

  
    </div>
  );
}