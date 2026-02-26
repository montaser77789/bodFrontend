interface ChatBubbleProps {
  text: string;
  from: "bot" | "user";
}

export default function ChatBubble({ text, from }: ChatBubbleProps) {
  const isUser = from === "user";

  return (
    <div
      className={`max-w-[75%] px-5 py-4 rounded-2xl text-sm leading-relaxed
        ${
          isUser
            ? "bg-[#58FFE3] text-[#0b1430] self-start"
            : "bg-white/10 text-white self-end"
        }
      `}
    >
      {text}
    </div>
  );
}