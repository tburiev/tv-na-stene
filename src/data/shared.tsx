// ============ ICONS ============
export function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    tv: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    settings: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    satellite: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>,
    antenna: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>,
    speaker: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
    frame: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    phone: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    check: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
    whatsapp: <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    clock: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    location: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    star: <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    arrow: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>,
    shield: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    users: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    calendar: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    tool: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" /></svg>,
    payment: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>,
    cable: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.556a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.374" /></svg>,
    mail: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  };
  return icons[name] || null;
}

// ============ REAL PHOTOS FROM ORIGINAL SITE ============
export const galleryPhotos = [
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/samsung%2075.jpg', title: 'Samsung 75"', desc: 'Установка в гостиной' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/philips%2055.jpg', title: 'Philips 55"', desc: 'Монтаж на стену' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/lg%2042.jpg', title: 'LG 42"', desc: 'Установка в спальне' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_9730.JPG', title: 'Наклонно-поворотный кронштейн', desc: 'Удобный просмотр с любого места' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_9729.JPG', title: 'LG 28"', desc: 'Компактный телевизор на кухне' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/tv-na-stene_23aug.JPG', title: 'Samsung 70" в нише', desc: 'Монтаж в нишу из гипсокартона' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/tv-na-stene_18aug.JPG', title: 'ТВ на коробе воздуховода', desc: 'Установка на кухне' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/tv-na-stene_11aug.JPG', title: 'Плоский кронштейн', desc: 'Минимальный отступ от стены' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/563900ca016ae_IMG_5567.JPG', title: 'LG 4K', desc: 'Телевизор с 4К разрешением' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/563901f17604a_IMG_6205.JPG', title: 'Samsung на оригинальном кронштейне', desc: 'Фирменное крепление' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/5638fc4990d75_IMG_5676.JPG', title: 'Двухколенный кронштейн', desc: 'Максимальная подвижность' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/panasonic.jpg', title: 'Panasonic', desc: 'На кронштейне с наклоном' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5520.JPG', title: 'Samsung 40"', desc: 'Повесить и настроить' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5469.JPG', title: 'Спутниковая антенна SUPRAL', desc: 'Установка на EutelSat 36.0' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5470.JPG', title: 'Триколор на 2 ТВ', desc: 'Установка на дачном участке' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5485.JPG', title: 'Триколор на крыше', desc: 'Монтаж на крыше жилого дома' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4912.JPG', title: 'Philips', desc: 'Установка и настройка' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5060.JPG', title: 'Samsung на стене', desc: 'Отличная работа по монтажу' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5065.JPG', title: 'ArmMedia Cobra + Samsung 55F6800', desc: 'Поворотный кронштейн' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4696.JPG', title: 'Philips с Ambilight', desc: 'Монтаж с системой подсветки' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4649.JPG', title: 'SONY в нишу', desc: 'Подключение 3D плеера' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4876.JPG', title: 'Антенна в коттедже', desc: 'Тест качества и установка' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4877.JPG', title: 'Антенна на 5 ТВ', desc: 'Система в коттедже' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5122.JPG', title: 'Samsung 40" поворотный', desc: 'На поворотном кронштейне' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4974.JPG', title: 'Тарелка на крышу', desc: 'Монтаж на 10-этажный дом' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4969.JPG', title: 'Триколор на 2 ТВ', desc: 'Комплект для двух телевизоров' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4625.JPG', title: '40" наклонный', desc: 'На наклонный кронштейн' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/10.jpg', title: 'Samsung 65" Curved', desc: 'Изогнутый экран на выдвижном кронштейне' },
  { url: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/2.jpg', title: 'LG 75" UltraHD', desc: 'Замена Samsung 65" на LG 75"' },
];

// ============ REVIEWS ============
export const reviews = [
  { name: 'Алексей К.', text: 'Повесили 65-дюймовый телевизор на гипсокартонную стену. Приехали вовремя, работали аккуратно, всё объяснили. Цена как договаривались, без сюрпризов. Рекомендую!', rating: 5 },
  { name: 'Марина С.', text: 'Настраивали Триколор на два телевизора. Мастер Сергей — профессионал, всё сделал быстро и качественно. Спутник ловит отлично, картинка чёткая. Спасибо!', rating: 5 },
  { name: 'Дмитрий В.', text: 'Обращался для установки ТВ в спальню и настройки Smart TV. Мастер приехал в тот же день, как обещали. Работа выполнена на отлично, все каналы настроены.', rating: 5 },
  { name: 'Ольга П.', text: 'Повесили полки, карнизы и зеркало в ванной. Всё ровно, аккуратно, без пыли. Приятно работать с такими мастерами. Буду обращаться ещё!', rating: 5 },
  { name: 'Игорь М.', text: 'Устанавливали 77-дюймовый OLED. Переживали за сохранность, но мастера оказались очень опытными. Всё прошло идеально, телевизор висит как влитой.', rating: 5 },
  { name: 'Наталья Р.', text: 'Настроили цифровое ТВ для мамы. Мастер терпеливо всё объяснил, настроил удобную сортировку каналов. Мама довольна, и я тоже!', rating: 5 },
];

// ============ FAQ ============
export const faqItems = [
  { q: 'Сколько времени занимает установка телевизора?', a: 'Стандартная установка телевизора на стену занимает от 40 минут до 1.5 часов в зависимости от типа стены и сложности монтажа. Настройка каналов — дополнительно 20-30 минут.' },
  { q: 'Нужно ли покупать кронштейн самостоятельно?', a: 'Нет, мы привозим с собой кронштейны различных типов. Вы можете выбрать подходящий прямо при мастер. Также можно использовать ваш собственный кронштейн — стоимость работы не изменится.' },
  { q: 'Можно ли повесить телевизор на гипсокартон?', a: 'Да, мы устанавливаем телевизоры на гипсокартонные стены. Для этого используем специальные крепления (бабочки, молли) или закладные. Мастер оценит возможность монтажа на месте.' },
  { q: 'Работаете ли вы в выходные и праздники?', a: 'Да, мы работаем без выходных, включая праздничные дни. Приём заявок с 8:00 до 23:00 ежедневно. Выезд мастера возможен в день обращения.' },
  { q: 'Какая гарантия на работы?', a: 'Мы предоставляем гарантию 12 месяцев на все виды монтажных работ. Если в течение гарантийного срока возникнут проблемы — устраним бесплатно.' },
  { q: 'Как происходит оплата?', a: 'Оплата производится после выполнения работы. Принимаем наличные, перевод по СБП, банковские карты.' },
  { q: 'Можно ли спрятать провода за стену?', a: 'Да, мы делаем скрытую проводку. Для гипсокартонных стен — провода пропускаются внутри стены. Для бетонных — используем кабель-каналы в цвет стены.' },
];

// ============ SERVICES DATA ============
export const services = [
  {
    id: 'mount',
    title: 'Монтаж телевизора на стену',
    description: 'Установим телевизор на кронштейн любого типа: плоский, поворотный, выдвижной, наклонный или моторизованный. Работаем с любыми диагоналями от 20 до 85 дюймов.',
    icon: 'tv',
    details: ['Любые типы кронштейнов', 'Диагонали от 20" до 85"', 'Скрытая проводка', 'Кирпич, бетон, гипсокартон'],
    image: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5060.JPG',
  },
  {
    id: 'setup',
    title: 'Настройка телевизора',
    description: 'Подключим и настроим ваш телевизор: цифровые каналы, Smart TV, Wi-Fi, обновления прошивки, установка приложений, сортировка каналов.',
    icon: 'settings',
    details: ['Цифровые каналы DVB-T2', 'Smart TV и Wi-Fi', 'Обновление прошивки', 'Установка приложений'],
    image: 'https://tv-na-stene.ru/images/pult1.jpg',
  },
  {
    id: 'satellite',
    title: 'Спутниковое телевидение',
    description: 'Установим и настроим спутниковую тарелку Триколор или НТВ+. Подключим ресивер или настроим встроенный тюнер вашего телевизора.',
    icon: 'satellite',
    details: ['Триколор ТВ', 'НТВ+ / Viasat', 'Монтаж на крышу и фасад', 'Настройка на 1-3 телевизора'],
    image: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5469.JPG',
  },
  {
    id: 'antenna',
    title: 'Эфирное телевидение',
    description: 'Установим антенну для приёма бесплатных цифровых каналов. Подключим ресивер DVB-T2 и настроим 20 цифровых каналов в отличном качестве.',
    icon: 'antenna',
    details: ['20 бесплатных каналов', 'Установка антенны', 'Подключение ресивера', 'Усиление сигнала'],
    image: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4876.JPG',
  },
  {
    id: 'cable',
    title: 'Разводка антенного кабеля',
    description: 'Проложим антенный кабель от щитка до телевизора. Установим крабы (сплиттеры) для распределения сигнала на несколько телевизоров.',
    icon: 'cable',
    details: ['Прокладка кабеля', 'Установка крабов', 'Скрытая укладка в плинтус', 'F-разъёмы и штекеры'],
    image: 'https://tv-na-stene.ru/images/cab1.png',
  },
  {
    id: 'audio',
    title: 'Домашний кинотеатр',
    description: 'Подключим саундбар или домашний кинотеатр к телевизору. Разведём акустические провода, настроим звук для идеального звучания.',
    icon: 'speaker',
    details: ['Подключение саундбара', 'Разводка акустики', 'Настройка звука', 'Калибровка колонок'],
    image: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_4649.JPG',
  },
  {
    id: 'mounting',
    title: 'Навесные работы',
    description: 'Повесим на стену что угодно: картины, полки, зеркала, карнизы, часы, сушилки для белья, турники, микроволновки, шкафчики.',
    icon: 'frame',
    details: ['Картины и зеркала', 'Полки и карнизы', 'Турники и сушилки', 'Кухонная утварь'],
    image: 'https://tv-na-stene.ru/modules/gallery_jsImageBox/images/tv-na-stene_12sep1.JPG',
  },
];

// ============ PRICES DATA ============
export const prices = {
  tvMount: [
    { name: 'Диагональ 20" — 30" (61-81 см)', price: '3 000 ₽' },
    { name: 'Диагональ 32" — 40" (82-102 см)', price: '3 000 ₽' },
    { name: 'Диагональ 41" — 49" (103-124 см)', price: '3 000 ₽' },
    { name: 'Диагональ 50" — 55" (127-139 см)', price: '3 500 ₽' },
    { name: 'Диагональ 56" — 65" (свыше 150 см)', price: '4 000 ₽' },
    { name: 'Диагональ 66" и более (свыше 160 см)', price: '5 000 ₽' },
    { name: 'Диагональ 77" и более', price: 'от 6 000 ₽' },
  ],
  other: [
    { name: 'Установка и настройка телевизора', price: '2 500 ₽' },
    { name: 'Настройка приставки DVB-T2/C', price: '2 500 ₽' },
    { name: 'Настройка саундбара / домашнего кинотеатра', price: '2 500 ₽' },
    { name: 'Комплексная проверка оборудования', price: '2 500 ₽' },
    { name: 'Стандартная установка Триколор / НТВ+', price: 'от 3 000 ₽' },
    { name: 'Триколор на 2 ТВ', price: 'от 4 000 ₽' },
    { name: 'Доплата за установку на крышу', price: 'от 1 000 ₽' },
  ],
  extra: [
    { name: 'Выезд мастера по Москве', price: 'Бесплатно' },
    { name: 'Ложный выезд', price: '1 000 ₽' },
    { name: 'Выезд за МКАД', price: '30 ₽/км' },
  ],
};

// ============ USEFUL LINKS ============
export const usefulLinks = [
  { title: 'Цифровое ТВ бесплатно', desc: '20 каналов DVB-T2 без абонентской платы' },
  { title: 'Частоты каналов Москвы', desc: 'Таблица частот эфирного цифрового ТВ' },
  { title: 'Каналы Триколор', desc: 'Список и описание пакетов каналов' },
  { title: 'Тест на битые пиксели', desc: 'Проверка матрицы нового телевизора' },
  { title: 'Настройки спутников', desc: 'Транспондеры Триколор, НТВ+, HotBird' },
  { title: 'Тестовое 4K видео', desc: 'Скачайте видео для проверки качества' },
];
