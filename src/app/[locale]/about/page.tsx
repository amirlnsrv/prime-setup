import { Hero } from "@/components/Hero";
import { WeAreTeam } from "@/components/WeAreTeam/WeAreTeam";
import AboutHeroBg from "#/images/AboutHero.jpg";
import { OurMission } from "@/components/OurMission";
import { WhyTrustUs } from "@/components/WhyTrustUs";
import { MeetOurTeam } from "@/components/MeetOurTeam";
import { getTranslations } from "next-intl/server";

export default async function about() {
  const t = await getTranslations("about");
  return (
    <section>
      <Hero imgUrl={AboutHeroBg} title={t("title")} subtitle={t("subtitle")} />
      <WeAreTeam />
      <OurMission />
      <WhyTrustUs />
      <MeetOurTeam />
    </section>
  );
}
