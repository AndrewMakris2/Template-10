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
  },
};
