import { customScrollToElement } from '../helpers/scroll';

const menuBtn = document.querySelector('.js-header-menu-btn');
const headerMenuRef = document.querySelector('.js-header-menu');
const headerOrderLinkRef = document.querySelector('.js-header-order-link');

if (menuBtn && headerMenuRef) {
  menuBtn.addEventListener('click', () => {
    headerMenuRef.classList.toggle('isopen');
  });

  headerMenuRef.addEventListener('click', handleLinkClick);
}

if (headerOrderLinkRef) {
  headerOrderLinkRef.addEventListener('click', handleLinkClick);
}

function handleLinkClick(event) {
  event.preventDefault();
  const item = event.target.closest('a');
  if (!item) return;
  const targetId = item.getAttribute('href').substring(1);
  customScrollToElement(targetId);

  if (headerMenuRef && headerMenuRef.classList.contains('isopen')) {
    headerMenuRef.classList.remove('isopen');
  }
}
