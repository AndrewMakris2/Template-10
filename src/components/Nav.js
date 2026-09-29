import { esc, external, stripes, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Cream bar with the name in the retro face, pill links, and four stripes along the bottom. */
export function Nav({ business, nav, social, booking }) {
  const instagram = social.find((s) => s.platform === 'instagram');
  const links = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-cream">${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l) =>
        `<li><a href="${esc(l.href)}" class="block py-2 font-heading text-5xl text-ink transition-transform hover:translate-x-2" data-menu-link>${esc(l.label)}</a></li>`,
    )
    .join('');

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="sticky top-0 z-50 bg-paper" data-header>
  <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8" aria-label="Primary">
    <a href="#top" class="whitespace-nowrap font-heading text-2xl text-accent md:text-3xl">${esc(business.name)}</a>
    <div class="hidden items-center gap-3 lg:flex">
      <ul class="flex items-center">${links}</ul>
      ${instagram ? `<a href="${esc(instagram.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-mustard" aria-label="${esc(instagram.label)}">${icon('instagram', 'h-5 w-5')}</a>` : ''}
      <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid} !px-6 !py-2.5 !text-sm">${esc(booking.label)}</a>
    </div>
    <button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mustard text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
      <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
      <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
    </button>
  </nav>
  ${stripes()}
  <div id="mobile-menu" class="fixed inset-x-0 bottom-0 top-[5.5rem] overflow-y-auto bg-mustard px-6 pb-12 pt-8 md:top-[6.5rem] lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-10 w-full ${buttonClasses.solid}">${esc(booking.label)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
  </div>
</header>`;
}
