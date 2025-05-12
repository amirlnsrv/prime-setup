import { Benefits } from '@/companents/Benefits/Benefits';
import './styles/global.scss';
import { Services } from "@/companents/Services/Services";
import { OurPartners } from "@/components/OurPartners";
import { SuccessShared } from "@/components/SuccessShared";
import { UsefulArticles } from "@/components/UsefulArticles";

export default function Home() {
  return (
    <div>
      <Benefits />
      <Services/>
      <OurPartners />
      <SuccessShared />
      <UsefulArticles />
    </div>
  );
}
