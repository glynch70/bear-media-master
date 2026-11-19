"use client";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
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
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const animations = Array.from(
      root.current?.querySelectorAll<HTMLElement>("[data-campaign-enter]") ??
        [],
    ).map((element, index) =>
      element.animate(
        [
          { opacity: 0, translate: "0 14px" },
          { opacity: 1, translate: "0 0" },
        ],
        {
          duration: 650,
          delay: index * 75,
          easing: "cubic-bezier(.22,1,.36,1)",
          fill: "backwards",
        },
      ),
    );
    const cancel = () => animations.forEach((animation) => animation.cancel());
    preference.addEventListener("change", cancel);
    return () => {
      cancel();
      preference.removeEventListener("change", cancel);
    };
  }, []);
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
  function navigateTo(id: string) {
    const target = document.getElementById(id);
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    target.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
    target.focus({ preventScroll: true });
  }
  function updatePreference(demo: string) {
    setSelected(demo);
    const url = new URL(location.href);
    if (demo) url.searchParams.set("demo", demo);
    else url.searchParams.delete("demo");
    history.replaceState(null, "", url);
  }
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
    const heading = document.querySelector<HTMLElement>("#enquiry h2");
    heading?.setAttribute("tabindex", "-1");
    navigateTo("enquiry");
    heading?.focus({ preventScroll: true });
  }
  return (
    <main
      className="website-campaign"
      ref={root}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        const link = (event.target as Element).closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        if (!link) return;
        const id = link.hash.slice(1);
        if (!document.getElementById(id)) return;
        event.preventDefault();
        history.pushState(null, "", link.hash);
        navigateTo(id);
      }}
    >
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
          Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </header>
      <section className="campaign-hero wrap">
        <div>
          <p className="eyebrow" data-campaign-enter>
            A fresh look. A better first impression.
          </p>
          <h1 data-campaign-enter>
            Your business deserves a <em>better website.</em>
          </h1>
          <p className="lead" data-campaign-enter>
            If your business has moved on but your website hasn’t, it might be
            time for a rethink. Explore three demo websites I’ve created and
            picture what could work for your business.
          </p>
          <div className="actions" data-campaign-enter>
            <a className="button" href="#website-design-studio">
              Explore the demos <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#enquiry">
              Talk to Garry <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="campaign-art" data-campaign-enter>
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
      <section
        className="demo-section"
        id="website-design-studio"
        tabIndex={-1}
        aria-label="Website demos"
      >
        <div className="wrap">
          <p className="eyebrow">Explore / Imagine / Make it yours</p>
          <div className="section-heading" data-reveal>
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
                aria-controls={`demo-${d.name.toLowerCase()}`}
                onClick={() => choose(i)}
              >
                {d.name}
              </button>
            ))}
            <span className="demo-hint">Swipe or use the arrows</span>
          </div>
          <div
            className="demo-rail"
            tabIndex={0}
            role="region"
            aria-label="Demo website cards. Use left and right arrow keys to browse."
            onKeyDown={(event) => {
              if (event.target !== event.currentTarget) return;
              const next =
                event.key === "ArrowRight"
                  ? Math.min(2, active + 1)
                  : event.key === "ArrowLeft"
                    ? Math.max(0, active - 1)
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : null;
              if (next !== null) {
                event.preventDefault();
                choose(next);
              }
            }}
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
              <article
                className="demo-card"
                id={`demo-${d.name.toLowerCase()}`}
                data-active={active === i}
                data-motion-card
                key={d.name}
              >
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
                    Explore {d.name}{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <small>Opens in a new tab</small>
                  <button className="text-link" onClick={() => like(d.name)}>
                    I like this style{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="demo-navigation">
            <p aria-live="polite" aria-atomic="true">
              <strong>{String(active + 1).padStart(2, "0")}</strong>
              <span> / 03 — {demos[active]?.name}</span>
            </p>
            <div className="demo-progress" aria-hidden="true">
              <span style={{ transform: `translateX(${active * 100}%)` }} />
            </div>
            <div className="demo-arrows">
              <button
                aria-label="Previous demo"
                disabled={active === 0}
                onClick={() => choose(active - 1)}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                aria-label="Next demo"
                disabled={active === 2}
                onClick={() => choose(active + 1)}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          <p className="disclosure">
            North, Form and Still are fictional design concepts created by Bear
            Media, not client commissions or operating businesses.
          </p>
        </div>
      </section>
      <section className="build-section wrap">
        <p className="eyebrow">Your business. Your website.</p>
        <div className="section-heading" data-reveal>
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
        <div className="benefits" data-reveal>
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
        <h2 data-reveal>Real businesses I’ve worked with</h2>
        <div className="client-grid">
          {featuredWebsiteProjects.map((p) => (
            <article key={p.name} data-reveal data-motion-card>
              <a href={p.caseStudy}>
                <Image
                  src={p.src}
                  width={900}
                  height={650}
                  sizes="(max-width: 760px) 100vw, 33vw"
                  alt={p.alt}
                />
                <h3>
                  {p.name} <ArrowUpRight size={18} aria-hidden="true" />
                </h3>
              </a>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section wrap" data-reveal>
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
            Let’s talk about your business{" "}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="campaign-form">
        <ContactPage
          campaign
          campaignDemo={selected}
          onCampaignDemo={updatePreference}
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
