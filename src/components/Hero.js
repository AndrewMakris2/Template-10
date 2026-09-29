import { esc, external, waveStripes, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Big retro name beside a round portrait framed by bold concentric colour rings; wavy stripes beneath. */
export function Hero({ hero, booking }) {
  return `
<section id="top" class="overflow-hidden bg-paper" aria-labelledby="hero-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-12 md:px-8 md:pt-16 lg:grid-cols-2">
    <div>
      <p class="inline-flex rounded-full bg-cream px-4 py-1.5 text-sm font-medium text-ink">${esc(hero.eyebrow)}</p>
      <h1 id="hero-heading" class="mt-6 font-heading text-[clamp(2.5rem,12.5vw,4.5rem)] leading-[0.95] text-ink md:text-7xl xl:text-8xl">${esc(hero.heading)}</h1>
      <p class="mt-6 max-w-md text-xl font-medium leading-snug text-muted md:text-2xl">${esc(hero.tagline)}</p>
      <div class="mt-10 flex flex-wrap gap-4">
        <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
        <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.outline}">${esc(hero.secondaryCtaLabel)}</a>
      </div>
    </div>
    <div class="grid place-items-center py-12">
      <div class="aspect-square w-[64%] max-w-[22rem] overflow-hidden rounded-full bg-cream shadow-[0_0_0_12px_var(--color-mustard),0_0_0_24px_var(--color-accent),0_0_0_36px_var(--color-rust)] md:shadow-[0_0_0_20px_var(--color-mustard),0_0_0_40px_var(--color-accent),0_0_0_60px_var(--color-rust)]">
        <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="h-full w-full object-cover" fetchpriority="high" decoding="async" />
      </div>
    </div>
  </div>
  ${waveStripes('h-14 md:h-20')}
</section>`;
}
