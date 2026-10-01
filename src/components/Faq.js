import { esc, sectionLabel } from './utils.js';

/** Optional FAQ as rounded cards on a mustard band (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group rounded-2xl bg-paper shadow-md shadow-ink/10">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-2xl text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-body text-2xl leading-none text-on-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="px-6 pb-6 text-base leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-24 bg-mustard px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="faq-heading">
  <div class="mx-auto max-w-3xl">
    <div class="text-center">
      ${sectionLabel(faq.label, 'ink')}
      <h2 id="faq-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(faq.heading)}</h2>
    </div>
    <div class="mt-12 space-y-4">${items}</div>
  </div>
</section>`;
}
