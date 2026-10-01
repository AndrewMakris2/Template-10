import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

const bands = ['bg-accent', 'bg-mustard', 'bg-rust'];

/** Optional bridal / events packages as ticket-style cards. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const cards = events.packages
    .map(
      (p, i) => `
      <li class="flex flex-col overflow-hidden rounded-2xl bg-paper shadow-lg shadow-ink/20">
        <span class="block h-3 ${bands[i % bands.length]}" aria-hidden="true"></span>
        <div class="flex-1 p-6">
          <h3 class="font-heading text-3xl leading-tight text-ink">${esc(p.name)}</h3>
          ${p.description ? `<p class="mt-3 text-sm leading-relaxed text-muted">${esc(p.description)}</p>` : ''}
        </div>
        <p class="mx-6 mb-6 border-t-2 border-dashed border-line pt-4 font-heading text-2xl text-accent">${esc(p.price)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-24 bg-avocado px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="events-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(events.label, 'ink')}
      <h2 id="events-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(events.heading)}</h2>
      <p class="mt-5 text-lg text-ink">${esc(events.intro)}</p>
    </div>
    <ul class="mt-14 grid gap-8 md:grid-cols-3">${cards}</ul>
    <div class="mt-14 flex flex-col items-center gap-6 rounded-[2rem] bg-paper/90 p-6 text-center md:flex-row md:justify-between md:p-8 md:text-left">
      ${events.note ? `<p class="max-w-2xl font-medium text-ink">${esc(events.note)}</p>` : '<span></span>'}
      <a href="#contact" class="shrink-0 ${buttonClasses.solid}">${esc(events.ctaLabel)} ${icon('arrowRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
