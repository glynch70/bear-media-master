"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Globe2,
  House,
  Sparkles,
  Plus,
  Check,
} from "lucide-react";
import type { PublicPackage } from "@/lib/pricing-config";
import { calculateTimeValue } from "@/lib/pricing-calculator";
import styles from "./pricing.module.css";

const routes = [
  {
    id: "content",
    number: "01",
    title: "Create content",
    description:
      "Photography, video, drone and social content that shows your business at its best.",
    categories: ["content"],
    icon: Camera,
    link: "/content-creation-west-lothian",
    image: "/assets/uploads/new-work/cg-creating-more-space.jpg",
  },
  {
    id: "websites",
    number: "02",
    title: "Build your website",
    description:
      "Modern, mobile-first websites that make your business look professional and help customers get in touch.",
    categories: ["websites"],
    icon: Globe2,
    link: "/website-design-west-lothian",
    image: "/assets/websites/almond-vet.webp",
  },
  {
    id: "property",
    number: "03",
    title: "Market your property",
    description:
      "Photography, video, drone, floor plans and virtual tours for estate agents, developers and property businesses.",
    categories: ["property"],
    icon: House,
    link: "/property",
    image:
      "/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp",
  },
  {
    id: "growth",
    number: "04",
    title: "Grow your business",
    description:
      "Social media management, Google Business Profile support, website maintenance and practical AI training.",
    categories: ["social", "training", "maintenance", "google", "support"],
    icon: Sparkles,
    link: "/training",
    image: "/05-BTS/garry branding bts.webp",
  },
];
const examples = {
  content: [
    {
      src: "/assets/uploads/new-work/cg-creating-more-space.jpg",
      name: "C&G Developments",
      alt: "Creating More Space for Family Life social content by Bear Media",
      href: "/projects/cg-developments",
    },
    {
      src: "/assets/uploads/new-work/simply-sheds-before-after.jpg",
      name: "Simply Sheds Scotland",
      alt: "Before and after social content for Simply Sheds Scotland",
      href: "/projects",
    },
  ],
  websites: [
    {
      src: "/assets/websites/almond-vet.webp",
      name: "Almond Vet Care",
      alt: "Almond Vet Care website design by Bear Media",
      href: "/projects/almond-vet-care",
    },
    {
      src: "/assets/websites/seamus-corry.webp",
      name: "Seamus Corry",
      alt: "Seamus Corry website design by Bear Media",
      href: "/projects/seamus-corry",
    },
    {
      src: "/assets/websites/recent/esk-valley-talking-therapies.webp",
      name: "Esk Valley Talking Therapies",
      alt: "Desktop and mobile views of the Esk Valley Talking Therapies website",
      href: "https://eskvalleytalkingtherapies.co.uk/",
    },
  ],
  property: [
    {
      src: "/images/2026-refresh/property/118-craigentinny-road-edinburgh-conservatory-garden.webp",
      name: "David Todd Sales & Lettings",
      alt: "Conservatory doors opening onto an Edinburgh garden",
      href: "/projects/david-todd",
    },
    {
      src: "/assets/client-work/cg-developments/finished-new-build-exterior.jpg",
      name: "C&G Developments",
      alt: "Completed rural home photographed for C&G Developments",
      href: "/projects/cg-developments",
    },
  ],
};
const categoryLabels: Record<string, string> = {
  social: "Social media management",
  training: "AI training",
  maintenance: "Website maintenance",
  google: "Google Business Profile",
  support: "Website checks & repairs",
  content: "Content creation",
  websites: "Website design",
  property: "Property marketing",
};
export function enquiryHref(p: PublicPackage) {
  return `/contact?${new URLSearchParams({ service: p.service, package: p.id, from: "pricing" })}#enquiry`;
}

