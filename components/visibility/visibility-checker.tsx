import Link from "next/link";
import { Globe2, ArrowUpRight } from "lucide-react";
import styles from "./visibility-checker.module.css";

/** Server component: an honest empty report shell, with no network or simulated scan. */
export function VisibilityChecker({
  partnershipAcknowledgement,
}: {
  partnershipAcknowledgement?: string;
}) {
  return (
    <section className={styles.checker} aria-labelledby="visibility-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>AI Visibility Checker / In preparation</p>
        <h4 id="visibility-title">A clearer view of your online presence.</h4>
        <p>
          A future starting point for understanding your business’s visibility
          online and discussing practical improvements.
        </p>
      </div>
      <div className={styles.workspace}>
        <div className={styles.inputPanel}>
          <span className={styles.stepLabel}>01 / Your starting point</span>
          <label htmlFor="visibility-website">Your website URL</label>
          <input
            id="visibility-website"
            name="websiteUrl"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://yourbusiness.co.uk"
            maxLength={2048}
            aria-describedby="visibility-input-help"
          />
          <p id="visibility-input-help">
            The checker isn’t connected yet. Your URL is not submitted, scanned
            or stored here.
          </p>
          <button type="button" disabled>
            Checker coming soon <ArrowUpRight size={16} aria-hidden />
          </button>
        </div>
        <section
          className={styles.dashboard}
          aria-labelledby="visibility-report-heading"
        >
          <header>
            <div>
              <p className={styles.eyebrow}>Your future report</p>
              <h5 id="visibility-report-heading">Visibility overview</h5>
            </div>
            <span className={styles.status}>Not run</span>
          </header>
          <div className={styles.empty}>
            <div className={styles.orbit} aria-hidden>
              <Globe2 size={42} strokeWidth={1} />
            </div>
            <strong>No report yet</strong>
            <p>
              This space is reserved for real findings from the connected
              checker. No website has been analysed.
            </p>
          </div>
          <dl className={styles.metrics}>
            <div>
              <dt>Website reviewed</dt>
              <dd>Not submitted</dd>
            </div>
            <div>
              <dt>Report date</dt>
              <dd>Not available</dd>
            </div>
            <div>
              <dt>Method &amp; sources</dt>
              <dd>Awaiting integration</dd>
            </div>
          </dl>
          <div className={styles.reportColumns}>
            <section>
              <span className={styles.stepLabel}>02 / Understand</span>
              <h6>Findings &amp; evidence</h6>
              <p>
                Verified observations and their sources will appear here when a
                report is available.
              </p>
            </section>
            <section>
              <span className={styles.stepLabel}>03 / Move forward</span>
              <h6>Recommended next steps</h6>
              <p>
                Any recommendations will be shown with context and limitations
                before you decide what to do.
              </p>
            </section>
          </div>
        </section>
      </div>
      <div className={styles.help}>
        <div>
          <h5>Want help putting recommendations into practice?</h5>
          <p>
            I can discuss your priorities and agree the work and price with you
            in writing.
          </p>
        </div>
        <Link href="/contact?service=other&from=visibility-checker#enquiry">
          Discuss implementation <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
      {partnershipAcknowledgement && (
        <p className={styles.partnership}>{partnershipAcknowledgement}</p>
      )}
    </section>
  );
}
