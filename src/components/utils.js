/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Section label in the retro display face. tone: 'accent' (default), 'ink' (on mustard), 'light' (on orange). */
export function sectionLabel(text, tone = 'accent') {
  const color = tone === 'ink' ? 'text-ink' : tone === 'light' ? 'text-on-accent' : 'text-accent';
  return `<p class="font-heading text-xl ${color} md:text-2xl">${esc(text)}</p>`;
}

/** Four flat retro stripes. Decorative. */
export function stripes(cls = '') {
  return `<div class="flex flex-col ${cls}" aria-hidden="true"><span class="h-1.5 bg-rust"></span><span class="h-1.5 bg-accent"></span><span class="h-1.5 bg-mustard"></span><span class="h-1.5 bg-avocado"></span></div>`;
}

/** Four wavy retro stripes as a full-width divider. Decorative. */
export function waveStripes(cls = '') {
  const colors = ['text-rust', 'text-accent', 'text-mustard', 'text-avocado'];
  const paths = colors
    .map((c, n) => {
      const y = 24 + n * 16;
      let d = `M0 ${y}`;
      for (let x = 0; x < 1440; x += 240) d += ` Q ${x + 60} ${y - 22} ${x + 120} ${y} T ${x + 240} ${y}`;
      return `<path class="${c}" d="${d}" fill="none" stroke="currentColor" stroke-width="14" />`;
    })
    .join('');
  return `<svg class="block w-full ${cls}" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">${paths}</svg>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — round and friendly. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-on-accent transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  mustard:
    'inline-flex items-center justify-center gap-2 rounded-full bg-mustard px-8 py-3.5 text-base font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink',
  outline:
    'inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-8 py-3 text-base font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
