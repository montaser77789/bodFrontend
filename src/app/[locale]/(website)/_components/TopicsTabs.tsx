"use client";

import { Button } from "@/components/ui/button";

interface TopicItem {
  id: string;
  label: string;
  icon?: string;
}

interface TopicsTabsProps {
  title?: string;
  topics: TopicItem[];
  activeId: string;
  onChange: (id: string) => void;
  direction?: "rtl" | "ltr";
}

export default function TopicsTabs({
  title,
  topics,
  activeId,
  onChange,
  direction = "rtl",
}: TopicsTabsProps) {
  return (
    <div dir={direction} className="w-full py-6">
      {/* Header */}
      {/* Header */}
      {title && (
        <div className="flex items-center gap-6 mb-6">
          {/* Title */}
          <h3 className="text-white font-bold text-[32px] whitespace-nowrap">
            {title}
          </h3>

          {/* Gradient Line */}
          <div
            className="
        h-[2px]
        flex-1
        bg-[linear-gradient(90deg,#182440_8.17%,#58FFE3_100%)]
      "
          />
        </div>
      )}

      {/* Tabs */}
      <div className="mt-3 flex gap-2 overflow-x-auto py-2">
        {topics.map((topic) => {
          const isActive = topic.id === activeId;

          return (
            <Button
              key={topic.id}
              onClick={() => onChange(topic.id)}
              className={`               
                rounded-[8px]
                whitespace-nowrap
                text-right
                py-5
                px-6
                font-bold
                ${isActive ? "bg-primary" : "bg-transparent text-primary"}  
            `}
              variant={`${isActive ? "default" : "outline"}`}
            >
              {topic.icon && <span className="text-xl">{topic.icon}</span>}
              {topic.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
