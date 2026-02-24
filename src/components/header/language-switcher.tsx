"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Languages } from "../constants";
import sa from "../../../public/flags/sa.svg";
import uk from "../../../public/flags/uk.svg";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    const path =
      pathname?.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(path);
  };

  const isArabic = locale === Languages.ARABIC;

  return (
    <Button
      variant="ghost"
      onClick={() =>
        switchLanguage(isArabic ? Languages.ENGLISH : Languages.ARABIC)
      }
      aria-label="Toggle language"
      className="flex items-center gap-2 text-lg text-primary md:text-white
                 hover:text-white hover:bg-transparent transition-colors"
    >
      {/* Flag */}
      <Image
        width={20}
        height={20}
        priority
        src={isArabic ? uk.src : sa.src}
        alt={isArabic ? "English" : "العربيه"}
        className="w-5 h-5 rounded-sm object-cover"
      />

      {/* Text */}
      <span className="mt-0.5">{isArabic ? "English" : "العربية"}</span>
    </Button>
  );
};

export default LanguageSwitcher;
