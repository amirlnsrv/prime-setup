import './styles/global.scss';
import { Services } from "@/companents/Services/Services";
import { OurPartners } from "@/components/OurPartners";

export default function Home() {
  return (
    <div>
      <Services/>
      <OurPartners />
    </div>
  );
}
