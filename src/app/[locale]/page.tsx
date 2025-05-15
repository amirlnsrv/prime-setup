import { FAQ } from "@/components/FAQ";
import { OurPartners } from "@/components/OurPartners";
import { Contact } from "@/components/Contact";
import { BusinessSetup } from "@/components/BusinessSetup";

export default function Home() {
  return (
    <div>
      <OurPartners />
      <FAQ />
      <Contact />
      <BusinessSetup />
    </div>
  );
}
