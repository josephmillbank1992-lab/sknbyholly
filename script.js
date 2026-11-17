const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#mobile-nav');
function closeMenu() {
  navigation.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
const bookingUrl = window.SKN_CONFIG?.bookingUrl;
if (bookingUrl && /^https:\/\//.test(bookingUrl)) {
  document.querySelectorAll('[data-booking]').forEach(link => { link.href = bookingUrl; });
  document.querySelector('#primary-booking').href = bookingUrl;
  document.querySelector('#primary-booking').innerHTML = 'Book your appointment <span aria-hidden="true">↗</span>';
  document.querySelector('#booking-message').textContent = 'Choose your treatment and find a time that works for you. If you have a question first, Holly is only a message away.';
}

// Treatment choices are carried to a WhatsApp draft, never submitted silently.
const enquiryForm = document.querySelector('#enquiry-form');
enquiryForm.hidden = false;
const treatmentSelect = document.querySelector('#enquiry-treatment');
const treatmentChoices = [...document.querySelectorAll('[data-treatment]')];
for (const choice of treatmentChoices) {
  treatmentSelect.add(new Option(choice.dataset.treatment, choice.dataset.treatment));
  choice.addEventListener('click', () => {
    treatmentSelect.value = choice.dataset.treatment;
    document.querySelector('#booking').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    treatmentSelect.focus({preventScroll: true});
  });
}
enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  const day = document.querySelector('#enquiry-day').value;
  const note = document.querySelector('#enquiry-note').value.trim();
  const message = `Hi Holly, I’d like to enquire about: ${treatmentSelect.value}.\nPreferred day: ${day}.${note ? `\n\n${note}` : ''}`;
  window.open(`https://wa.me/447511940227?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
