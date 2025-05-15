import dynamic from "next/dynamic";

import { Hero } from "@/components/Hero";

const BlogCards = dynamic(() => import("@/components/BlogCards"));

export default function Blog() {
  return (
    <section>
      <Hero
        imgUrl="/assets/images/heroBlogBg.jpg"
        title="Ваш бизнес в надёжных руках"
        subtitle="Комплексные услуги по регистрации бизнеса, лицензированию и сопровождению в ОАЭ"
        inlineStyles={{
          inner: {
            maxWidth: "608px",
          },
          content: {
            textAlign: "left",
            alignItems: "flex-start",
          },
        }}
      />
      <BlogCards />
    </section>
  );
}
