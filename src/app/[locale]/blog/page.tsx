import dynamic from "next/dynamic";

import { Hero } from "@/components/Hero";
import { getTranslations } from "next-intl/server";

const BlogCards = dynamic(() => import("@/components/BlogCards"));

export default async function Blog() {

  const t = await getTranslations("hero.blog")

  return (
    <section>
      <Hero
        imgUrl="/assets/images/heroBlogBg.jpg"
        title={t("title")}
        subtitle={t("subtitle")}
        inlineStyles={{
          inner: {
            maxWidth: "900px",
            margin: "0 auto"

          },
          content: {
            textAlign: "center",
            alignItems: "center",
          },
        }}
      />
      <BlogCards />
    </section>
  );
}
