import { Hero } from "@/components/Hero";
import { WeAreTeam } from "@/components/WeAreTeam/WeAreTeam";
import AboutHeroBg from "#/images/AboutHero.jpg";
import { OurMission } from "@/components/OurMission";
import { WhyTrustUs } from "@/components/WhyTrustUs";
import { MeetOurTeam } from "@/components/MeetOurTeam";

export default function about() {
  return (
    <section>
      <Hero
        imgUrl={AboutHeroBg}
        title="Начните бизнес в ОАЭ с экспертами, которым доверяют"
        subtitle="Мы не просто консультируем — мы сопровождаем ваш успех с первого шага. Наша команда помогает предпринимателям из разных стран открыть бизнес в ОАЭ быстро, прозрачно и без стресса. Мы знаем, с чего начать и как избежать ошибок, потому что уже помогли сотням клиентов пройти этот путь."
      />
      <WeAreTeam />
      <OurMission />
      <WhyTrustUs />
      <MeetOurTeam />
    </section>
  );
}
