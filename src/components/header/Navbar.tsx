"use client";

import React, { useEffect, useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { Locale } from "@/i18n.config";
import { Translations } from "@/types";
import { Pages, Routes } from "../constants";
import Link from "../Link/Link";
import { FaTimes } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const Navbar = ({
  translations,
  locale,
}: {
  translations: Translations;
  locale: Locale;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const links = [
    {
      id: 1,
      title: translations.navbar.home,
      href: `/${locale}`,
      page: Pages.HOME,
    },
    {
      id: 2,
      title: translations.navbar.about,
      href: `/${locale}/${Pages.HOME}`,
      page: Pages.ABOUT,
    },
    {
      id: 3,
      title: translations.navbar.gallery,
      href: `/${locale}/${Pages.GALLERY}`,
      page: Pages.GALLERY,
    },
    {
      id: 4,
      title: translations.navbar.Whoarewe,
      href: `/${locale}/${Pages.WHOAREWE}`,
      page: Pages.WHOAREWE,
    },

    {
      id: 6,
      title: translations.navbar.contact,
      href: `/${locale}/${Pages.CONTACT}`,
      page: Pages.CONTACT,
    },
  ];

  const session = false;

  return (
    <>
      {/* ================= Desktop Navigation ================= */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`${buttonVariants({ variant: `${path === link.href ? "default" : "link"}` })} px-4 py-4 rounded-full! text-[20px]`}
              >
                {link.title}
              </Link>
            </li>
          ))}

          {session && (
            <li>
              <Link
                href={`/${locale}/${Routes.ADMIN}`}
                className={`${buttonVariants({ variant: `${path === `/${locale}/${Routes.ADMIN}` ? "default" : "link"}` })} px-4 py-2 rounded-full! text-[20px]`}
              >
                لوحة التحكم
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* ================= Mobile Toggle ================= */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className={`
            p-2 rounded-full
            bg-primary text-black
            shadow-md
            transition-transform duration-300
            ${isOpen ? "rotate-90" : "rotate-0"}
          `}
        >
          {isOpen ? <FaTimes size={22} /> : <PiDotsNineBold size={22} />}
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isOpen && (
        <div
          className={`
            md:hidden fixed left-0 right-0 top-0
            bg-background! text-primary
            shadow-xl rounded-b-2xl
            transition-all duration-300 transform
            ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
          `}
          style={{ zIndex: 1000 }}
        >
          <ul className="px-6 pt-6 space-y-3">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="
                  p-2 rounded-full
                  bg-primary text-black
                  transition-transform duration-300
                "
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* Links */}
            {links.map((link, index) => (
              <li
                key={link.id}
                style={{
                  opacity: isAnimating ? 1 : 0,
                  transform: isAnimating
                    ? "translateX(0)"
                    : locale === "ar"
                      ? "translateX(20px)"
                      : "translateX(-20px)",
                  transitionDelay: isAnimating ? `${index * 80}ms` : "0ms",
                }}
                className="transition-all duration-500"
              >
                <Link
                  href={link.href}
                  className={`${buttonVariants({ variant: `${path === link.href ? "default" : "link"}` })} px-4 py-4 rounded-full! text-[16px]`}
                  onClick={() => {
                    setIsAnimating(false);
                    setTimeout(() => setIsOpen(false), 300);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div
            className="px-6 pt-4 pb-6 transition-all duration-700"
            style={{
              opacity: isAnimating ? 1 : 0,
              transitionDelay: isAnimating
                ? `${links.length * 80 + 100}ms`
                : "0ms",
            }}
          >
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
