import { esc, external, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

const sleeves = ['bg-accent text-on-accent', 'bg-mustard text-ink', 'bg-avocado text-ink', 'bg-rust text-on-ink'];
const labels = ['bg-mustard', 'bg-accent', 'bg-rust', 'bg-avocado'];

/** Each service is an album sleeve; a vinyl record peeks out and slides further (spinning) on hover. */
export function Services({ services, booking }) {
  const records = services.items
    .map(
      (s, i) => `
      <li class="group">
        <div class="relative w-[82%]">
          <div class="vinyl absolute inset-y-[4%] right-0 aspect-square translate-x-[10%] rounded-full transition-transform duration-700 ease-out group-hover:translate-x-[20%] group-hover:rotate-180" aria-hidden="true">
            <span class="absolute inset-[34%] rounded-full ${labels[i % labels.length]}"></span>
            <span class="absolute inset-[48%] rounded-full bg-paper"></span>
          </div>
          <article class="relative z-10 flex aspect-square flex-col justify-between rounded-2xl p-6 shadow-lg shadow-ink/20 ${sleeves[i % sleeves.length]}">
            <h3 class="font-heading text-3xl leading-tight">${esc(s.name)}</h3>
            <div class="flex items-end justify-between gap-3">
              <span class="rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span>
              <span class="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-paper font-heading text-lg text-ink"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</span>
            </div>
          </article>
        </div>
        ${s.description ? `<p class="mt-4 w-[82%] text-sm leading-relaxed text-muted">${esc(s.description)}</p>` : ''}
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-24 bg-paper px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="services-heading">
  <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-2xl text-center">
      ${sectionLabel(services.label)}
      <h2 id="services-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(services.heading)}</h2>
      <p class="mt-5 text-lg text-muted">${esc(services.intro)}</p>
    </div>
    <ul class="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">${records}</ul>
    <div class="mt-16 flex flex-col items-center gap-6 rounded-[2rem] bg-cream p-6 text-center md:flex-row md:justify-between md:p-8 md:text-left">
      ${services.note ? `<p class="max-w-2xl font-medium text-ink">${esc(services.note)}</p>` : '<span></span>'}
      <a href="${esc(booking.url)}" ${external} class="shrink-0 ${buttonClasses.solid}">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
