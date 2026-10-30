export type Locale = 'ru' | 'kk';

export const localeLabels = { ru: 'Рус', kk: 'Қаз' } as const;

export const routes = {
  home: { ru: '/', kk: '/kk/' },
  callout: { ru: '/vyezdnoy-avtoelektrik-karaganda/', kk: '/kk/shakyrtumen-avtoelektrik-karagandy/' },
  diagnostics: { ru: '/diagnostika-avto-karaganda/', kk: '/kk/avtokolik-diagnostikasy-karagandy/' },
  wiring: { ru: '/remont-provodki-karaganda/', kk: '/kk/avtokolik-symdaryn-zhondeu-karagandy/' },
  starting: { ru: '/ne-zavoditsya-avtomobil-karaganda/', kk: '/kk/avtokolik-iske-kosylmaidy-karagandy/' },
  contacts: { ru: '/contacts/', kk: '/kk/contacts/' },
  privacy: { ru: '/privacy/', kk: '/kk/privacy/' }
} as const;

export type RouteKey = keyof typeof routes;

export const ui = {
  ru: {
    services: 'Услуги', callout: 'Выезд', diagnostics: 'Диагностика', wiring: 'Проводка', contacts: 'Контакты',
    phone: 'Позвонить', whatsapp: 'Написать в WhatsApp', olx: 'Объявление на OLX', details: 'Подробнее',
    footerText: 'Диагностика и ремонт автомобильной электрики. Мастерская в центре города и выезд по согласованию.',
    privacy: 'Обработка данных', quick: 'Быстрые действия', menu: 'Открыть меню', home: 'Главная'
  },
  kk: {
    services: 'Қызметтер', callout: 'Шақырту', diagnostics: 'Диагностика', wiring: 'Сымдар', contacts: 'Байланыс',
    phone: 'Қоңырау шалу', whatsapp: 'WhatsApp-қа жазу', olx: 'OLX хабарландыруы', details: 'Толығырақ',
    footerText: 'Автокөлік электр жабдығын диагностикалау және жөндеу. Қала орталығындағы шеберхана және келісім бойынша шақырту.',
    privacy: 'Деректерді өңдеу', quick: 'Жылдам әрекеттер', menu: 'Мәзірді ашу', home: 'Басты бет'
  }
} as const;
