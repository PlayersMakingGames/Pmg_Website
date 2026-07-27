export const NEWS = [
  {
    slug: 'friends-and-gold',
    date: '2026-07-19',
    title: 'Friends, and a single Gold economy',
    excerpt:
      'Add rivals and regulars to a Friends list and see who’s online. The Shop, quests, and gifts now run on one currency — Gold — instead of a split economy.',
    body: [
      'A Friends system is live — send requests, keep a roster of the people you actually play with, and see who’s online before you start a match.',
      'We also collapsed the economy down to a single currency, Gold, across the Shop, daily quests, and gifts. One balance to track instead of two.',
      'Alongside it, a broader optimization pass: the post-login screens (Shop, Profile, Gift Box, Onboarding) now load on demand instead of bloating the first paint, and we audited render frequency across the match engine — no leaks found, no changes needed.',
    ],
  },
  {
    slug: 'accounts-shop-gifts',
    date: '2026-07-19',
    title: 'Accounts, wallet, Shop, and Gift Boxes',
    excerpt:
      'Real accounts arrive — sign up, sync your wallet and inventory across devices, and open the Shop for the first time.',
    body: [
      'Focus now has real accounts. Sign up, and your wallet and inventory follow you across devices instead of living in one browser’s local storage.',
      'New players pick their first two elements through a guided Onboarding flow the moment they sign up.',
      'The Shop opened for business — Elements, Deck Boxes, Card Sleeves, and Alternate Arts, purchasable with Coins or Shards depending on the item.',
      'Gift Boxes went live too: redeem a promo code or receive a reward, and it waits in your Gift Box until you claim it.',
    ],
  },
  {
    slug: 'tournament-mode',
    date: '2026-07-18',
    title: 'Tournament Mode goes live',
    excerpt:
      'A 4–8 player single-elimination bracket where every match is a Best-of-3, two-deck series — and no single dropped connection can stall it.',
    body: [
      'Tournament Mode is here: a remote 4–8 player single-elimination bracket, where every match in the bracket is itself a Best-of-3 series played across two decks.',
      'Bracket creation and round advancement aren’t locked to whoever started the tournament — any connected player’s client can start the bracket or push a finished round forward, so the event doesn’t stall if one tab closes.',
      'A forfeit claim was added for stalled matches: if an opponent goes quiet for too long mid-bracket, the waiting player can claim the match by forfeit instead of waiting indefinitely.',
    ],
  },
]