export function PricingExperience({
  packages,
  visibilityChecker,
}: {
  packages: PublicPackage[];
  visibilityChecker?: ReactNode;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [selected, setSelected] = useState<PublicPackage | null>(null);
  const [sticky, setSticky] = useState(false);
  const [video, setVideo] = useState(false);
  const choose = (p: PublicPackage) => {
    setSelected(p);
    setSticky(true);
  };
  return (
    <>
      <section
        id="services"
        className={styles.services}
        aria-labelledby="services-heading"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Choose your route</p>
            <h2 id="services-heading">
              What do you
              <br />
              have in mind?
            </h2>
          </div>
          <p>
            One project or ongoing support.
            <br />
            Start with what your business needs.
          </p>
        </div>
        <div className={styles.routes}>
          {(visibilityChecker
            ? [
                ...routes,
                {
                  id: "visibility",
                  number: "05",
                  title: "Improve your online visibility",
                  description:
                    "Explore the upcoming AI Visibility Checker and practical support for your next steps.",
                  categories: [],
                  icon: Globe2,
                  link: "/contact",
                  image: "",
                },
              ]
            : routes
          ).map((route) => {
            const Icon = route.icon;
            const expanded = open === route.id;
            return (
              <article
                key={route.id}
                className={`${styles.route} ${expanded ? styles.routeOpen : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    id={`trigger-${route.id}`}
                    aria-expanded={expanded}
                    aria-controls={`panel-${route.id}`}
                    onClick={() => {
                      setOpen(expanded ? null : route.id);
                      setVideo(false);
                    }}
                    className={styles.routeTrigger}
                  >
                    <span className={styles.routeNumber}>{route.number}</span>
                    <span className={styles.routeText}>
                      <span className={styles.routeTitle}>{route.title}</span>
                      <span className={styles.routeDescription}>
                        {route.description}
                      </span>
                      <span className={styles.routeExplore}>
                        {expanded
                          ? "Close this service"
                          : route.id === "visibility"
                            ? "Explore the checker"
                            : "Explore packages"}{" "}
                        <ArrowUpRight size={16} aria-hidden />
                      </span>
                    </span>
                    {route.image && (
                      <span className={styles.routeThumb} aria-hidden="true">
                        <Image src={route.image} alt="" fill sizes="160px" />
                      </span>
                    )}
                    <Icon
                      className={styles.routeIcon}
                      size={34}
                      strokeWidth={1.2}
                      aria-hidden
                    />
                    <span className={styles.plus}>
                      <Plus size={22} aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={`panel-${route.id}`}
                  role="region"
                  aria-labelledby={`trigger-${route.id}`}
                  hidden={!expanded}
                  className={styles.panel}
                >
                  {expanded &&
                    (route.id === "visibility" ? (
                      visibilityChecker
                    ) : (
                      <>
                        <div className={styles.panelIntro}>
                          <p>Make it work for your business.</p>
                          <Link href={route.link} className={styles.textLink}>
                            More about this service ↗
                          </Link>
                        </div>
                        <p className={styles.scopeNote}>
                          Choose a starting point. I’ll confirm your price,
                          deliverables, revisions and any extras in a written
                          scope before work begins.
                        </p>
                        {route.categories.map((category) => (
                          <div key={category} className={styles.packageGroup}>
                            <h4>{categoryLabels[category]}</h4>
                            <div className={styles.packages}>
                              {packages
                                .filter((p) => p.category === category)
                                .map((p) => (
                                  <article
                                    key={p.id}
                                    className={`${styles.package} ${selected?.id === p.id ? styles.selected : ""}`}
                                  >
                                    <h5>{p.name}</h5>
                                    <p className={styles.price}>
                                      {p.priceLabel}
                                    </p>
                                    <p>{p.description}</p>
                                    {p.includedDeliverables.length > 0 ? (
                                      <ul>
                                        {p.includedDeliverables.map((t) => (
                                          <li key={t}>
                                            <Check size={16} aria-hidden />
                                            {t}
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className={styles.scopeNote}>
                                        Deliverables and revisions agreed in
                                        your proposal.
                                      </p>
                                    )}
                                    {p.exclusions.length > 0 && (
                                      <p>
                                        Exclusions: {p.exclusions.join("; ")}
                                      </p>
                                    )}
                                    {p.optionalExtras.length > 0 && (
                                      <p>
                                        Optional extras:{" "}
                                        {p.optionalExtras.join("; ")}
                                      </p>
                                    )}
                                    {p.revisionAllowance && (
                                      <p>Revisions: {p.revisionAllowance}</p>
                                    )}
                                    <button
                                      type="button"
                                      className={styles.selectButton}
                                      aria-pressed={selected?.id === p.id}
                                      onClick={() => choose(p)}
                                    >
                                      {selected?.id === p.id
                                        ? "Selected"
                                        : "Choose this package"}{" "}
                                      <span aria-hidden>↗</span>
                                    </button>
                                    {selected?.id === p.id && (
                                      <Link
                                        className={styles.textLink}
                                        href={enquiryHref(p)}
                                      >
                                        {p.ctaLabel} →
                                      </Link>
                                    )}
                                  </article>
                                ))}
                            </div>
                          </div>
                        ))}
                        {route.id === "websites" && (
                          <details className={styles.comparison}>
                            <summary>
                              Compare website packages{" "}
                              <Plus size={18} aria-hidden />
                            </summary>
                            <p>
                              Package scope is awaiting confirmation. No page
                              counts, features or extras are promised at this
                              stage.
                            </p>
                            <div className={styles.compareGrid}>
                              {packages
                                .filter((p) => p.category === "websites")
                                .map((p) => (
                                  <div key={p.id}>
                                    <h4>{p.name}</h4>
                                    <p className={styles.price}>
                                      {p.priceLabel}
                                    </p>
                                    <dl>
                                      {[
                                        "Pages & content",
                                        "Functionality & integrations",
                                        "Photography & copy",
                                        "Hosting & ongoing care",
                                        "Revisions",
                                      ].map((t) => (
                                        <div key={t}>
                                          <dt>{t}</dt>
                                          <dd>To agree in writing</dd>
                                        </div>
                                      ))}
                                    </dl>
                                    <Link
                                      href={enquiryHref(p)}
                                      className={styles.textLink}
                                    >
                                      Discuss the scope ↗
                                    </Link>
                                  </div>
                                ))}
                            </div>
                          </details>
                        )}
                        <div className={styles.workHeading}>
                          <p className={styles.eyebrow}>Made by Bear Media</p>
                          <h4>
                            {selected &&
                            route.categories.includes(selected.category)
                              ? `A little inspiration for your ${selected.name.toLowerCase()}.`
                              : "Real work. A closer look."}
                          </h4>
                        </div>
                        <div className={styles.gallery}>
                          {(route.id === "growth"
                            ? examples.content
                            : examples[route.id as keyof typeof examples]
                          ).map((item) => (
                            <Link
                              key={item.src}
                              href={item.href}
                              className={styles.work}
                            >
                              <div>
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  sizes="(max-width: 767px) 75vw, 33vw"
                                  className={styles.workImage}
                                />
                              </div>
                              <span>
                                {item.name}
                                <ArrowUpRight size={18} aria-hidden />
                              </span>
                            </Link>
                          ))}
                        </div>
                        {route.id === "content" && (
                          <div className={styles.videoPreview}>
                            {video ? (
                              <video
                                controls
                                muted
                                playsInline
                                preload="none"
                                poster="/assets/hero/hero-poster.webp"
                                src="/assets/hero/hero-desktop.mp4"
                                aria-label="Bear Media creative work showreel"
                              />
                            ) : (
                              <button
                                className={styles.textLink}
                                type="button"
                                onClick={() => setVideo(true)}
                              >
                                Load the Bear Media showreel ▷
                              </button>
                            )}
                          </div>
                        )}
                        <Link
                          className={styles.button}
                          href={`/contact?service=${route.id === "growth" ? "other" : route.id}#enquiry`}
                        >
                          Let’s discuss your project ↗
                        </Link>
                      </>
                    ))}
                </div>
              </article>
            );
          })}
        </div>
        <p className={styles.finePrint}>
          Every project is subject to an agreed written scope. Website prices are
          shown above. For other services, ask me for a tailored quote.
        </p>
      </section>
      <Calculator />
      {selected && sticky && (
        <aside className={styles.sticky} aria-label="Selected package">
          <div>
            <strong>{selected.name}</strong>
            <span>{selected.priceLabel}</span>
          </div>
          <Link href={enquiryHref(selected)}>Discuss ↗</Link>
          <button
            type="button"
            aria-label="Dismiss selected package bar"
            onClick={() => setSticky(false)}
          >
            ×
          </button>
        </aside>
      )}
    </>
  );
}

