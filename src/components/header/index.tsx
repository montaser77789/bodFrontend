import Image from "next/image";
import logo from "../../../public/Logo.png";
import LanguageSwitcher from "./language-switcher";
import Navbar from "./Navbar";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

const Header = async () => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0F172A]! grid-bg `}
    >
      <div className="container  flex justify-between items-center py-1">
        {/* Logo */}
        <div className="flex items-center ">
          <div className=" rounded-full p-2 shadow-md">
            <Image
              src={logo}
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </div>
        </div>

        <Navbar locale={locale} translations={translations} />
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
