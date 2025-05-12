import { OurPartners } from "@/components/OurPartners";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact/Contact";
import { BusinessSetup } from "@/components/BusinessSetup";

export default function Home() {
  return (
    <div>
      <OurPartners />
      <FAQ />
      {/* <Contact />
      <BusinessSetup /> */}
    </div>
  );
}
