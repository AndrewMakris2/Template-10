import { esc, sectionLabel } from './utils.js';

const chipColors = ['bg-paper text-ink', 'bg-rust text-on-ink', 'bg-avocado text-ink'];

/** A big rounded mustard panel with a pill-shaped portrait. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map((t, i) => `<li class="rounded-full px-5 py-2 text-sm font-semibold ${chipColors[i % chipColors.length]}">${esc(t)}</li>`)
    .join('');

  return `
<section id="about" class="scroll-mt-24 bg-paper px-5 py-20 md:scroll-mt-28 md:px-8 md:py-24" aria-labelledby="about-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 rounded-[3rem] bg-mustard p-8 md:grid-cols-12 md:p-14">
    <figure class="md:col-span-4">
      <div class="mx-auto aspect-[1/2] w-40 overflow-hidden rounded-full border-4 border-ink bg-cream sm:w-48 md:w-full md:max-w-[15rem]">
        <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover" loading="lazy" decoding="async" width="800" height="1400" />
      </div>
    </figure>
    <div class="md:col-span-8">
      ${sectionLabel(about.label, 'ink')}
      <h2 id="about-heading" class="mt-4 font-heading text-4xl leading-tight text-ink md:text-5xl">${esc(about.heading)}</h2>
      <div class="mt-6 space-y-4 text-lg leading-relaxed text-ink">${bio}</div>
      <h3 class="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-ink">${esc(about.specialtiesLabel)}</h3>
      <ul class="mt-4 flex flex-wrap gap-3">${tags}</ul>
    </div>
  </div>
</section>`;
}
