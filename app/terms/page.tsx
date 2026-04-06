import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — RotateMD",
  description:
    "RotateMD Terms of Service — the rules and guidelines for using our platform.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <header className="bg-navy-900 pt-24 pb-12 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="text-gray-400 mt-3">Last updated: April 6, 2026</p>
        </div>
      </header>

      <main className="py-12 sm:py-16 px-5 sm:px-6 bg-white">
        <article className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <p>
            Welcome to RotateMD (&quot;Company,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). Your use of our website at{" "}
            <a
              href="https://rotatemd.com"
              className="text-blue-accent hover:underline"
            >
              rotatemd.com
            </a>{" "}
            (the &quot;Site&quot;) and the services made available on the Site is
            subject to these Terms of Service (these &quot;Terms&quot;). By using
            any of our Services, you agree to be bound by, and use our Services
            in compliance with, these Terms of Service. IF YOU DO NOT AGREE TO
            THESE TERMS OF SERVICE, DO NOT USE OUR SERVICES.
          </p>

          <p>
            We may make changes to these Terms from time to time. When we do, we
            will revise the &quot;last updated&quot; date given above. It is your
            responsibility to review these Terms periodically. The then-current
            version of these Terms will supersede all earlier versions. Your
            continued use of our Services after such changes have been published
            will constitute your acceptance of such revised Terms.
          </p>

          <p>
            RotateMD is currently in a pre-launch phase. We are collecting
            waitlist signups to gauge interest and notify you when our platform
            is ready. These Terms reflect our current services and will be
            updated as we introduce new features and functionality.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            1. Our Commitment
          </h2>
          <p>
            We are committed to building and continuously improving RotateMD to
            help medical students find roommates during away rotations. While we
            cannot guarantee specific features or timelines, we will do our best
            to develop a platform that meets the needs of our users and the
            medical student community.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            2. License to Use Our Services
          </h2>
          <p>
            Subject to these Terms, we grant you a limited, personal,
            non-exclusive, non-transferable license to use our Services for your
            personal use and not for resale or further distribution. Your right
            to use our Services is limited by all terms and conditions set forth
            in these Terms.
          </p>
          <p>
            Except for this license granted to you, we and our licensors retain
            all right, title, and interest in and to our Services, including all
            related intellectual property rights. Our Services are protected by
            applicable intellectual property laws, including United States
            copyright law and international treaties.
          </p>
          <p>
            Except as otherwise explicitly provided in these Terms or as may be
            expressly permitted by applicable law, you will not, and will not
            permit or authorize any third party to: (i) reproduce, modify,
            translate, enhance, decompile, disassemble, reverse engineer, or
            create derivative works of any of our Services; (ii) rent, lease, or
            sublicense access to any of our Services; or (iii) circumvent or
            disable any security or technological features or measures of our
            Services.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            3. Access to Our Services
          </h2>
          <p>
            Our Services are currently available to all individuals interested in
            roommate matching for medical school away rotations. By providing
            contact information through any forms on our Site, you consent to
            receiving email communications from RotateMD. You may unsubscribe
            from these communications at any time.
          </p>
          <p>
            We do not provide you with the equipment to access our Services. You
            are responsible for all fees charged by third parties related to your
            access and use of our Services (e.g., charges by Internet service
            providers).
          </p>
          <p>
            We reserve the right to modify or discontinue, temporarily or
            permanently, all or any portion of our Services without notice. We
            will not be liable to you or to any third party for any
            modification, suspension, or discontinuance of all or any portion of
            our Services.
          </p>
          <p>
            We also reserve the right, in our sole discretion, to reject, refuse
            to post, or remove any material that you submit, and to restrict,
            suspend, or terminate your access to our Services at any time, for
            any or no reason, with or without prior notice, and without
            liability.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            4. Restrictions
          </h2>
          <p>
            You must comply with all applicable laws when using our Services.
            Except as may be expressly permitted by applicable law, or as
            RotateMD may authorize expressly in writing, you will not, and will
            not permit anyone else to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Store, copy, modify, distribute, or resell any information, content,
              or materials made available on our Services.
            </li>
            <li>
              Use any automated tool (e.g., robots, spiders) to access or use our
              Services or to store, copy, modify, distribute, or resell any
              content.
            </li>
            <li>
              Rent, lease, or sublicense your access to our Services to another
              person.
            </li>
            <li>
              Use our Services for any purpose other than your own personal use.
            </li>
            <li>
              Circumvent or disable any security features of our Services.
            </li>
            <li>
              Use our Services in a manner that overburdens, or that threatens
              the integrity, performance, or availability of our Services.
            </li>
            <li>
              Remove, alter, or obscure any proprietary notices (including
              copyright and trademark notices) on any portion of our Services.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            5. Acknowledgment of Risk
          </h2>
          <p>
            The purpose of RotateMD is to facilitate the pairing of medical
            students as roommates during away rotations. By using our Services,
            you acknowledge that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We provide a platform for users to find potential roommates and do
              not guarantee the suitability, compatibility, or safety of any
              user.
            </li>
            <li>
              We are not responsible for the conduct of any user on or off the
              Service.
            </li>
            <li>
              Any medical schools, hospitals, or residency programs associated
              with you or any other users have no connection to RotateMD, the
              Website, or any Service.
            </li>
          </ul>
          <p>
            You understand that there are inherent risks involved in meeting and
            residing with individuals who are found through the Website. You
            assume all risk of any harm or damages that occur as a consequence
            of meeting and/or residing with any other individual found through
            the Website and expressly waive any and all claims, of any kind,
            whether in tort, contract, or equity, against the Company that arise
            from or otherwise relate to the use of the Website and/or meeting or
            residing with individuals who are found through the Website.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            6. No Background Checks
          </h2>
          <p>
            RotateMD does not conduct background checks, verify the identity, or
            screen users in any way. You acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You are solely responsible for your interactions with other users
              of the Service.
            </li>
            <li>
              You are solely responsible for conducting your own background
              checks, screenings, and assessments of other users.
            </li>
          </ul>
          <p>
            While RotateMD may in the future introduce verification features
            (such as email verification or student status confirmation), these
            measures are not a substitute for your own due diligence and do not
            constitute a guarantee of any user&apos;s identity, character, or
            trustworthiness.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            7. Privacy Policy
          </h2>
          <p>
            We may collect registration and other information about you through
            our Services. Our collection and use of this information is governed
            by our{" "}
            <a href="/privacy" className="text-blue-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            8. Use Policies
          </h2>
          <p>
            You are solely responsible for any content and other material that
            you submit, publish, transmit, or display on, through, or with our
            Services. You will not use our Services to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Upload, post, or transmit any content that is unlawful, harmful,
              threatening, abusive, harassing, defamatory, vulgar, obscene,
              invasive of another&apos;s privacy, hateful, or otherwise
              objectionable.
            </li>
            <li>
              Harm us or third parties in any way.
            </li>
            <li>
              Impersonate any person or entity, or otherwise misrepresent your
              affiliation with a person or entity.
            </li>
            <li>
              Upload, post, or transmit any unsolicited advertising, promotional
              materials, spam, chain letters, or pyramid schemes.
            </li>
            <li>
              Upload, post, or transmit any material that contains software
              viruses or any other code designed to interrupt, destroy, or limit
              the functionality of any software or hardware.
            </li>
            <li>
              Interfere with or disrupt our Services or servers or networks
              connected to our Services.
            </li>
            <li>
              Intentionally or unintentionally violate any applicable local,
              state, national, or international law or regulation.
            </li>
            <li>
              Stalk or otherwise harass another person.
            </li>
            <li>
              Collect or store personal data about other users.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            9. Trademarks
          </h2>
          <p>
            &quot;RotateMD,&quot; the RotateMD logo, and any other product or
            service name or slogan displayed on our Services are trademarks of
            RotateMD, and may not be copied, imitated, or used, in whole or in
            part, without our prior written permission. The look and feel of our
            Services, including all page headers, custom graphics, button icons,
            and scripts, is the service mark, trademark, and/or trade dress of
            RotateMD and may not be copied, imitated, or used, in whole or in
            part, without our prior written permission. All other trademarks,
            registered trademarks, product names, and company names or logos
            mentioned on our Services are the property of their respective
            owners.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            10. Feedback
          </h2>
          <p>
            We may provide you with a mechanism to provide feedback, suggestions,
            and ideas about our Services (&quot;Feedback&quot;). You agree that
            we may, in our sole discretion, use the Feedback you provide to us in
            any way, including in future enhancements and modifications to our
            Services. You hereby grant to us a perpetual, worldwide, fully
            transferable, sublicensable, irrevocable, royalty-free license to
            use, reproduce, modify, create derivative works from, distribute, and
            display the Feedback in any manner and for any purpose, without any
            obligation to provide attribution or compensation to you or any third
            party.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            11. Links and Third-Party Content
          </h2>
          <p>
            Our Services may display, or contain links to, third-party products,
            services, and websites. Any opinions, advice, statements, services,
            offers, or other information that constitutes part of the content
            expressed or made available by third parties are those of the
            respective authors or producers and not of RotateMD.
          </p>
          <p>
            We do not control third-party content and do not guarantee its
            accuracy, integrity, or quality. We are not responsible for the
            performance of, and we do not endorse, any third-party content or
            information. It is your responsibility to evaluate the information,
            opinion, advice, or other content available on and through our
            Services.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            12. Disclaimer of Warranties
          </h2>
          <p className="uppercase text-sm leading-relaxed">
            YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE
            PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS,
            WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            WE AND OUR SUPPLIERS AND LICENSORS EXPRESSLY DISCLAIM ALL WARRANTIES,
            INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
            NON-INFRINGEMENT. WE MAKE NO REPRESENTATIONS OR PROMISES OF ANY KIND
            CONCERNING THE SUITABILITY, SAFETY, OR BACKGROUND OF ANY OTHER PERSON
            ON THE WEBSITE AND IT IS YOUR RESPONSIBILITY ALONE TO DETERMINE
            WHETHER TO MEET WITH AND/OR RESIDE WITH ANY OTHER INDIVIDUAL FOUND
            THROUGH THE WEBSITE. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS,
            OR USEFULNESS OF THE SERVICES, AND YOU RELY ON THE SERVICES AT YOUR
            OWN RISK. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED
            BY YOU FROM US OR THROUGH OUR SERVICES WILL CREATE ANY WARRANTY NOT
            EXPRESSLY STATED IN THESE TERMS. SOME STATES MAY PROHIBIT A DISCLAIMER
            OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM STATE TO
            STATE.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            13. Limitation of Liability
          </h2>
          <p className="uppercase text-sm leading-relaxed">
            TO THE FULLEST EXTENT PERMITTED BY LAW, WE AND OUR AFFILIATES,
            OFFICERS, DIRECTORS, EMPLOYEES, SUPPLIERS, LICENSORS, AND AGENTS
            SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR
            USE OF THE SERVICES, INCLUDING BUT NOT LIMITED TO, ANY HARM, INJURY,
            OR LOSS RESULTING FROM INTERACTIONS WITH OTHER USERS OR LIVING
            ARRANGEMENTS FACILITATED THROUGH THE SERVICE, DAMAGES FOR LOSS OF
            PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF WE
            HAVE BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES). UNDER NO
            CIRCUMSTANCES WILL OUR TOTAL LIABILITY ARISING OUT OF OR RELATED TO
            YOUR USE OF THE SERVICES, REGARDLESS OF THE FORUM AND REGARDLESS OF
            WHETHER ANY ACTION OR CLAIM IS BASED ON CONTRACT, TORT, OR OTHERWISE,
            EXCEED THE AMOUNTS, IF ANY, THAT YOU HAVE PAID TO US FOR YOUR USE OF
            THE SERVICES. BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR
            LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE
            ABOVE LIMITATION MAY NOT APPLY TO YOU.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            14. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless RotateMD, its
            officers, directors, employees, agents, suppliers, and licensors from
            and against any and all claims, liabilities, damages, losses, costs,
            expenses, or fees (including reasonable attorneys&apos; fees) arising
            from your use of the Services, your violation of these Terms, or your
            violation of any rights of a third party through use of the Services,
            including any harm resulting from interactions with other users or
            living arrangements.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            15. Dispute Resolution
          </h2>
          <p>
            Any disputes arising out of or related to the use of the Website or
            the Services shall be resolved through binding arbitration conducted
            in accordance with the rules of the American Arbitration Association.
            The arbitration shall take place in Orange County, California, and
            the judgment upon the award rendered by the arbitrator(s) may be
            entered in any court having jurisdiction thereof.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            16. Governing Law and Severability
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the State of California, without regard to its conflict of
            laws principles. The exclusive jurisdiction and venue for any claims
            arising out of or related to these Terms or your use of the Services
            will lie in the state and federal courts located within the State of
            California, and you irrevocably agree to submit to the jurisdiction
            of such courts.
          </p>
          <p>
            Our failure to enforce any right or provision in these Terms will not
            constitute a waiver of such right or provision unless acknowledged
            and agreed to by us in writing. If any provision of these Terms is
            found to be invalid or unenforceable by a court of competent
            jurisdiction, such provision shall be deemed severed from these
            Terms, and the remaining provisions will remain in full force and
            effect.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            17. Changes to These Terms
          </h2>
          <p>
            As RotateMD grows and introduces new features — such as user
            accounts, roommate matching, messaging, and payments — we will update
            these Terms to reflect those changes. When we make significant
            changes, we will notify you by placing a prominent notice on our Site
            or by notifying you directly via email at least 30 days before they
            become effective.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-4">
            18. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about our Services or these
            Terms, please contact us at:
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
        </article>
      </main>
      <Footer />
    </>
  );
}
