import Image from "next/image";
import Link from "next/link";
import { RedesignHeader, RedesignFooter } from "@/app/redesign/redesign-chrome";
import { createMetadata } from "@/lib/seo";
import { publicPackages } from "@/lib/pricing-config";
import { PricingExperience } from "./pricing-experience";
import styles from "./pricing.module.css";

export const metadata = createMetadata({
  title: "Bear Media Pricing | Websites, Photography & Marketing Scotland",
  description:
    "Explore Bear Media’s pricing for websites, photography, video, property marketing, social media management and AI training across West Lothian and Scotland.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#pricing-main">
        Skip to services and pricing
      </a>
      <RedesignHeader surface />
      <main id="pricing-main">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Bear Media / Services &amp; pricing
            </p>
            <h1>
              <span>Good work.</span>
              <span>
                Clear prices<span className={styles.gold}>.</span>
              </span>
            </h1>
            <p className={styles.intro}>
              Professional photography, video, websites and digital support for
              businesses across Scotland.
            </p>
            <p className={styles.muted}>
              Choose what you need, explore the options and know what’s included
              before work begins.
            </p>
            <div className={styles.actions}>
              <a className={styles.button} href="#services">
                Explore services <span aria-hidden>↓</span>
              </a>
              <Link className={styles.textLink} href="/contact#enquiry">
                Let’s talk ↗
              </Link>
            </div>
            <p className={styles.heroNote}>
              <span className={styles.scroll} aria-hidden>
                ↓
              </span>{" "}
              Independent. Personal. Based in West Lothian.
            </p>
          </div>
          <figure className={styles.heroImage}>
            <Image
              src="/assets/client-work/cg-developments/finished-new-build-exterior.jpg"
              alt="Finished rural home photographed by Bear Media for C&G Developments"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 44vw"
            />
            <figcaption>Real places. Real businesses. My work.</figcaption>
            <span className={styles.imageNumber} aria-hidden>
              01 / ON LOCATION
            </span>
          </figure>
        </section>
        <PricingExperience packages={publicPackages()} />
        <section className={styles.process}>
          <p className={styles.eyebrow}>A simple way forward</p>
          <h2>
            Straightforward from
            <br />
            start to finish.
          </h2>
          <div className={styles.steps}>
            {[
              "Tell me what you need.",
              "Agree the package and scope.",
              "Let’s get to work.",
            ].map((t, i) => (
              <div key={t}>
                <span className={styles.eyebrow}>0{i + 1}</span>
                <h3>{t}</h3>
              </div>
            ))}
          </div>
          <p>
            You’ll work directly with me, from the first conversation through to
            delivery. No complicated handovers or unnecessary layers.
          </p>
          <Link href="/contact#enquiry" className={styles.button}>
            Tell me what you have in mind ↗
          </Link>
        </section>
      </main>
      <RedesignFooter />
    </div>
  );
}
