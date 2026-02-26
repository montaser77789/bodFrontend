"use client";
import TopicsTabs from "../../_components/TopicsTabs";

const Tabs = () => {
  return (
    <div>
      <TopicsTabs
        title="المواضيع الرائجة"
        topics={[
          { id: "ads", label: "الإعلانات المدفوعة", icon: "📢" },
          { id: "growth", label: "استراتيجيات النمو", icon: "📈" },
          { id: "ai", label: "الذكاء الاصطناعي", icon: "🤖" },
          { id: "case", label: "دراسات حالة", icon: "🚀" },
          { id: "market", label: "تحليلات السوق", icon: "📊" },
        ]}
        activeId="market"
        onChange={(id) => console.log(id)}
        direction="rtl"
      />
    </div>
  );
};

export default Tabs;
