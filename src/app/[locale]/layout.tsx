import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import { Directions, Languages } from "@/components/constants";
import { Toaster } from "sonner";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بُعد",
  description:
    "في بُعد، نبني استراتيجيات رقمية تتجاوز التنفيذ لنحوّل الطموح إلى حضور مؤثر ونمو مستدام يعكس قوة علامتك في السوق",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getCurrentLocale();
  const isArabic = locale === Languages.ARABIC;

  return (
    <html dir={isArabic ? Directions.RTL : Directions.LTR} lang={locale}>
      <body className={`${cairo.variable} antialiased`}>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