function Calculator() {
  const [values, setValues] = useState(["1", "2", "20", "650"]);
  const result = values.some((v) => v.trim() === "")
    ? null
    : calculateTimeValue(
        ...(values.map(Number) as [number, number, number, number]),
      );
  const fields = [
    ["Number of employees", "1"],
    ["Estimated hours saved each week, per employee", "0.5"],
    ["Average hourly staff cost (£)", "1"],
    ["Training investment (£)", "1"],
  ];
  const money = (v: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(v);
  return (
    <section className={styles.calculator} aria-labelledby="calculator-title">
      <div>
        <p className={styles.eyebrow}>
          A little perspective / Optional calculator
        </p>
        <h2 id="calculator-title">
          What could a few
          <br />
          hours back be worth?
        </h2>
        <p>
          Explore the potential value of improving repetitive business tasks.
          Start with your own estimates.
        </p>
        <Link href="/training" className={styles.textLink}>
          Explore practical AI training ↗
        </Link>
      </div>
      <div className={styles.calculatorCard}>
        <div className={styles.inputs}>
          {fields.map(([label, step], i) => (
            <label key={label} htmlFor={`calc-${i}`}>
              {label}
              <input
                id={`calc-${i}`}
                type="number"
                inputMode="decimal"
                min={i === 0 ? 1 : 0}
                max={i === 0 ? 100000 : i === 1 ? 168 : 1000000}
                step={step}
                value={values[i]}
                onChange={(e) =>
                  setValues((v) =>
                    v.map((old, j) => (j === i ? e.target.value : old)),
                  )
                }
              />
            </label>
          ))}
        </div>
        <div className={styles.results} aria-live="polite" aria-atomic="true">
          {result ? (
            <>
              <div>
                <span>Monthly hours saved</span>
                <strong>
                  {result.monthlyHours.toLocaleString("en-GB", {
                    maximumFractionDigits: 1,
                  })}{" "}
                  hrs
                </strong>
              </div>
              <div>
                <span>Annual value of staff time</span>
                <strong>{money(result.annualValue)}</strong>
              </div>
              <div>
                <span>Illustrative break-even</span>
                <strong>
                  {result.breakEvenMonths === null
                    ? "No savings estimated"
                    : `${result.breakEvenMonths.toLocaleString("en-GB", { maximumFractionDigits: 1 })} months`}
                </strong>
              </div>
            </>
          ) : (
            <p>
              Enter valid values in every field: at least one employee and up to
              168 hours per week.
            </p>
          )}
        </div>
        <details className={styles.formula}>
          <summary>How this is calculated</summary>
          <p>
            Annual hours = employees × hours per week × 52. Monthly hours =
            annual hours ÷ 12. Annual value = annual hours × hourly cost.
            Break-even months = investment ÷ (annual value ÷ 12).
          </p>
        </details>
        <p className={styles.finePrint}>
          Illustrative estimates, not guaranteed savings or cash returns. Actual
          value depends on adoption, tasks and results. The investment input is
          your own assumption, not a published training fee.
        </p>
      </div>
    </section>
  );
}
