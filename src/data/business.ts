export const business = {
  name: 'Автоэлектрик Берик',
  specialist: 'Берик',
  legalType: 'частный специалист',
  city: 'Караганда',
  region: 'Карагандинская область',
  country: 'Казахстан',
  district: 'Казыбекбийский район',
  phone: '+77009452171',
  phoneDisplay: '+7 700 945-21-71',
  whatsapp: '77009452171',
  workshop: 'Мастерская в центре Караганды. Точный адрес и время приезда уточните при обращении.',
  workshopKz: 'Шеберхана Қарағанды орталығында. Нақты мекенжай мен келу уақытын хабарласқанда нақтылаңыз.',
  areaServed: 'Караганда; возможность выезда по конкретному адресу уточняется при обращении.',
  areaServedKz: 'Қарағанды; нақты мекенжайға шығу мүмкіндігін хабарласқанда нақтылаңыз.',
  hours: null,
  address: null,
  olxUrl: 'https://www.olx.kz/d/obyavlenie/avtoelektrik-na-vyezd-po-vsem-markam-avto-IDoUP8S.html',
  locationLabel: 'Новый город, район имени Казыбек би, Караганда',
  locationLabelKz: 'Жаңа қала, Қазыбек би атындағы аудан, Қарағанды',
  coordinates: { latitude: 49.800755, longitude: 73.094039 },
  whatsappText: 'Здравствуйте, Берик! Нужна помощь автоэлектрика в Караганде. Автомобиль: ',
  whatsappTextKz: 'Сәлеметсіз бе, Берік! Қарағандыда автоэлектрик көмегі қажет. Автокөлік: ',
  maps: {
    twoGis: null,
    yandex: 'https://yandex.kz/maps/ru/164/karaganda/?ll=73.093866%2C49.801082&mode=whatshere&whatshere%5Bpoint%5D=73.094039%2C49.800755&whatshere%5Bzoom%5D=17&z=18.8',
    google: null
  }
} as const;

export const contactLinks = {
  phone: `tel:${business.phone}`,
  whatsapp: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappText)}`
};

export function getBusinessSchema(locale: 'ru' | 'kk' = 'ru') {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'LocalBusiness'],
    name: locale === 'ru' ? business.name : 'Автоэлектрик Берік',
    description: locale === 'ru'
      ? 'Диагностика и ремонт автомобильной электрики в Караганде: работа в мастерской и выезд по согласованию.'
      : 'Қарағандыда автокөлік электр жабдығын диагностикалау және жөндеу: шеберхана және келісім бойынша шақырту.',
    inLanguage: locale,
    telephone: business.phone,
    hasMap: business.maps.yandex,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.latitude,
      longitude: business.coordinates.longitude
    },
    areaServed: {
      '@type': 'City',
      name: locale === 'ru' ? business.city : 'Қарағанды'
    },
    sameAs: [business.olxUrl]
  };
}
