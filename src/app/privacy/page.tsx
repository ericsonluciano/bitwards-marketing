import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal'

export const metadata: Metadata = { title: 'Privacy notice', alternates: { canonical: '/privacy' } }

export default function Page() {
  return (
    <LegalPage title="Privacy notice">
      <p>
        This notice explains what personal information Bitwards collects, why, who sees it, how long we keep it, and the choices and rights you have. We follow the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and its rules. In this notice, “we” means Bitwards, operated by Ericson Luciano, doing business as Bitwards, Navotas City, Metro Manila, Philippines.
      </p>

      <h2>1. Who is responsible for your information</h2>
      <p>
        Bitwards is the personal information controller. Our Data Protection Officer (the person responsible for privacy) is Ericson Luciano, and you can reach them at:
      </p>
      <p>
        Data Protection Officer, Bitwards (Ericson Luciano)<br />
        Navotas City, Metro Manila, Philippines<br />
        hello@bitwards.app
      </p>
      <p>Please write there for any question, request or complaint about this notice.</p>

      <h2>2. What we collect</h2>
      <p><strong>If you use Bitwards as a customer:</strong></p>
      <ul>
        <li>Your email address (to sign you in) and the name you give us.</li>
        <li>A mobile number, only if you choose to add one. We do not verify it or use it to sign in yet.</li>
        <li>Whether you agreed to the Terms and this notice, and when, and whether you want email updates.</li>
        <li>What you do in the app: quests you join and your progress, check-ins confirmed by a store, Bits you earn or spend, and vouchers you claim or use, with times and the store involved.</li>
        <li>Short-lived codes the app creates so a store can confirm you. We keep only a scrambled (hashed) form of each code.</li>
      </ul>
      <p><strong>If you use Bitwards for a business:</strong></p>
      <ul>
        <li>Your business name, type, contact email and phone, and store name and address.</li>
        <li>The email addresses and roles of your team members (owner, manager, staff).</li>
        <li>What your team does in the app: quests and rewards you create, check-ins and vouchers your staff confirm.</li>
        <li>Billing details we need to invoice you: plan, billing email, invoices and their payment status. We do not collect card numbers.</li>
      </ul>
      <p><strong>Everyone:</strong> a record of important actions (for example sign-ins, changes by our staff, and support requests) for security and fairness, short error reports when the app or this website breaks (see below), and the technical information our hosting providers log when you visit (such as IP address, device and browser type, and times).</p>
      <p>We do not knowingly collect sensitive personal information (such as health, government ID numbers, or financial account details). Please do not send us any.</p>

      <h2>3. Why we use it</h2>
      <ul>
        <li>To create your account, sign you in, and run quests, Bits and vouchers.</li>
        <li>To let a store see who it is checking in, and the activity of its own customers, so it can run its rewards.</li>
        <li>To keep the service safe and fair: preventing misuse, reviewing unusual activity, and fixing mistakes you report.</li>
        <li>To invoice stores and keep the financial records the business needs.</li>
        <li>To send you sign-in codes and important service messages. We send email updates about quests and rewards only if you opted in, and you can turn that off any time.</li>
        <li>To meet legal obligations and to understand how the service is used so we can improve it, using counts rather than your identity wherever we can.</li>
      </ul>
      <p>Our basis for most of this is your consent when you sign up, and what we need to provide the service you asked for.</p>

      <h2>4. Who sees your information</h2>
      <ul>
        <li><strong>Stores you take part in</strong> see your name and your activity with that store only, not your activity at other stores. Once a store sees your information it is also responsible for how it uses it, and must follow the Data Privacy Act and our Terms, which allow it to use the information only to run its own rewards for you. Ask the store directly if you have a concern about what it does.</li>
        <li><strong>Bitwards staff</strong> with a need to see it (for support, safety and billing), under access controls and two-factor sign-in, with an audit trail.</li>
        <li><strong>Service providers that process data for us:</strong> Supabase (database and sign-in, hosted in Singapore), Vercel (website hosting), Cloudflare (domain name service), Resend (sending sign-in and service emails), Zoho (our support mailbox, which holds the messages you send us) and Sentry (error reports, described below). They may handle data on servers outside the Philippines. We use them only to run Bitwards, and we choose providers that protect data with security measures and contracts.</li>
        <li><strong>Authorities</strong>, if the law or a valid order requires it.</li>
      </ul>
      <p>We do not sell your personal information and we do not show advertising. This website does not use advertising trackers. We use only the cookies that keep you signed in.</p>

      <h2>5. Automated checks</h2>
      <p>
        We run automated checks that flag unusual activity, for example a very large number of check-ins in a day, so that a person can look at it. A flag does not change your Bits or account on its own. A person reviews it, and nothing is closed or removed only because of an automated flag. We do not use your information to build marketing profiles or to make other automated decisions about you.
      </p>

      <h2>6. Error reports</h2>
      <p>
        When Bitwards or this website hits a technical problem, it may send a short error report to Sentry, a service that helps us find and fix faults. A report contains technical details: what went wrong, which page address it happened on (without anything after a question mark), your browser and device type, and the time. We set it up so that cookies, request headers, form contents, and anything that looks like an email address or access key are removed before a report is sent. We do not turn on screen recordings. Reports are used only to fix problems and are kept for the short period Sentry stores them. Sentry stores them in the European Union.
      </p>

      <h2>7. How long we keep it</h2>
      <ul>
        <li>Your account details: until you delete your account or ask us to.</li>
        <li>When you delete your account, we remove your name, email, mobile number and sign-in. Records of Bits issued and vouchers are kept without your name or email so stores and sponsors can reconcile their books.</li>
        <li>Support requests and billing records: for as long as needed to resolve the matter and meet accounting and legal duties.</li>
        <li>Technical logs and error reports: for the short periods our providers keep them.</li>
      </ul>

      <h2>8. How we protect it</h2>
      <p>
        Access is limited by role and enforced in the database. Connections are encrypted. Our staff accounts use two-factor sign-in. Customer codes expire in about a minute and can be used once. No system is perfectly secure, so if a breach puts your rights at risk we will tell you and the National Privacy Commission within the time the law requires.
      </p>

      <h2>9. Your rights</h2>
      <p>Under the Data Privacy Act you may:</p>
      <ul>
        <li>be informed about how your information is used, including whether it is used for automated decisions or profiling (this notice);</li>
        <li>access the information we hold about you, and get a copy (in the app: Profile → Download my data);</li>
        <li>correct information that is wrong (in the app: Profile);</li>
        <li>object to certain uses, or withdraw your consent, for example email updates;</li>
        <li>ask us to erase or block your information (in the app: Profile → Delete account);</li>
        <li>receive your data in a common format;</li>
        <li>be compensated for damage caused by inaccurate, unlawfully obtained or misused information; and</li>
        <li>complain to the National Privacy Commission (privacy.gov.ph) if you think your rights were violated. We would appreciate the chance to fix it first.</li>
      </ul>
      <p>We answer requests within a reasonable time. We may need to confirm it is really you, and may keep what the law requires us to keep.</p>

      <h2>10. Young people</h2>
      <p>Bitwards is for people 18 and over. If you are younger, please ask a parent or guardian to use it for you or with you.</p>

      <h2>11. Changes to this notice and to our business</h2>
      <p>If we change this notice in a way that matters, we will tell you in the app or by email before it applies and update the date above. If Bitwards is ever sold or merged, or its operation moves to another company, your information may move with the service, and we will tell you and the new owner must follow this notice or tell you first.</p>
    </LegalPage>
  )
}
