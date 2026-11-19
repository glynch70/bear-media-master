"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactPage from "@/components/contact-page";
import { featuredWebsiteProjects } from "@/lib/website-projects";
import { trackConversion } from "@/components/analytics/conversion-tracker";
import "./campaign.css";
const demos = [
  {
    name: "North",
    type: "Property developer website demo",
    text: "Explore how a property business could showcase developments, homes and its approach.",
    url: "https://north-property-concept-hkn3801mv.vercel.app",
  },
  {
    name: "Form",
    type: "Gym website demo",
    text: "Explore a gym website with classes, membership options and a trial enquiry.",
    url: "https://form-training-club.vercel.app",
  },
  {
    name: "Still",
    type: "Holiday retreat website demo",
    text: "See how accommodation, surroundings and guest experiences can come together.",
    url: "https://still-scottish-retreat-4370ldr6g.vercel.app",
  },
];
export default function Campaign() {
  const [selected, setSelected] = useState("");
  const [active, setActive] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const demo = new URLSearchParams(location.search).get("demo") || "";
      if (demos.some((d) => d.name.toLowerCase() === demo)) {
        setSelected(demo);
        const i = demos.findIndex((d) => d.name.toLowerCase() === demo);
        setActive(i);
        const r = rail.current;
        if (r)
          r.scrollLeft =
            (r.children[i] as HTMLElement).offsetLeft -
            (r.children[0] as HTMLElement).offsetLeft;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  function choose(i: number) {
    setActive(i);
    const r = rail.current;
    if (r)
      r.scrollTo({
        left:
          (r.children[i] as HTMLElement).offsetLeft -
          (r.children[0] as HTMLElement).offsetLeft,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  }
  function like(name: string) {
    setSelected(name.toLowerCase());
    const u = new URL(location.href);
    u.searchParams.set("demo", name.toLowerCase());
    u.hash = "enquiry";
    history.replaceState(null, "", u);
    document.getElementById("enquiry")?.scrollIntoView();
  }
  return (
    <main className="website-campaign">
      <a className="skip" href="#website-design-studio">
        Skip to demos
      </a>
      <header className="campaign-header wrap">
        <a href="/" aria-label="Bear Media home">
          <Image
            src="/assets/website-campaign/bear-media.webp"
            width={120}
            height={80}
            alt="Bear Media"
            priority
          />
        </a>
        <a className="button" href="#enquiry">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>
      <section className="campaign-hero wrap">
        <div>
          <p className="eyebrow">A fresh look. A better first impression.</p>
          <h1>
            Your business deserves a <em>better website.</em>
          </h1>
          <p className="lead">
            If your business has moved on but your website hasn’t, it might be
            time for a rethink. Explore three demo websites I’ve created and
            picture what could work for your business.
          </p>
          <div className="actions">
            <a className="button" href="#website-design-studio">
              Explore the demos <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#enquiry">
              Talk to Garry ↗
            </a>
          </div>
        </div>
        <div className="campaign-art">
          <Image
            src="/assets/website-campaign/three-phones.webp"
            width={1024}
            height={1280}
            sizes="(max-width: 760px) 100vw, 45vw"
            alt="North, Form and Still demo websites displayed on three phones in the Bear Media campaign artwork"
            priority
          />
        </div>
      </section>
      <section className="demo-section" id="website-design-studio">
        <div className="wrap">
          <p className="eyebrow">Explore / Imagine / Make it yours</p>
          <div className="section-heading">
            <h2>
              Three different businesses.
              <br />
              Three different approaches.
            </h2>
            <p>
              These are working demo websites. Open one, try the menus and have
              a look around.
            </p>
          </div>
          <div className="demo-controls" aria-label="Choose a demo">
            {demos.map((d, i) => (
              <button
                key={d.name}
                aria-pressed={active === i}
                onClick={() => choose(i)}
              >
                {d.name}
              </button>
            ))}
            <span>Swipe to explore →</span>
          </div>
          <div
            className="demo-rail"
            ref={rail}
            onScroll={() => {
              const r = rail.current;
              if (r) {
                const w =
                  (r.children[1] as HTMLElement).offsetLeft -
                  (r.children[0] as HTMLElement).offsetLeft;
                setActive(Math.round(r.scrollLeft / w));
              }
            }}
          >
            {demos.map((d, i) => (
              <article className="demo-card" key={d.name}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${d.name} (opens in a new tab)`}
                  onClick={() =>
                    trackConversion("demo_visit", {
                      demo: d.name.toLowerCase(),
                      source_page: "try-the-websites",
                    })
                  }
                >
                  <div className="browser-top">
                    <span>● ● ●</span>
                    <span>
                      {d.name.toUpperCase()} / CONCEPT{" "}
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <Image
                    src={`/assets/website-campaign/${d.name.toLowerCase()}.webp`}
                    width={1440}
                    height={1000}
                    sizes="(max-width: 760px) 86vw, 33vw"
                    alt={`${d.name} website demo preview`}
                    className="demo-image"
                  />
                </a>
                <div className="card-copy">
                  <p className="eyebrow">{d.type}</p>
                  <h3>{d.name.toUpperCase()}</h3>
                  <p>{d.text}</p>
                  <a
                    className="button"
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackConversion("demo_visit", {
                        demo: d.name.toLowerCase(),
                        source_page: "try-the-websites",
                      })
                    }
                  >
                    Explore {d.name} ↗
                  </a>
                  <small>Opens in a new tab</small>
                  <button className="text-link" onClick={() => like(d.name)}>
                    I like this style ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="disclosure">
            North, Form and Still are fictional design concepts created by Bear
            Media, not client commissions or operating businesses.
          </p>
        </div>
      </section>
      <section className="build-section wrap">
        <p className="eyebrow">Your business. Your website.</p>
        <div className="section-heading">
          <h2>
            A website built
            <br />
            around your business
          </h2>
          <p>
            I build websites that explain what you do, show your work clearly
            and make it easy for customers to get in touch.
          </p>
        </div>
        <div className="benefits">
          {[
            "Designed for phones, tablets and desktop",
            "Clear services and straightforward enquiries",
            "Your branding, photographs and content",
            "Photography, video and copy available as part of the agreed project",
          ].map((t, i) => (
            <p key={t}>
              <span>0{i + 1}</span>
              {t}
            </p>
          ))}
        </div>
        <p className="disclosure">
          Your project is agreed around your needs. Features shown in the demos
          are not automatically included.
        </p>
      </section>
      <section className="client-section wrap">
        <p className="eyebrow">Real client work</p>
        <h2>Real businesses I’ve worked with</h2>
        <div className="client-grid">
          {featuredWebsiteProjects.map((p) => (
            <article key={p.name}>
              <a href={p.caseStudy}>
                <Image
                  src={p.src}
                  width={900}
                  height={650}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  alt={p.alt}
                />
                <h3>{p.name} ↗</h3>
              </a>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section wrap">
        <Image
          src="/assets/about/garry-restaurant.webp"
          width={700}
          height={700}
          sizes="(max-width: 760px) 100vw, 40vw"
          alt="Garry Lynch from Bear Media"
        />
        <div>
          <p className="eyebrow">Hello, I’m Garry</p>
          <h2>
            You’ll work
            <br />
            directly with me
          </h2>
          <p>
            I’m Garry, the person behind Bear Media. Based in Broxburn, I work
            with small businesses across West Lothian, Edinburgh and Central
            Scotland. I can help with your website, photography, video and
            content, with the scope and price agreed before work starts.
          </p>
          <a className="text-link" href="#enquiry">
            Let’s talk about your business ↗
          </a>
        </div>
      </section>
      <div className="campaign-form">
        <ContactPage
          campaign
          campaignDemo={selected}
          onCampaignDemo={setSelected}
        />
      </div>
      <footer className="wrap campaign-footer">
        <a href="/">Bear Media</a>
        <a href="mailto:info@bear-media.com">info@bear-media.com</a>
        <a href="tel:+447879011860">07879 011860</a>
        <a href="/privacy">Privacy</a>
      </footer>
    </main>
  );
}
