import { esc, external, waveStripes, telHref } from './utils.js';
import { icon } from './icons.js';

const socialColors = ['bg-mustard text-ink', 'bg-avocado text-ink', 'bg-accent text-on-accent'];

/** Wavy stripes into a chocolate footer with a mustard name. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours.map((h) => `<div class="flex justify-between gap-6"><dt>${esc(h.days)}</dt><dd class="font-semibold text-on-ink">${esc(h.time)}</dd></div>`).join('');
  const socials = social
    .map(
      (s, i) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-12 w-12 items-center justify-center rounded-full ${socialColors[i % socialColors.length]} transition-transform hover:-translate-y-1" aria-label="${esc(s.label)}">${icon(s.platform)}</a></li>`,
    )
    .join('');
  const heading = 'font-heading text-xl text-mustard';

  return `
<footer class="bg-paper">
  ${waveStripes('h-14 md:h-20')}
  <div class="bg-ink px-5 pb-10 pt-14 text-on-ink/80 md:px-8">
    <div class="mx-auto max-w-6xl">
      <a href="#top" class="font-heading text-5xl text-mustard md:text-7xl">${esc(business.name)}</a>
      <p class="mt-3 max-w-md text-lg">${esc(business.tagline)}</p>
      <div class="mt-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
          <dl class="mt-3 max-w-xs space-y-1 text-sm">${hours}</dl>
        </div>
        <div>
          <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
          <address class="mt-3 space-y-1 text-sm not-italic">
            <p>${esc(contact.address)}</p>
            <p><a href="mailto:${esc(contact.email)}" class="font-semibold text-on-ink underline underline-offset-2">${esc(contact.email)}</a></p>
            <p><a href="${esc(telHref(contact.phone))}" class="font-semibold text-on-ink underline underline-offset-2">${esc(contact.phone)}</a></p>
          </address>
        </div>
        <div>
          <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
          <ul class="mt-4 flex gap-3">${socials}</ul>
        </div>
      </div>
      <div class="mt-14 flex flex-col gap-3 border-t border-on-ink/20 pt-6 text-sm sm:flex-row sm:justify-between">
        <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
        <a href="#top" class="inline-flex items-center gap-2 font-semibold text-on-ink hover:text-mustard">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
      </div>
    </div>
  </div>
</footer>`;
}
