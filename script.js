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
