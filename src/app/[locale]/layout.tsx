import type { Metadata } from "next";

import "@/styles/globals.scss";
import dynamic from "next/dynamic";
import { Telegram } from "@/ui/Telegram";

import { FooterWrapper } from "@/components/FooterWrapper/FooterWrapper";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dubai Consalting",
  description: "lending and investment company",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

const Header = dynamic(() => import("@/components/Header"));

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
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
        <FooterWrapper />
      </body>
    </html>
  );
}
