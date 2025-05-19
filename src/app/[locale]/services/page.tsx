import { Hero } from "@/components/Hero";
import { RangeOfServices } from "./components/RangeOfServices/RangeOfServices";

export default function Services() {
  return (
    <>
      <Hero
        imgUrl="/assets/images/servicesHeroBg.jpg"
        title="Все услуги для запуска и развития бизнеса в ОАЭ — в одном месте"
        subtitle="Мы предлагаем комплексное сопровождение бизнеса в ОАЭ — от идеи до полноценного запуска и развития. Наша команда помогает предпринимателям на каждом этапе, обеспечивая юридическую чистоту, прозрачность и максимальную эффективность процессов."
      />
      <RangeOfServices />
    </>
  );
}
