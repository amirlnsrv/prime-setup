import type { Metadata } from "next";

import "@/styles/globals.scss";
import dynamic from "next/dynamic";
import { Telegram } from "@/ui/Telegram";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Dubai Consalting",
  description: "lending and investment company",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

const Header = dynamic(() => import("@/components/Header"));

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ru" };
}) {
  const locale = params.locale;
  // const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      {/* Динамически устанавливаем язык */}
      <body>
        <Telegram />
        <Header />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
