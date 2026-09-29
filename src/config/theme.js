/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components use the Tailwind utilities generated from
 *  these tokens (bg-paper, text-ink, bg-accent, bg-mustard, font-heading, …):
 *
 *    colors.paper / cream / ink / muted / line / accent / onAccent / onInk
 *      → the core palette (see README)
 *    colors.mustard / avocado / rust
 *      → this template's extra retro stripe colours. Text on mustard and
 *        avocado is always `ink`; text on rust is always `onInk`.
 *
 *    fonts.heading  → font-heading   (chunky retro display face)
 *    fonts.body     → font-body      (body copy, UI, buttons)
 *
 *  If you change font families, update `fonts.googleFontsUrl` to load them.
 * ============================================================================
 */

export const theme = {
  // Template 10 — Groovy / 1970s retro. All text/background pairs used meet WCAG AA.
  colors: {
    paper: '#FBF1E1', // warm cream
    cream: '#F4DFC0', // sand
    ink: '#3A2215', // chocolate brown
    muted: '#6E5140',
    line: '#E3CBA8',
    accent: '#A23E15', // burnt orange — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#FBF1E1',
    mustard: '#E4A33A',
    avocado: '#9AA84A',
    rust: '#8E3517',
  },

  fonts: {
    heading: "'Shrikhand', 'Cooper Black', Georgia, serif",
    body: "'Outfit', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Shrikhand&display=swap',
  },
};
