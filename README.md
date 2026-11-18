# Skn By Holly

Responsive, buildless one-page website for Skn By Holly, Stirling. HTML, CSS and vanilla JavaScript; deploy the repository root to Vercel with Framework Preset **Other**, no build command and output directory `.`.

## Preview

Run `python3 -m http.server 3000` from this directory.

## Booking integration

Set `bookingUrl` in `site-config.js` to Holly's verified HTTPS booking installation once it is live. Until then the booking section explicitly offers WhatsApp and telephone enquiries; it does not collect bookings or payments. This repository does not configure Supabase, Resend or Stripe.

## Content

- Prices transcribed from the supplied 2026/2027 menu.
- Introductory model prices cover December 2026 and January 2027. Core/glutes/thighs/arms: £45 each; core + glutes: £75. The source's £20 saving conflicts with £45 + £45, so no saving amount is advertised.
- The hero uses Holly’s approved 18 November facial-treatment pair, displayed in black and white with a narrow white divider. Other approved skin imagery, Holly’s portrait and body sculpting equipment remain in their respective sections. The original client-on-bed and original treatment-in-progress photos remain excluded.
- Feedback is excerpted from the supplied review screenshot, without invented names or ratings. Ellipsis marks an omitted passage.
- Offers must be reviewed after January 2027. No treatment durations, deposit amounts, efficacy claims or suitability criteria have been invented.
- Add the canonical URL, absolute social image URL and sitemap once the production hostname is confirmed.

## Design direction

See `docs/design-direction.md` for the reference patterns and explicit exclusion of arched/window framing. A treatment choice carries into the enquiry composer; the visitor reviews and sends the message in WhatsApp. No enquiry data is stored by the site.
