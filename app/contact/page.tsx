import ContactForm from "./contact-form";
import { pricingPackages } from "@/lib/pricing-config";

export default function ContactPage() {
  return (
    <ContactForm
      pricingEnquiryPackages={pricingPackages.map(({ id, name, service }) => ({
        id,
        name,
        service,
      }))}
    />
  );
}
