// Questions and answers, kept in one place so the home page, the customer and business pages and /faq always agree.
export type Qa = { q: string; a: string }

export const generalFaqs: Qa[] = [
  { q: 'What is Bitwards?', a: 'Bitwards is a loyalty program built around challenges. Customers discover participating local businesses, complete challenges, and earn eligible rewards.' },
  { q: 'How do I earn rewards?', a: 'Complete the actions described in an available challenge. Each challenge explains its requirements and its reward, and store staff confirm your visit.' },
  { q: 'Does every store offer the same rewards?', a: 'No. Rewards and challenge rules vary by participating business. Bits are the same everywhere, so Bits you earn at one store can pay for a reward at another.' },
  { q: 'Do Bits expire?', a: 'Yes. Bits end 12 months after the day you earned them, and the oldest Bits are used first. The app tells you when some are about to end.' },
  { q: 'How can my business join?', a: 'Apply to join the pilot. We review every application and will explain the plan options before anything is charged.' },
  { q: 'What does it cost businesses?', a: 'We are running a pilot and finalising pricing. Rewards you offer are funded by your store.' },
  { q: 'Where is Bitwards available?', a: 'We are piloting with local stores in the Philippines. We are not claiming availability elsewhere yet.' },
]

export const customerFaqs: Qa[] = [
  { q: 'Do I need to download anything?', a: 'No store visit needed to install. Open the app in your phone browser and, if you like, add it to your home screen.' },
  { q: 'What do I need to sign up?', a: 'Just an email address. A mobile number is optional and is not used to sign in yet.' },
  { q: 'What if I forget to show my code?', a: 'Progress is only counted when staff confirm your visit, so show your code at the counter. If something went wrong, contact support and we can review it.' },
  { q: 'Who checks the challenges and rewards?', a: 'Bitwards reviews every challenge and reward before customers can see it.' },
  { q: 'Do vouchers expire?', a: 'Yes. Each voucher shows its expiry date. Expired vouchers are not refunded, so use them in time.' },
  { q: 'Can I delete my account?', a: 'Yes, in Profile. Your account is deleted 14 days after you ask, and you can cancel before then. You can also download your data first.' },
]

export const storeFaqs: Qa[] = [
  { q: 'What does it cost?', a: 'We are running a pilot and finalising pricing. Apply and we will explain the plan options before anything is charged. Rewards you offer are funded by your store.' },
  { q: 'Do I need special hardware?', a: 'No. Staff use a phone or tablet in the browser to scan customer codes. There is no POS integration yet.' },
  { q: 'Can customers cheat?', a: 'Codes are single-use and expire in about a minute, and progress needs staff confirmation. Limits per day and per challenge reduce abuse, and Bitwards reviews unusual patterns.' },
  { q: 'Does it work offline?', a: 'Not yet. Scanning and redeeming need an internet connection, and a failed attempt records nothing.' },
  { q: 'How many locations can I have?', a: 'One location per business for now. Multi-location support is planned.' },
]
