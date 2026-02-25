import { Button } from "@/components/ui/button";

export default function ServiceCard({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "right" | "left";
}) {
  return (
    <div
      className={`
        bg-primary text-background
        rounded-2xl
        p-6 md:px-14 md:py-8
        max-w-md
        shadow-xl
        ${align === "left" ? "mr-auto text-right" : "ml-auto text-right"}
      `}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4  text-center">
        {title}
      </h3>

      <p className="text-sm md:text-base leading-relaxed mb-6    text-center">
        {description}
      </p>

      <div className="w-full flex justify-center">
        <Button
          variant="secondary"
          className="bg-background text-primary hover:bg-background/90 px-10 py-6"
        >
          استكشف الأعمال
        </Button>
      </div>
    </div>
  );
}
