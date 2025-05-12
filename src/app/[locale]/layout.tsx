import type { Metadata } from "next";

import "@/styles/globals.scss";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Dubai Consalting",
  description: "lending and investment company",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }];
}

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
        <Header />
        {children}
      </body>
    </html>
  );
}
