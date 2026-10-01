import { esc, sectionLabel } from './utils.js';

const dots = ['bg-mustard text-ink', 'bg-accent text-on-accent', 'bg-rust text-on-ink', 'bg-avocado text-ink'];

/** Optional booking policies as warm cards with numbered dots. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p, i) => `
      <div class="flex gap-5 rounded-2xl bg-cream p-6">
        <span class="grid h-12 w-12 shrink-0 place-items-center rounded-full font-heading text-2xl ${dots[i % dots.length]}" aria-hidden="true">${i + 1}</span>
        <div>
          <dt class="font-heading text-2xl text-ink">${esc(p.title)}</dt>
          <dd class="mt-2 text-sm leading-relaxed text-muted">${esc(p.text)}</dd>
        </div>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-24 bg-paper px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="policies-heading">
  <div class="mx-auto max-w-5xl">
    <div class="text-center">
      ${sectionLabel(policies.label)}
      <h2 id="policies-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(policies.heading)}</h2>
    </div>
    <dl class="mt-14 grid gap-5 md:grid-cols-2">${items}</dl>
  </div>
</section>`;
}
