import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';
import { icon } from './icons.js';

const inputClasses =
  'mt-2 block w-full rounded-full border-2 border-line bg-paper px-5 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none';
const labelClasses = 'pl-2 text-sm font-semibold text-ink';

/** A big burnt-orange panel: invitation and details on the left, a cream form card on the right. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;

  return `
<section id="contact" class="scroll-mt-24 bg-paper px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28" aria-labelledby="contact-heading">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-[3rem] bg-accent p-8 text-on-accent md:p-14 lg:grid-cols-2 lg:gap-14">
    <div>
      ${sectionLabel(contact.label, 'light')}
      <h2 id="contact-heading" class="mt-3 font-heading text-5xl leading-tight md:text-6xl">${esc(contact.heading)}</h2>
      <p class="mt-6 text-lg leading-relaxed">${esc(contact.intro)}</p>
      <dl class="mt-10 space-y-5">
        <div><dt class="text-xs font-semibold uppercase tracking-[0.2em]">${esc(contact.detailsLabels.email)}</dt><dd class="mt-1 text-lg"><a href="mailto:${esc(contact.email)}" class="underline decoration-2 underline-offset-4 hover:no-underline">${esc(contact.email)}</a></dd></div>
        <div><dt class="text-xs font-semibold uppercase tracking-[0.2em]">${esc(contact.detailsLabels.phone)}</dt><dd class="mt-1 text-lg"><a href="${esc(telHref(contact.phone))}" class="underline decoration-2 underline-offset-4 hover:no-underline">${esc(contact.phone)}</a></dd></div>
        <div><dt class="text-xs font-semibold uppercase tracking-[0.2em]">${esc(contact.detailsLabels.studio)}</dt><dd class="mt-1"><address class="not-italic">${esc(contact.address)}</address></dd></div>
      </dl>
      <div class="mt-10">
        <p class="font-heading text-2xl">${esc(contact.bookingHeading)}</p>
        <a href="${esc(booking.url)}" ${external} class="mt-4 ${buttonClasses.mustard}">${esc(contact.bookingLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      </div>
    </div>

    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-5 self-start rounded-[2rem] bg-paper p-6 text-ink md:p-8" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div>
        <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
        <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
      </div>
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
        <div>
          <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
          <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
        </div>
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="5" required class="${inputClasses} !rounded-3xl resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <button type="submit" class="w-full ${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
      <p class="hidden rounded-2xl bg-mustard p-4 font-medium text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden rounded-2xl bg-cream p-4 font-medium text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      <p class="text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
    </form>
  </div>
</section>`;
}
