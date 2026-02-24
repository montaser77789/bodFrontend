import Image from "next/image";
import logotitle from "../../../public/LogoTitle.png";
export default function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center   gap-3 text-white">
      <div
        aria-label=""
        className={`
                w-[40px] h-[40px]
                md:w-[50px] md:h-[50px]
                rounded-full
                bg-[#58FFE3]
                flex items-center justify-center
            `}
      >
        <Image
          src={logotitle}
          alt="Logo"
          width={25}
          height={25}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-xl md:text-2xl font-bold ">{title}</h1>
        <h2 className="text-md md:text-lg font-semibold ">{subtitle}</h2>
      </div>
    </div>
  );
}
