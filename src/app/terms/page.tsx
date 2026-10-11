import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal'

export const metadata: Metadata = { title: 'Terms of use', alternates: { canonical: '/terms' } }

export default function Page() {
  return (
    <LegalPage title="Terms of use">
      <p>
        These terms are an agreement between you and Bitwards, operated by Ericson Luciano, doing business as Bitwards, Navotas City, Metro Manila, Philippines (“we”). They cover the Bitwards customer app, the Bitwards business app and this website. By creating an account or using Bitwards you agree to them and to our Privacy Notice. If you do not agree, please do not use Bitwards.
      </p>

      <h2>1. Who can use Bitwards</h2>
      <p>You must be at least 18 and able to enter into an agreement. If you sign up for a business, you confirm that you are allowed to act for it. Give us true information and keep your sign-in secure. You are responsible for what happens under your account.</p>

      <h2>2. What Bitwards is</h2>
      <p>Bitwards is a platform that lets participating stores create challenges (simple tasks) and rewards, and lets customers join challenges, earn Bits and claim rewards. The stores, not Bitwards, sell the food, drinks and goods, offer the rewards, and are responsible for them. Bitwards is currently a pilot, so features may change, pause or end.</p>

      <h2>3. For customers</h2>
      <ul>
        <li><strong>Bits</strong> are reward points that belong to your account. You earn them by finishing challenges at participating stores, and you can use them for any reward on Bitwards, from any store or from Bitwards itself. They have no cash value and cannot be sold, bought, transferred or exchanged for money. Bits end 2 years after the day you earned them, and the oldest Bits are used first. We may change how Bits work during the pilot, and we will tell you before a change that affects the Bits you hold.</li>
        <li><strong>Giveaways from Bitwards</strong> are prizes that Bitwards offers for Bits. When you claim one, we contact you by email to arrange delivery or a meetup outside the app. We may ask for proof of who you are before we hand it over. If you do not reply within the time shown on your claim, the claim may end and the Bits are not refunded.</li>
        <li><strong>Challenges</strong> are set by the store. The rules shown when you join are the rules that apply to you, even if the store later changes the challenge for other people. Challenges have limits and can fill up, end or be paused.</li>
        <li><strong>Progress counts only when store staff confirm it</strong> (for example a check-in or a qualifying purchase). Show your code at the counter. Codes change every minute and may be used once.</li>
        <li><strong>Vouchers</strong> are issued when you claim a reward with your Bits. Each has an expiry date and the terms the store set. Expired vouchers are not refunded. Show the voucher code to the store to use it.</li>
        <li><strong>Your activity is the record.</strong> What the app shows under your activity, challenges and vouchers is the record of your Bits. Please check it. If something looks wrong, tell us within 30 days so we can still check it with the store.</li>
        <li><strong>Mistakes.</strong> If something went wrong, contact us. We may review it with the store and correct your balance. We do not have to reverse a claim that was made correctly, and we will not reverse a claim you made by mistake once the voucher is used.</li>
        <li><strong>Keep your sign-in safe.</strong> Do not share the emailed codes or your screen with the code showing. If you think someone else has your account, tell us straight away.</li>
        <li><strong>Fair use.</strong> Do not cheat, share or sell codes or accounts, use more than one account to collect rewards, pressure staff, or interfere with the service. We may remove Bits, cancel vouchers, or suspend an account for misuse after reviewing the facts.</li>
      </ul>

      <h2>4. For businesses</h2>
      <ul>
        <li><strong>Application.</strong> Stores are reviewed before they go live. We can decline, pause or suspend a store, with a reason, if it breaks these terms or the law, or if customers are put at risk.</li>
        <li><strong>Approval first.</strong> Every challenge and reward you create is reviewed by Bitwards before customers can see it, and again when you change a live reward. We may reject or ask you to change something, and we will tell you why.</li>
        <li><strong>Your rewards.</strong> You decide and fund your rewards and challenges. You must honour vouchers on the terms you published, within their expiry. Set limits you can afford. Bitwards helps you see the maximum cost but does not guarantee your results or profits.</li>
        <li><strong>Your team.</strong> You are responsible for the people you invite, for confirming visits and purchases honestly, and for removing access when someone leaves.</li>
        <li><strong>Laws.</strong> You are responsible for the permits, taxes and rules that apply to your business and promotions in the Philippines, including consumer protection and any approval needed for promotional offers, and for the accuracy of what you advertise.</li>
        <li><strong>Pilot and fees.</strong> The pilot is offered on the terms we give you in writing (the pilot period, any fees and how invoices are paid). Plans, prices and invoicing terms will be sent to you before any charge.</li>
        <li><strong>Data.</strong> You may use customer information you can see only to run your own rewards at your store, and must follow the Data Privacy Act. Do not copy, sell or share it.</li>
      </ul>

      <h2>5. Our rights and responsibilities</h2>
      <ul>
        <li>We work to keep Bitwards available and accurate, but it needs an internet connection and may have interruptions. We may change or end features with reasonable notice where we can.</li>
        <li>We are not responsible for what stores sell, for their rewards, or for disputes between a store and its customers, though we will try to help. Where the law allows, our responsibility to you is limited to direct losses. Nothing here limits rights you have under Philippine consumer law that cannot be waived.</li>
        <li>The Bitwards name, logo and software belong to us. You may use the service as intended, but not copy or reverse engineer it.</li>
      </ul>

      <h2>6. Ending your account</h2>
      <p>You can delete your account in the app at any time (customers: Profile → Delete account). Stores can ask us to close their account. When an account ends, Bits and unused vouchers end with it. We may suspend or end accounts that break these terms, and we will tell you why and give you a way to answer, except where we must act at once to protect people or comply with the law.</p>
      <p>If we end the whole service, we will tell you in advance where we can, and give stores time to honour vouchers already issued.</p>

      <h2>7. Changes, and a change of owner</h2>
      <p>We may update these terms. If a change matters, we will tell you in the app or by email before it applies. Using Bitwards after that means you accept the change. If Bitwards is sold, merged or moved to another company, these terms and your account may move with it, and we will tell you.</p>

      <h2>8. Law and contact</h2>
      <p>These terms are governed by the laws of the Republic of the Philippines. We hope to settle any problem by talking first; if that fails, the proper courts in the Philippines have jurisdiction. Contact: hello@bitwards.app.</p>
    </LegalPage>
  )
}
