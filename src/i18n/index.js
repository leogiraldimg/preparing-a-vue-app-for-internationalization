import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    routes: {
      items: 'Items',
      about: 'About us'
    },
    cart: {
      cart: 'Cart',
      subtotal: 'Subtotal',
      clearButton: 'Remove this item'
    },
    aboutUs: {
      firstParagraph: 'Learn more @.lower:routes.about{\'.\'}',
      secondParagraph:
        'We are a small company with big dreams. Our goal is to provide items to all of the people in the world. Stay tuned, because your country might be our next destination!',
      popularItem:
        'The most popular item on the website is the { itm }, but not for long!'
    }
  },
  hr: {
    routes: {
      items: 'Artikli',
      about: 'O nama'
    },
    cart: {
      cart: 'Kosarica',
      subtotal: 'Ukupno',
      clearButton: 'Ukloni ovaj artikl'
    },
    aboutUs: {
      firstParagraph: 'Saznajte više @.lower:routes.about{\'.\'}',
      secondParagraph:
        'Mi smo mala tvrtka s velikim snovima. Naš cilj je pružiti artikle svim ljudima u svijetu. Ostanite uz nas, jer bi vaša zemlja mogla biti naše sljedeće odredište!',
      popularItem:
        'The most popular item on the website is the { itm }, but not for long!'
    }
  }
};

export default createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'hr',
  globalInjection: true,
  messages: messages
});
