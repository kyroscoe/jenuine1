document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('MobileMenu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.hidden = isOpen;
      const icon = menuButton.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'ri-menu-line' : 'ri-close-line';
      }
    });
  }

  const filterRoot = document.querySelector('[data-store-filter]');
  if (filterRoot) {
    const buttons = filterRoot.querySelectorAll('[data-filter]');
    const cards = document.querySelectorAll('[data-category]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        buttons.forEach((item) => item.classList.toggle('is-active', item === button));
        cards.forEach((card) => {
          card.hidden = filter !== 'all' && card.getAttribute('data-category') !== filter;
        });
      });
    });
  }

  const tabsRoot = document.querySelector('[data-tabs]');
  if (tabsRoot) {
    const buttons = tabsRoot.querySelectorAll('[data-tab-button]');
    const panels = tabsRoot.querySelectorAll('[data-tab-panel]');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab-button');
        buttons.forEach((item) => item.classList.toggle('is-active', item === button));
        panels.forEach((panel) => {
          panel.hidden = panel.getAttribute('data-tab-panel') !== tab;
        });
      });
    });
  }

  document.querySelectorAll('[data-product-gallery]').forEach((gallery) => {
    const mainImage = gallery.querySelector('[data-main-image]');
    const thumbnails = gallery.querySelectorAll('[data-gallery-thumbnail]');

    if (!mainImage || thumbnails.length === 0) {
      return;
    }

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', () => {
        const fullImage = thumbnail.getAttribute('data-full-image');
        const imageAlt = thumbnail.getAttribute('data-image-alt') || '';

        if (!fullImage) {
          return;
        }

        mainImage.setAttribute('src', fullImage);
        mainImage.setAttribute('alt', imageAlt);

        thumbnails.forEach((item) => {
          const isActive = item === thumbnail;
          item.classList.toggle('is-active', isActive);
          item.setAttribute('aria-current', String(isActive));
        });
      });
    });
  });
});
