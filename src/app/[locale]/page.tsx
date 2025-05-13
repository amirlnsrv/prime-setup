// import { OurPartners } from "@/components/OurPartners";
import { FAQ } from "@/components/FAQ";
import { BusinessSetup } from "@/components/BusinessSetup";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <div>
      {/* <OurPartners /> */}
      <FAQ />
      <Contact />
      {<BusinessSetup />}
    </div>
  );
}
