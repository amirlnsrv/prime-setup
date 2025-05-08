// import { getDictionary } from '@/lib/i18n/getDictionary';
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
  params: Promise<{ locale: "en" | "ru" }>;
}) {
  const { locale } = await params;
  // const dict = await getDictionary(params.locale);

  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
