import { Hero } from "@/components/Hero";
import { RangeOfServices } from "./components/RangeOfServices/RangeOfServices";
import ServicesHeroBg from "#/images/servicesHeroBg.jpg";

export default function Services() {
  return (
    <>
      <Hero
        imgUrl={ServicesHeroBg}
        title="Все услуги для запуска и развития бизнеса в ОАЭ — в одном месте"
        subtitle="Мы предлагаем комплексное сопровождение бизнеса в ОАЭ — от идеи до полноценного запуска и развития. Наша команда помогает предпринимателям на каждом этапе, обеспечивая юридическую чистоту, прозрачность и максимальную эффективность процессов."
      />
      <RangeOfServices />
    </>
  );
}
