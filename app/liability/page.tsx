import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Liability Waiver — RotateMD",
  description:
    "RotateMD Liability Waiver — important terms regarding the use of our roommate matching platform.",
};

export default function LiabilityWaiver() {
  return (
    <>
      <Navbar />
      <header className="bg-navy-900 pt-24 pb-12 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Liability Waiver
          </h1>
          <p className="text-gray-400 mt-3">Effective date: April 6, 2026</p>
        </div>
      </header>

      <main className="py-12 sm:py-16 px-5 sm:px-6 bg-white">
        <article className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <div className="bg-navy-900/5 border border-navy-900/10 rounded-xl p-5 mb-10">
            <p className="text-navy-900 font-semibold m-0">
              You must read and agree to the terms outlined here before using the
              application.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            1. Introduction
          </h2>
          <p>
            By accessing and using RotateMD (the &quot;Website&quot;), you (the
            &quot;User&quot;) agree to be bound by the terms and conditions of
            this Liability Waiver (&quot;the Waiver&quot;). The Website is owned
            and operated by RotateMD (&quot;the Company&quot;). The purpose of
            the Website is to facilitate the pairing of medical students as
            roommates during away rotations (the &quot;Service&quot;).
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            2. Acknowledgment of Risk
          </h2>
          <p>The User acknowledges that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Company provides a platform for users to find potential
              roommates and does not guarantee the suitability, compatibility, or
              safety of any user.
            </li>
            <li>
              The Company is not responsible for the conduct of any user on or
              off the Service.
            </li>
            <li>
              Any medical schools, hospitals, or residency programs associated
              with the User or any other users have no connection to the Company,
              the Website, or any Service.
            </li>
          </ul>
          <p>
            The User understands that there are inherent risks involved in
            meeting and residing with individuals who are found through the
            Website. The User assumes all risk of any harm or damages that occur
            as a consequence of meeting and/or residing with any other individual
            found through the Website and expressly waives any and all claims, of
            any kind, whether in tort, contract, or equity, against the Company
            that arise from or otherwise relate to the use of the Website and/or
            meeting or residing with individuals who are found through the
            Website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            3. No Background Checks
          </h2>
          <p>
            The Company does not conduct background checks, verify the identity,
            or screen users in any way. The User acknowledges and agrees that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The User is solely responsible for the User&apos;s interactions
              with other users of the Service.
            </li>
            <li>
              The User is solely responsible for conducting their own background
              checks, screenings, and assessments of other users.
            </li>
          </ul>
          <p>
            While RotateMD may in the future introduce verification features
            (such as email verification or student status confirmation), these
            measures are not a substitute for the User&apos;s own due diligence
            and do not constitute a guarantee of any user&apos;s identity,
            character, or trustworthiness.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            4. No Warranties
          </h2>
          <p>
            The Website and the Service are provided &quot;as is&quot; and
            &quot;as available,&quot; without any warranties of any kind, either
            express or implied. The Company disclaims all warranties, including
            but not limited to, the implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. The Company
            makes no representations or promises of any kind concerning the
            suitability, safety, or background of any other person on the Website
            and it is the responsibility of the User alone to determine whether
            to meet with and/or reside with any other individual found through
            the Website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            5. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, the Company and its
            affiliates, officers, directors, employees, and agents shall not be
            liable for any direct, indirect, incidental, special, consequential,
            or punitive damages arising out of or related to the User&apos;s use
            of the Website or the Service, including but not limited to, any
            harm, injury, or loss resulting from interactions with other users or
            living arrangements facilitated through the Service.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            6. Indemnification
          </h2>
          <p>
            The User agrees to indemnify, defend, and hold harmless the Company,
            its officers, directors, employees, and agents from and against any
            and all claims, liabilities, damages, losses, costs, expenses, or
            fees (including reasonable attorneys&apos; fees) arising from the
            User&apos;s use of the Website or the Service or any violation of
            this Waiver.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            7. Dispute Resolution
          </h2>
          <p>
            Any disputes arising out of or related to the use of the Website or
            the Service shall be resolved through binding arbitration conducted
            in accordance with the rules of the American Arbitration Association.
            The arbitration shall take place in Orange County, California, and
            the judgment upon the award rendered by the arbitrator(s) may be
            entered in any court having jurisdiction thereof.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            8. Governing Law
          </h2>
          <p>
            This Waiver shall be governed by and construed in accordance with the
            laws of the State of California, without regard to its conflict of
            laws principles.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            9. Severability
          </h2>
          <p>
            If any provision of this Waiver is found to be invalid or
            unenforceable by a court of competent jurisdiction, such provision
            shall be deemed severed from this Waiver, and the remaining
            provisions shall remain in full force and effect.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            10. Entire Agreement
          </h2>
          <p>
            This Waiver constitutes the entire agreement between the User and the
            Company with respect to the subject matter hereof and supersedes all
            prior or contemporaneous understandings or agreements, whether
            written or oral, regarding such subject matter. This Waiver is
            intended to be read in conjunction with our{" "}
            <a href="/terms" className="text-blue-accent hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            11. Amendments
          </h2>
          <p>
            The Company reserves the right to amend or modify this Waiver at any
            time. Any changes will be effective immediately upon posting on the
            Website. The User&apos;s continued use of the Website following the
            posting of changes constitutes acceptance of those changes.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            12. Contact Information
          </h2>
          <p>
            If you have any questions about this Waiver, please contact us at:
          </p>
          <p className="font-medium">
            RotateMD
            <br />
            Email:{" "}
            <a
              href="mailto:rotatemdapp@gmail.com"
              className="text-blue-accent hover:underline"
            >
              rotatemdapp@gmail.com
            </a>
          </p>

          <div className="bg-navy-900/5 border border-navy-900/10 rounded-xl p-5 mt-10">
            <p className="text-navy-900 font-medium m-0">
              By using the Website, the User acknowledges that they have read,
              understood, and agree to be bound by the terms and conditions of
              this Waiver.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
