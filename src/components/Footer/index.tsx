"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../../../public/LogoTitle.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#3FFFE0]" />

      <div className="relative containe  py-16">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-[#0b1430]">
          {/* Column 1 — Logo + About */}
          <div className="order-1 col-span-2 md:col-span-1">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={120}
              className="object-contain mb-4"
              priority
            />
            <p className="text-sm leading-relaxed font-bold">
              وكالة تسويق رقمي سعودية متخصصة في الحلول الذكية لتحقيق نمو أسرع
              وأذكى عبر استراتيجيات قائمة على البيانات وتنفيذ احترافي.
            </p>
          </div>

          {/* Column 2 — Knowledge Center */}
          <div className="order-2">
            <h4 className="font-bold text-lg mb-4">مركز المعرفة</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li className="cursor-pointer hover:opacity-80">تحليلات السوق</li>
              <li className="cursor-pointer hover:opacity-80">دراسات حالة</li>
              <li className="cursor-pointer hover:opacity-80">
                الذكاء الاصطناعي
              </li>
              <li className="cursor-pointer hover:opacity-80">
                استراتيجيات النمو
              </li>
              <li className="cursor-pointer hover:opacity-80">
                الإعلانات المدفوعة
              </li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div className="order-3">
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li className="cursor-pointer hover:opacity-80">الرئيسية</li>
              <li className="cursor-pointer hover:opacity-80">مركز المعرفة</li>
              <li className="cursor-pointer hover:opacity-80">شركاؤنا</li>
              <li className="cursor-pointer hover:opacity-80">من نحن</li>
              <li className="cursor-pointer hover:opacity-80">تواصل معنا</li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="order-4 col-span-2 md:col-span-1">
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>

            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1430] flex items-center justify-center shadow-sm">
                  <Phone size={14} className="text-white" />
                </div>
                +966546587884
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1430] flex items-center justify-center shadow-sm">
                  <Mail size={14} className="text-white" />
                </div>
                info@bodunseen.com
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b1430] flex items-center justify-center shadow-sm">
                  <MapPin size={14} className="text-white" />
                </div>
                الرياض - السعودية
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-[#0b1430]/20" />

        {/* Copyright */}
        <div className="text-center text-md text-[#0b1430] font-bold">
          جميع الحقوق محفوظة © BOD UNSEEN 2026
        </div>
      </div>
    </footer>
  );
}
