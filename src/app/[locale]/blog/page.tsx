import dynamic from "next/dynamic";

import { Hero } from "@/components/Hero";
import { getTranslations } from "next-intl/server";
import bg from "#/images/heroBlogBg.jpg";

const BlogCards = dynamic(() => import("@/components/BlogCards"));

export default async function Blog() {
  const t = await getTranslations("hero.blog");

  return (
    <section>
      <Hero
        imgUrl={bg}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <BlogCards />
    </section>
  );
}
