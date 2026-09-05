import desktop from '@/components/desktop-refresh.module.css'
import type { Metadata } from 'next'
import { RedesignFooter, RedesignHeader } from '@/app/redesign/redesign-chrome'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bear Media',
  description: 'Terms and conditions for Bear Media creative and digital services.',
  alternates: { canonical: '/terms-and-conditions' },
}

const services = [
  'Website design and development',
  'Content creation',
  'Photography and video production',
  'Drone photography and video',
  'Social-media content and management',
  'Related creative and digital services',
]

export default function TermsAndConditionsPage() {
  return (
    <>
      <RedesignHeader surface />
      <main className={`w-full bg-background ${desktop.standardPage} ${desktop.legalPage}`}>
        <section className="border-b border-foreground/10 px-6 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">Bear Media</p>
            <h1 className="font-heading text-5xl font-medium leading-tight tracking-tight text-foreground md:text-7xl">Terms &amp; Conditions</h1>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: 9 August 2026</p>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">These Terms &amp; Conditions apply to services supplied by Bear Media and should be read alongside the relevant quotation, proposal, booking confirmation or statement of work (the “Project Agreement”).</p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 md:py-24">
          <div className="space-y-14 text-base leading-8 text-muted-foreground">
            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">1. About Bear Media</h2>
              <p>Bear Media is a sole-trader business operated by Garry Lynch.</p>
              <p>Business address: 11 Albyn Cottages, Broxburn, West Lothian, EH52 6PH.</p>
              <p>Email: <a className="text-foreground underline decoration-accent underline-offset-4" href="mailto:info@bear-media.com">info@bear-media.com</a></p>
              <p>These Terms apply to clients acting wholly or mainly in the course of a business, trade or profession. Bear Media does not accept consumer bookings under these Terms.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">2. Services and contract formation</h2>
              <p>Our services include:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">{services.map((service) => <li key={service}>{service}</li>)}</ul>
              <p>The exact services, deliverables, timescales, fees, revisions and usage rights will be set out in the Project Agreement. A contract is formed when you accept the Project Agreement in writing, pay a deposit or instruct us to begin work, whichever happens first.</p>
              <p>We may decline work that is unlawful, misleading, discriminatory, defamatory, unsafe or contrary to our professional standards.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">3. Quotes, scope and additional work</h2>
              <p>Quotes are valid for 30 days unless stated otherwise. They are based on the information available when prepared.</p>
              <p>Work outside the agreed scope may be charged separately at the rate stated in the Project Agreement or, if no rate is stated, £75 per hour. This can include additional pages, concepts, revisions, meetings, editing, travel, urgency or technical troubleshooting.</p>
              <p>Timescales are estimates unless a fixed deadline is expressly agreed in writing. We are not responsible for delay caused by late information, approvals, payments or decisions from you or third parties.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">4. Client responsibilities</h2>
              <p>You must provide accurate information, brand assets, copy, images, approvals, account access and other materials reasonably required for the Project.</p>
              <p>You confirm that you own or have permission to use materials supplied to us, including logos, photographs, music, fonts, copy, testimonials, personal data and third-party content.</p>
              <p>You are responsible for checking and approving factual accuracy, claims, prices, contact details, legal notices and final content before publication. If you delay required information or approvals, we may pause the Project, revise the timetable or charge for work needed to restart it.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">5. Fees and payment</h2>
              <p>Fees are stated in the Project Agreement. Expenses such as travel, specialist software, hosting, domains, printing, advertising spend, music licences, subcontractors and other third-party charges are payable where agreed or reasonably incurred.</p>
              <p>Unless the Project Agreement states otherwise, website and larger creative projects require a 50% deposit before work begins, with the balance due before launch, final delivery or handover.</p>
              <p>Retainer and social-media management fees are payable monthly in advance. Invoices are due within 7 days unless a different period is agreed in writing.</p>
              <p>If an invoice is overdue, we may pause work, withhold delivery, suspend access or charge interest and recovery costs to the extent permitted by law. We are not required to launch a website, release files, grant usage rights or transfer accounts until relevant amounts have been paid in full.</p>
              <p>Bear Media is not VAT registered and does not currently charge VAT. If that changes, VAT will be added where legally applicable and we will notify you.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">6. Websites, hosting and third-party services</h2>
              <p>Websites are built and delivered as described in the Project Agreement. Functionality, integrations, hosting, maintenance, SEO work and ongoing support not expressly included are outside scope.</p>
              <p>Domains, hosting, plugins, fonts, software, payment providers, analytics tools, social platforms and other third-party services are subject to their own terms, availability, pricing and technical limits. We are not responsible for changes, outages, suspension or failure of a third-party service.</p>
              <p>We may recommend or configure third-party services but do not guarantee rankings, traffic, leads, sales, engagement, conversions or other commercial results.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">7. Photography, video and drone work</h2>
              <p>Shoot dates depend on suitable conditions, access, availability and safety. We may postpone or alter a shoot because of weather, light, safety concerns, travel disruption, equipment failure or circumstances outside our reasonable control.</p>
              <p>You are responsible for obtaining permissions, releases, site access and consent from people appearing in content unless the Project Agreement says otherwise. Drone work is subject to aviation law, airspace restrictions, weather, safety assessments and required permissions. We may refuse or modify a flight where it would be unsafe or unlawful.</p>
              <p>Raw footage, unedited photographs, project files and working files are not included unless agreed. You should retain copies of all supplied material.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">8. Social media and content management</h2>
              <p>We provide only the platforms, posting frequency, content volume, approval process and community-management activities stated in the Project Agreement.</p>
              <p>You are responsible for reviewing and approving content promptly, and for the accuracy and legality of claims about your products, services, prices and promotions. Advertising spend is separate from our fees unless expressly included.</p>
              <p>We do not guarantee follower growth, reach, engagement, leads, sales, rankings or any other result. Social platforms may change algorithms, features, policies or access without notice.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">9. Intellectual property and usage rights</h2>
              <p>You retain ownership of materials you supplied to us and grant us permission to use them to perform the Project.</p>
              <p>Unless expressly assigned in writing, Bear Media retains copyright and other intellectual-property rights in photographs, video, drone footage, designs, website code, layouts, templates, concepts, drafts, working files, processes and other materials we create.</p>
              <p>Once all relevant fees have been paid, you receive the licence or ownership rights stated in the Project Agreement. If it is silent, you receive a non-exclusive, worldwide licence to use the final approved deliverables for your own business purposes. This does not include raw files, unused concepts, editable source files, third-party assets or our reusable tools and templates.</p>
              <p>We may display completed work in our portfolio, website, social media and award submissions unless you request confidentiality in writing before publication or the Project Agreement says otherwise.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">10. Cancellation, postponement and termination</h2>
              <p>Deposits reserve time and cover preparatory work and committed costs. They are non-refundable to the extent permitted by law.</p>
              <p>If you cancel or postpone a Project, you must pay for work completed, committed third-party costs, booked time that cannot reasonably be reallocated, and any cancellation charge stated in the Project Agreement.</p>
              <p>Either party may terminate an ongoing retainer by giving the notice period stated in the Project Agreement. If no notice period is stated, one full calendar month’s written notice applies.</p>
              <p>We may suspend or terminate the contract if you fail to pay, repeatedly delay the Project, misuse our work, provide unlawful instructions or commit a serious breach of these Terms.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">11. Confidentiality, privacy and data</h2>
              <p>Each party must keep the other party’s confidential business information confidential and use it only for the Project, except where disclosure is required by law or necessary to deliver the services.</p>
              <p>We process personal data in accordance with our Privacy Policy and applicable data-protection law. Where we process personal data on your instructions, the parties will agree any additional data-processing terms reasonably required.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">12. Liability</h2>
              <p>Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation.</p>
              <p>Subject to that, our total liability arising from a Project is limited to the total fees paid or payable for that Project. We are not liable for indirect or consequential loss, loss of profit, revenue, business, opportunity, goodwill, anticipated savings, data or reputation.</p>
              <p>We are not liable for loss caused by materials, instructions, approvals, permissions, account access, third-party services or information supplied by you. You agree to reimburse us for reasonable losses, claims and costs arising from materials or instructions supplied by you that infringe another person’s rights or breach the law.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">13. Force majeure</h2>
              <p>Neither party is liable for delay or failure caused by events outside reasonable control, including severe weather, illness, accident, equipment failure, internet or platform outages, cyber incidents, industrial action, government restrictions, war, fire or flood. The affected party will notify the other and take reasonable steps to minimise the impact.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">14. Complaints</h2>
              <p>Please raise complaints in writing to <a className="text-foreground underline decoration-accent underline-offset-4" href="mailto:info@bear-media.com">info@bear-media.com</a> as soon as reasonably possible, giving details of the issue and the outcome you seek. We will review the complaint and try to resolve it promptly and fairly.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">15. General</h2>
              <p>We may use trusted subcontractors where reasonably necessary while remaining responsible for managing the agreed service. No variation to a Project Agreement or these Terms is effective unless confirmed in writing.</p>
              <p>If any provision is found invalid or unenforceable, the remaining provisions continue in effect. A failure to enforce a provision is not a waiver of that provision. These Terms and the Project Agreement form the entire agreement for the relevant Project.</p>
            </section>

            <section>
              <h2 className="mb-5 font-heading text-3xl font-medium text-foreground">16. Governing law</h2>
              <p>These Terms and each Project Agreement are governed by the law of Scotland. The Scottish courts will have jurisdiction.</p>
            </section>
          </div>
        </div>
      </main>
      <RedesignFooter />
    </>
  )
}
