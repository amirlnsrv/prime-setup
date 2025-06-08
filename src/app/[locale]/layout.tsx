import type { Metadata } from "next";

import "@/styles/globals.scss";
import dynamic from "next/dynamic";
import { Telegram } from "@/ui/Telegram";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";

import { FooterWrapper } from "@/components/FooterWrapper/FooterWrapper";

import { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Dubai Consalting",
  description: "lending and investment company",
};

const Header = dynamic(() => import("@/components/Header"));

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  

  return (
    <html lang={locale}>
      {/* Динамически устанавливаем язык */}
      <body>
        <NextIntlClientProvider>
          <Telegram />
          <Header />
          <main>{children}</main>
          <FooterWrapper />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
