/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-10.netlify.app', // Template 10 demo URL — TODO: replace with real client content
    title: 'Goldie Hawthorne — Shags, Curls & Warm Colour, Austin', // TODO: replace with real client content
    description:
      'Austin hairstylist for big-energy shags, bouncy curls, curtain bangs and sun-warmed colour in a sunny, plant-filled studio. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t10-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: voluminous shag with curtain bangs in golden light', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Goldie Hawthorne', // TODO: replace with real client content — shown as the logo
    tagline: 'Big hair, warm colour, good vibes only.', // TODO: replace with real client content
    location: 'East Austin, Texas', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Love', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Cut & colour studio — East Austin', // TODO: replace with real client content
    heading: 'Goldie Hawthorne', // TODO: replace with real client content
    tagline: 'Big hair, warm colour, good vibes only.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'See the hair',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t10-hero/1200/1200', // TODO: replace with real client content
      alt: 'Placeholder: client with a voluminous copper shag and curtain bangs, laughing in the sun', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'Hey there',
    heading: 'Hair with volume, warmth and a whole lot of personality.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Goldie. For nine years I’ve been cutting shags, shaping curls and painting honey and copper tones in a sunny little studio full of plants and old records.', // TODO: replace with real client content
      'My favourite hair has movement and a bit of attitude. We’ll find the shape that suits your texture and routine, then warm it up with colour that glows.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Shags & curtain bangs', 'Curly cuts', 'Copper & honey colour'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t10-about/800/1400', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist with a golden shag, wearing a patterned shirt', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'The hair',
    heading: 'Fresh from the chair',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t10-g1/700/1400', full: 'https://picsum.photos/seed/t10-g1/1000/2000', alt: 'Placeholder: shaggy mullet with feathered layers' },
      { src: 'https://picsum.photos/seed/t10-g2/700/1400', full: 'https://picsum.photos/seed/t10-g2/1000/2000', alt: 'Placeholder: bouncy defined curls with copper glow' },
      { src: 'https://picsum.photos/seed/t10-g3/700/1400', full: 'https://picsum.photos/seed/t10-g3/1000/2000', alt: 'Placeholder: curtain bangs with a long layered shag' },
      { src: 'https://picsum.photos/seed/t10-g4/700/1400', full: 'https://picsum.photos/seed/t10-g4/1000/2000', alt: 'Placeholder: honey balayage on big blown-out waves' },
      { src: 'https://picsum.photos/seed/t10-g5/700/1400', full: 'https://picsum.photos/seed/t10-g5/1000/2000', alt: 'Placeholder: rounded curly shag on coily hair' },
      { src: 'https://picsum.photos/seed/t10-g6/700/1400', full: 'https://picsum.photos/seed/t10-g6/1000/2000', alt: 'Placeholder: auburn wolf cut with texture' },
      { src: 'https://picsum.photos/seed/t10-g7/700/1400', full: 'https://picsum.photos/seed/t10-g7/1000/2000', alt: 'Placeholder: feathered 70s blowout' },
      { src: 'https://picsum.photos/seed/t10-g8/700/1400', full: 'https://picsum.photos/seed/t10-g8/1000/2000', alt: 'Placeholder: golden blonde face-framing highlights' },
      { src: 'https://picsum.photos/seed/t10-g9/700/1400', full: 'https://picsum.photos/seed/t10-g9/1000/2000', alt: 'Placeholder: chin-length shag with a blunt fringe' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'Pick a record',
    intro: 'Every appointment includes a consultation and a styling lesson. Hover a sleeve to spin it. Prices are starting points.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'The Shag', description: 'Textured, layered shag with a wash and style.', duration: '75 min', price: '$95' },
      { name: 'Curly cut', description: 'Dry, curl-by-curl shaping and a diffuse.', duration: '90 min', price: '$110' },
      { name: 'Curtain bangs', description: 'Fresh fringe cut and blow-dry lesson.', duration: '30 min', price: '$35' },
      { name: 'Honey balayage', description: 'Hand-painted warmth with toner.', duration: '3 hr', price: '$240+' },
      { name: 'Copper glow', description: 'All-over copper colour with gloss.', duration: '2 hr', price: '$150' },
      { name: 'Big blowout', description: 'Wash and a big, bouncy 70s blow-dry.', duration: '45 min', price: '$60' },
      { name: 'Gloss', description: 'Shine and tone refresh between colours.', duration: '45 min', price: '$70' },
      { name: 'Consult', description: 'Plan a big change. Credited to your service.', duration: '20 min', price: 'Free' },
    ],
    note: 'Colour-correction and big transformations need a consultation first so we can plan it together.', // TODO: replace with real client content
    ctaLabel: 'Book a service',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Love notes',
    heading: 'Greetings from happy clients',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'Goldie gave me the shag of my dreams. It’s effortless, it moves, and I get stopped in the street.', name: 'Jess R.', detail: 'Shag client' },
      { quote: 'My curls have never looked this good. She actually taught me how to style them myself.', name: 'Tanya W.', detail: 'Curly cut client' },
      { quote: 'The copper is unreal, like a sunset. The studio vibe alone is worth the trip.', name: 'Morgan L.', detail: 'Colour client' },
    ],
  },

  // --------------------------------------------------------------------------
  // OPTIONAL SECTIONS — hidden until `enabled: true`. When you switch one on,
  // also add it to nav.links if it should appear in the menu, e.g.
  // { label: 'FAQ', href: '#faq' }. Events sits after Services; Policies and
  // FAQ sit just before Contact.
  // --------------------------------------------------------------------------
  events: {
    enabled: false,
    label: 'Bridal & events',
    heading: 'For the big days.',
    intro: 'Wedding mornings, engagements and special occasions, in the studio or on location.', // TODO: replace with real client content
    // TODO: replace with real client content — all packages below
    packages: [
      { name: 'Bridal trial', price: '$150', description: 'A full run-through of your wedding-day look, about 90 minutes.' },
      { name: 'Wedding day', price: 'from $250', description: 'Styling on the morning, on location or in the studio.' },
      { name: 'Bridal party', price: 'from $95 each', description: 'Bridesmaids, mothers and anyone else getting ready with you.' },
    ],
    note: 'Travel within 20 miles is included. Dates book up early, so enquire as soon as you can.', // TODO: replace with real client content
    ctaLabel: 'Enquire about your date', // links to the contact form
  },

  policies: {
    enabled: false,
    label: 'Policies',
    heading: 'Good to know before you book.',
    // TODO: replace with real client content — all policies below
    items: [
      { title: 'Deposits', text: 'A 25% deposit secures your appointment and comes off your final bill.' },
      { title: 'Cancellations', text: 'Please give at least 48 hours’ notice to move or cancel. Late cancellations lose the deposit.' },
      { title: 'Running late', text: 'Arriving more than 15 minutes late may mean a shorter service or a new booking.' },
      { title: 'Colour services', text: 'New colour clients need a patch test at least 48 hours before their first appointment.' },
    ],
  },

  faq: {
    enabled: false,
    label: 'FAQ',
    heading: 'Questions, answered.',
    // TODO: replace with real client content — all questions below
    items: [
      { q: 'Do you offer consultations?', a: 'Yes. Free 15-minute consultations, in person or by video. Book one online or send a message.' },
      { q: 'How should I arrive?', a: 'With clean, dry hair unless your service includes a wash, plus any inspiration photos you love.' },
      { q: 'How long will my appointment take?', a: 'Each service lists a typical time. Colour and big changes can run longer, so plan a little extra.' },
      { q: 'How can I pay?', a: 'All major cards, Apple Pay and cash.' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Say hi',
    heading: 'Let’s get groovy.',
    intro: 'Got questions or a big change in mind? Drop me a note with a few photos of your hair and I’ll reply within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(512) 555-0161', // TODO: replace with real client content
    address: '1970 Placeholder St, Suite B, Austin, TX 78702', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Ready to book?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'Tell me about your hair and the vibe you’re after.' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send it',
      sendingLabel: 'Sending…',
      successMessage: 'Far out! Your message is on its way. I’ll be in touch soon.',
      errorMessage: 'Bummer, something went wrong. Please try again, or email me directly.',
      privacyNote: 'Your details are only used to reply to you.',
      privacyLabel: 'Privacy policy',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Studio hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Wed – Fri', time: '10am – 7pm' },
      { days: 'Saturday', time: '9am – 5pm' },
      { days: 'Sun – Tue', time: 'Closed' },
    ],
    contactHeading: 'Find the studio',
    socialHeading: 'Follow along',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Goldie Hawthorne Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
    privacyLabel: 'Privacy policy',
  },

  // --------------------------------------------------------------------------
  // PRIVACY POLICY — the /privacy/ page, linked under the contact form and in
  // the footer. {business}, {email} and {address} are filled in from the
  // details above, and the cookies paragraph follows the analytics settings.
  // Have the client read it and change anything that doesn't match how they work.
  // --------------------------------------------------------------------------
  privacy: {
    title: 'Privacy policy',
    updatedLabel: 'Last updated',
    updated: 'October 2, 2026', // TODO: replace with real client content — the date the site goes live
    backLabel: 'Back to the site',
    intro: 'This policy explains what {business} collects through this website and how it is used.',
    sections: [
      { heading: 'What we collect', paragraphs: ['When you use the contact form, we receive your name, email address, phone number if you give it, and your message. Nothing else is collected through this site.'] },
      { heading: 'Booking', paragraphs: ['Appointments are booked through a separate booking service. When you book there, that service’s own privacy policy applies.'] },
      { heading: 'How we use it', paragraphs: ['Only to reply to you and arrange your appointment. We never sell your details or add you to marketing emails without asking first.'] },
      { heading: 'Where it’s kept', paragraphs: ['Contact form messages are stored by our website host, Netlify, and sent to us by email. We delete them once they’re no longer needed.'] },
      { heading: 'Cookies and analytics', auto: 'cookies' },
      { heading: 'Your choices', paragraphs: ['You can ask to see, correct or delete the details we hold about you by emailing {email}.'] },
      { heading: 'Children', paragraphs: ['This website isn’t aimed at children under 13, and we don’t knowingly collect their details.'] },
      { heading: 'Contact', paragraphs: ['{business}, {address}. Email: {email}.'] },
    ],
    // The cookies section uses one of these, picked from `analytics` below.
    cookies: {
      none: 'This website doesn’t use cookies or any tracking.',
      umami: 'We count visits with Umami, a privacy-friendly analytics tool that doesn’t use cookies or collect personal details.',
      ga4: 'We use Google Analytics to see how visitors use this site. It sets cookies, which you can block in your browser settings.',
    },
  },

  // --------------------------------------------------------------------------
  // DEMO BANNER — a strip saying this is a demo with sample content. Only for
  // the public template demos: tools/new-client.sh deletes this block for real
  // clients (or delete it by hand).
  // --------------------------------------------------------------------------
  demo: {
    text: 'Demo website with sample content, designed by Andrew Makris.',
    linkLabel: 'See all 10 designs',
    url: 'https://andrew-makris.netlify.app/#designs',
  },

  // --------------------------------------------------------------------------
  // GOOGLE BUSINESS DETAILS — read by search engines, not shown on the page.
  // Name, phone, email, socials and booking link come from the sections above;
  // keep the address and hours here in step with Contact and the footer.
  // Hours use 24-hour times; leave out closed days.
  // --------------------------------------------------------------------------
  localBusiness: {
    type: 'HairSalon', // or 'BeautySalon' for wider beauty services
    priceRange: '$$', // $ – $$$$
    // TODO: replace with real client content
    address: { street: '1970 Placeholder St, Suite B', city: 'Austin', region: 'TX', postalCode: '78702', country: 'US' },
    // TODO: replace with real client content
    hours: [
      { days: ['Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
      { days: ['Saturday'], opens: '09:00', closes: '17:00' },
    ],
  },

  // --------------------------------------------------------------------------
  // ANALYTICS — counts visitors plus taps on Book, phone and email links.
  // Off until an ID is filled in. Use one of:
  //   Umami (umami.is, no cookies)  → the site's Website ID
  //   Google Analytics 4            → the Measurement ID, e.g. 'G-XXXXXXXXXX'
  // --------------------------------------------------------------------------
  analytics: {
    umamiWebsiteId: '',
    ga4MeasurementId: '',
  },
};
