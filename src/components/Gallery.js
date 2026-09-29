import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

// Staggered heights: one pattern for the 3-column phone grid, one for the 5-column desktop grid.
const stagger = (i) => `${['', 'mt-10', ''][i % 3]} ${['md:mt-0', 'md:mt-14', 'md:mt-28', 'md:mt-14', 'md:mt-0'][i % 5]}`;
const rings = ['ring-accent', 'ring-mustard', 'ring-avocado', 'ring-rust'];

/** Tall pill-shaped frames with coloured rings, staggered like a 70s poster. */
export function Gallery({ gallery }) {
  const items = gallery.images
    .map(
      (img, i) => `
      <li class="${stagger(i)}">
        <button type="button" class="group block aspect-[1/2] w-full overflow-hidden rounded-full bg-paper ring-4 ring-offset-4 ring-offset-cream transition-transform duration-300 hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink ${rings[i % rings.length]}" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
        </button>
      </li>`,
    )
    .join('');
  const ctrl = 'absolute inline-flex h-12 w-12 items-center justify-center rounded-full';

  return `
<section id="gallery" class="scroll-mt-24 bg-cream px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="gallery-heading">
  <div class="mx-auto max-w-6xl text-center">
    ${sectionLabel(gallery.label)}
    <h2 id="gallery-heading" class="mt-3 font-heading text-5xl text-ink md:text-6xl">${esc(gallery.heading)}</h2>
  </div>
  <ul class="mx-auto mt-14 grid max-w-6xl grid-cols-3 gap-x-4 gap-y-10 pb-10 sm:gap-x-6 md:grid-cols-5 md:gap-x-8 md:pb-28">${items}</ul>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-4 md:p-16" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full rounded-[2rem] object-contain" data-lightbox-img />
    </div>
    <button type="button" class="${ctrl} right-4 top-4 bg-mustard text-ink" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-6 w-6')}</button>
    <button type="button" class="${ctrl} left-3 top-1/2 -translate-y-1/2 bg-paper text-ink md:left-6" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-6 w-6')}</button>
    <button type="button" class="${ctrl} right-3 top-1/2 -translate-y-1/2 bg-paper text-ink md:right-6" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-6 w-6')}</button>
    <p class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-paper px-4 py-1 font-heading text-base text-ink" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
