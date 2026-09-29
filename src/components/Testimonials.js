import { esc, sectionLabel } from './utils.js';

/** Testimonials as postcards: a stamp with the client's initial, a wavy postmark and "address lines". */
export function Testimonials({ testimonials }) {
  const cards = testimonials.items
    .map((t, i) => {
      const initial = esc(t.name.trim().charAt(0).toUpperCase());
      const tilt = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]'][i % 3];
      return `
      <li>
        <figure class="relative ${tilt} rounded-xl bg-paper p-6 pt-7 shadow-[6px_6px_0_0_var(--color-line)] transition-transform duration-300 hover:rotate-0">
          <span class="absolute right-5 top-5 grid h-16 w-14 place-items-center border-2 border-dashed border-accent font-heading text-3xl text-accent" aria-hidden="true">${initial}</span>
          <svg class="absolute right-16 top-8 h-8 w-20 text-muted/50" viewBox="0 0 80 32" aria-hidden="true"><path d="M0 8 Q10 2 20 8 T40 8 T60 8 T80 8M0 16 Q10 10 20 16 T40 16 T60 16 T80 16M0 24 Q10 18 20 24 T40 24 T60 24 T80 24" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          <blockquote class="mt-16 text-lg font-medium leading-relaxed text-ink"><p>&ldquo;${esc(t.quote)}&rdquo;</p></blockquote>
          <figcaption class="mt-6 space-y-1">
            <span class="block border-b-2 border-dotted border-line pb-1 font-heading text-2xl text-accent">${esc(t.name)}</span>
            ${t.detail ? `<span class="block border-b-2 border-dotted border-line pb-1 text-sm text-muted">${esc(t.detail)}</span>` : ''}
          </figcaption>
        </figure>
      </li>`;
    })
    .join('');

  return `
<section id="testimonials" class="scroll-mt-24 bg-cream px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="testimonials-heading">
  <div class="mx-auto max-w-6xl">
    <div class="text-center">
      ${sectionLabel(testimonials.label)}
      <h2 id="testimonials-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(testimonials.heading)}</h2>
    </div>
    <ul class="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">${cards}</ul>
  </div>
</section>`;
}
