"use client";

interface StepPaginationProps {
  current: number; // step الحالي (1-based)
  total: number; // إجمالي الخطوات
  onNext: () => void;
  onPrev: () => void;
  direction?: "rtl" | "ltr";
}

export default function StepPagination({
  current,
  total,
  onNext,
  onPrev,
  direction = "rtl",
}: StepPaginationProps) {
  const percentage = Math.round((current / total) * 100);
  const isRTL = direction === "rtl";

  return (
    <div
      dir={direction}
      className="
        w-full
        max-w-xl
        mx-auto
        px-4 py-3
        rounded-2xl
        bg-[#0b1430]/80
        backdrop-blur
        shadow-lg
        flex items-center gap-4
      "
    >
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={current <= 1}
        className="
          w-10 h-10
          rounded-xl
          border border-white/20
          flex items-center justify-center
          text-white
          disabled:opacity-40
          disabled:cursor-not-allowed
          transition
          hover:bg-white/10
        "
      >
        {isRTL ? "‹" : "›"}
      </button>

      {/* Progress */}
      <div className="flex-1 flex items-center gap-3">
        <div className="relative h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="
              absolute top-0 h-full rounded-full
              bg-[linear-gradient(90deg,#58FFE3,#8B5CF6)]
              transition-all duration-500
            "
            style={{
              width: `${percentage}%`,
              right: isRTL ? 0 : "auto",
              left: isRTL ? "auto" : 0,
            }}
          />
        </div>

        <span className="text-white text-sm font-bold w-[40px] text-center">
          {percentage}%
        </span>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={current >= total}
        className="
          w-10 h-10
          rounded-xl
          border border-white/20
          flex items-center justify-center
          text-white
          disabled:opacity-40
          disabled:cursor-not-allowed
          transition
          hover:bg-white/10
        "
      >
        {isRTL ? "›" : "‹"}
      </button>
    </div>
  );
}
