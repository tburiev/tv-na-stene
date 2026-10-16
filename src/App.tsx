import { useState, useEffect, useRef } from 'react';

// ============ DATA ============
const services = [
  {
    id: 'mount',
    title: 'Монтаж телевизора на стену',
    description: 'Установим телевизор на кронштейн любого типа: плоский, поворотный, выдвижной, наклонный или моторизованный. Работаем с любыми диагоналями от 20 до 85 дюймов.',
    icon: 'tv',
    details: ['Любые типы кронштейнов', 'Диагонали от 20" до 85"', 'Скрытая проводка', 'Кирпич, бетон, гипсокартон'],
  },
  {
    id: 'setup',
    title: 'Настройка телевизора',
    description: 'Подключим и настроим ваш телевизор: цифровые каналы, Smart TV, Wi-Fi, обновления прошивки, установка приложений, сортировка каналов.',
    icon: 'settings',
    details: ['Цифровые каналы DVB-T2', 'Smart TV и Wi-Fi', 'Обновление прошивки', 'Установка приложений'],
  },
  {
    id: 'satellite',
    title: 'Спутниковое телевидение',
    description: 'Установим и настроим спутниковую тарелку Триколор или НТВ+. Подключим ресивер или настроим встроенный тюнер вашего телевизора.',
    icon: 'satellite',
    details: ['Триколор ТВ', 'НТВ+ / Viasat', 'Монтаж на крышу и фасад', 'Настройка на 1-3 телевизора'],
  },
  {
    id: 'antenna',
    title: 'Эфирное телевидение',
    description: 'Установим антенну для приёма бесплатных цифровых каналов. Подключим ресивер DVB-T2 и настроим 20 цифровых каналов в отличном качестве.',
    icon: 'antenna',
    details: ['20 бесплатных каналов', 'Установка антенны', 'Подключение ресивера', 'Усиление сигнала'],
  },
  {
    id: 'audio',
    title: 'Домашний кинотеатр',
    description: 'Подключим саундбар или домашний кинотеатр к телевизору. Разведём акустические провода, настроим звук для идеального звучания.',
    icon: 'speaker',
    details: ['Подключение саундбара', 'Разводка акустики', 'Настройка звука', 'Калибровка колонок'],
  },
  {
    id: 'mounting',
    title: 'Навесные работы',
    description: 'Повесим на стену что угодно: картины, полки, зеркала, карнизы, часы, сушилки для белья, турники, микроволновки, шкафчики.',
    icon: 'frame',
    details: ['Картины и зеркала', 'Полки и карнизы', 'Турники и сушилки', 'Кухонная утварь'],
  },
];

const prices = {
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

const galleryImages = [
  { url: 'https://image.qwenlm.ai/generated-images/f49efa01-0b55-4d69-9b5f-0b4dfef973cb/_result.png', title: 'Гостиная, 65"', desc: 'Монтаж на бетонную стену' },
  { url: 'https://image.qwenlm.ai/generated-images/549d4cde-56b0-4504-bf0f-aa699771a7d7/_result.png', title: 'Процесс установки', desc: 'Поворотный кронштейн' },
  { url: 'https://image.qwenlm.ai/generated-images/dd940de8-62f0-41b1-a8d7-2b38291f0ce7/_result.png', title: 'Спальня, 55"', desc: 'Над изголовьем кровати' },
  { url: 'https://image.qwenlm.ai/generated-images/8d23f41b-e9b4-42cb-9843-011f6c24fca2/_result.png', title: 'Спутниковая антенна', desc: 'Монтаж на фасаде' },
];

const reviews = [
  { name: 'Алексей К.', text: 'Повесили 65-дюймовый телевизор на гипсокартонную стену. Приехали вовремя, работали аккуратно, всё объяснили. Цена как договаривались, без сюрпризов. Рекомендую!', rating: 5 },
  { name: 'Марина С.', text: 'Настраивали Триколор на два телевизора. Мастер Сергей — профессионал, всё сделал быстро и качественно. Спутник ловит отлично, картинка чёткая. Спасибо!', rating: 5 },
  { name: 'Дмитрий В.', text: 'Обращался для установки ТВ в спальню и настройки Smart TV. Мастер приехал в тот же день, как обещали. Работа выполнена на отлично, все каналы настроены.', rating: 5 },
  { name: 'Ольга П.', text: 'Повесили полки, карнизы и зеркало в ванной. Всё ровно, аккуратно, без пыли. Приятно работать с такими мастерами. Буду обращаться ещё!', rating: 5 },
  { name: 'Игорь М.', text: 'Устанавливали 77-дюймовый OLED. Переживали за сохранность, но мастера оказались очень опытными. Всё прошло идеально, телевизор висит как влитой.', rating: 5 },
  { name: 'Наталья Р.', text: 'Настроили цифровое ТВ для мамы. Мастер терпеливо всё объяснил, настроил удобную сортировку каналов. Мама довольна, и я тоже!', rating: 5 },
];

const faqItems = [
  { q: 'Сколько времени занимает установка телевизора?', a: 'Стандартная установка телевизора на стену занимает от 40 минут до 1.5 часов в зависимости от типа стены и сложности монтажа. Настройка каналов — дополнительно 20-30 минут.' },
  { q: 'Нужно ли покупать кронштейн самостоятельно?', a: 'Нет, мы привозим с собой кронштейны различных типов. Вы можете выбрать подходящий прямо при мастер. Также можно использовать ваш собственный кронштейн — стоимость работы не изменится.' },
  { q: 'Можно ли повесить телевизор на гипсокартон?', a: 'Да, мы устанавливаем телевизоры на гипсокартонные стены. Для этого используем специальные крепления (бабочки, молли) или закладные. Мастер оценит возможность монтажа на месте.' },
  { q: 'Работаете ли вы в выходные и праздники?', a: 'Да, мы работаем без выходных, включая праздничные дни. Приём заявок с 8:00 до 23:00 ежедневно. Выезд мастера возможен в день обращения.' },
  { q: 'Какая гарантия на работы?', a: 'Мы предоставляем гарантию 12 месяцев на все виды монтажных работ. Если в течение гарантийного срока возникнут проблемы — устраним бесплатно.' },
  { q: 'Как происходит оплата?', a: 'Оплата производится после выполнения работы. Принимаем наличные, перевод по СБП, банковские карты. Чек не предоставляем — работаем как самозанятые.' },
  { q: 'Можно ли спрятать провода за стену?', a: 'Да, мы делаем скрытую проводку. Для гипсокартонных стен — провода пропускаются внутри стены. Для бетонных — используем кабель-каналы в цвет стены.' },
];

const usefulLinks = [
  { title: 'Цифровое ТВ бесплатно', desc: '20 каналов DVB-T2 без абонентской платы' },
  { title: 'Частоты каналов Москвы', desc: 'Таблица частот эфирного цифрового ТВ' },
  { title: 'Каналы Триколор', desc: 'Список и описание пакетов каналов' },
  { title: 'Тест на битые пиксели', desc: 'Проверка матрицы нового телевизора' },
  { title: 'Настройки спутников', desc: 'Транспондеры Триколор, НТВ+, HotBird' },
  { title: 'Тестовое 4K видео', desc: 'Скачайте видео для проверки качества' },
];

// ============ ICONS ============
function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
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
    menu: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
    close: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    shield: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    users: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    calendar: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    tool: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
    payment: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>,
  };
  return icons[name] || null;
}

// ============ COMPONENTS ============

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#prices', label: 'Цены' },
    { href: '#gallery', label: 'Работы' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#faq', label: 'Вопросы' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center">
              <Icon name="tv" className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-stone-900">ТВ-Мастер</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74957636885" className="text-sm font-semibold text-stone-900 hover:text-orange-600 transition-colors">
              +7 (495) 763-68-85
            </a>
            <a href="tel:+74957636885" className="px-5 py-2.5 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              Вызвать мастера
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-stone-700">
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 px-3 text-stone-700 hover:bg-stone-50 rounded-lg font-medium">
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 mt-3">
              <a href="tel:+74957636885" className="block text-center py-3 px-4 bg-orange-600 text-white rounded-lg font-semibold">
                +7 (495) 763-68-85
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-orange-800">Принимаем заявки сегодня</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-6">
              Установка телевизоров{' '}
              <span className="text-orange-600">на стену</span> в Москве
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg">
              Профессиональный монтаж, настройка и подключение телевизоров. 
              Выезд мастера в день обращения. Гарантия на все работы 12 месяцев.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="tel:+74957636885" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors shadow-sm">
                <Icon name="phone" className="w-5 h-5" />
                Позвонить сейчас
              </a>
              <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-stone-800 font-semibold rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors">
                <Icon name="whatsapp" className="w-5 h-5 text-green-600" />
                Написать в WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-8 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4 text-stone-400" />
                <span>8:00 — 23:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check" className="w-4 h-4 text-green-600" />
                <span>Без выходных</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" className="w-4 h-4 text-orange-600" />
                <span>Гарантия 1 год</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10">
              <img 
                src="https://image.qwenlm.ai/generated-images/f49efa01-0b55-4d69-9b5f-0b4dfef973cb/_result.png" 
                alt="Установленный телевизор на стене"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="check" className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-stone-900">5000+ установок</div>
                  <div className="text-xs text-stone-500">за 10 лет работы</div>
                </div>
              </div>
            </div>
            {/* Price badge */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white rounded-xl px-4 py-3 shadow-lg">
              <div className="text-xs opacity-80">от</div>
              <div className="text-xl font-bold">3 000 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: 'calendar', text: 'Работаем в праздники' },
    { icon: 'clock', text: 'Выезд в день звонка' },
    { icon: 'users', text: 'Постоянные мастера' },
    { icon: 'shield', text: 'Честные цены' },
    { icon: 'tool', text: 'Свой инструмент' },
  ];

  return (
    <section className="bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
              <Icon name={item.icon} className="w-5 h-5 text-orange-600" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Услуги</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Что мы делаем</h2>
          <p className="text-stone-600 text-lg">Полный спектр услуг по установке, настройке и подключению телевизоров и ТВ-оборудования</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Icon name={service.icon} className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-stone-500">
                    <Icon name="check" className="w-4 h-4 text-green-600 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { num: '01', title: 'Звонок или заявка', desc: 'Позвоните нам или оставьте заявку в WhatsApp. Опишите задачу — мы подскажем стоимость и подберём удобное время.' },
    { num: '02', title: 'Выезд мастера', desc: 'Мастер приезжает в назначенное время со всем необходимым инструментом и крепежом. Выезд по Москве — бесплатно.' },
    { num: '03', title: 'Выполнение работы', desc: 'Аккуратно выполняем монтаж, устанавливаем кронштейн, вешаем телевизор. При необходимости — настраиваем каналы и Smart TV.' },
    { num: '04', title: 'Оплата и гарантия', desc: 'Оплата после выполнения работы. Даём гарантию 12 месяцев. Если что-то не так — приедем и исправим бесплатно.' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Как мы работаем</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">4 простых шага</h2>
          <p className="text-stone-600 text-lg">От звонка до готового результата — прозрачный процесс без сюрпризов</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-orange-100 mb-4">{step.num}</div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-[calc(100%_-_40px)] h-[2px] bg-orange-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prices() {
  const [activeTab, setActiveTab] = useState<'mount' | 'other' | 'extra'>('mount');

  const tabs = [
    { id: 'mount' as const, label: 'Монтаж ТВ' },
    { id: 'other' as const, label: 'Настройка и ТВ' },
    { id: 'extra' as const, label: 'Дополнительно' },
  ];

  const data = {
    mount: prices.tvMount,
    other: prices.other,
    extra: prices.extra,
  };

  return (
    <section id="prices" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Цены</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Стоимость услуг</h2>
            <p className="text-stone-600 text-lg mb-8">Фиксированные цены без скрытых доплат. Стоимость зависит от диагонали телевизора и типа работ.</p>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="check" className="w-4 h-4 text-orange-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">Выезд мастера — бесплатно</div>
                  <div className="text-sm text-stone-600 mt-1">При заказе услуг выезд по Москве и ближайшему МО — за наш счёт. Оплата только за работу.</div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="payment" className="w-4 h-4 text-stone-600" />
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">Удобная оплата</div>
                  <div className="text-sm text-stone-600 mt-1">Наличные, перевод по СБП, банковская карта. Оплата после выполнения работы.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="flex border-b border-stone-200">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-orange-600 border-b-2 border-orange-600 bg-orange-50/50' : 'text-stone-500 hover:text-stone-700'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="p-5">
              <div className="space-y-0">
                {data[activeTab].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-3.5 ${i !== data[activeTab].length - 1 ? 'border-b border-stone-100' : ''}`}>
                    <span className="text-sm text-stone-700 pr-4">{item.name}</span>
                    <span className="text-sm font-semibold text-stone-900 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            {activeTab === 'mount' && (
              <div className="px-5 pb-5">
                <p className="text-xs text-stone-500 leading-relaxed">* В некоторых случаях возможно увеличение стоимости за сложный монтаж OLED и QLED телевизоров, а также монтаж в нишу, короб или на декоративный камень.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Наши работы</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Фотогалерея</h2>
          <p className="text-stone-600 text-lg">Примеры наших работ по установке телевизоров и навеске оборудования в квартирах Москвы</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} onClick={() => setSelectedImage(i)} className="group cursor-pointer relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-semibold text-sm">{img.title}</div>
                  <div className="text-white/70 text-xs">{img.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={() => setSelectedImage(null)}>
              <Icon name="close" className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img src={galleryImages[selectedImage].url} alt={galleryImages[selectedImage].title} className="w-full rounded-lg" />
              <div className="mt-4 text-center">
                <div className="text-white font-semibold">{galleryImages[selectedImage].title}</div>
                <div className="text-white/60 text-sm">{galleryImages[selectedImage].desc}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: '10+', label: 'лет на рынке' },
    { value: '5000+', label: 'выполненных заказов' },
    { value: '12', label: 'месяцев гарантии' },
    { value: '4.9', label: 'средняя оценка' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">О компании</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-6">Работаем с 2014 года</h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>Мы — команда профессиональных мастеров по установке и настройке телевизоров в Москве и Московской области. За более чем 10 лет работы выполнили свыше 5000 заказов.</p>
              <p>Наши мастера имеют опыт работы с телевизорами всех производителей: Samsung, LG, Sony, Philips, Xiaomi, TCL, Hisense и другими. Работаем с любыми типами стен: бетон, кирпич, гипсокартон, дерево.</p>
              <p>Используем профессиональный инструмент и качественные крепёжные элементы. Всегда аккуратно — без пыли и повреждений отделки.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-stone-900">{stat.value}</div>
                  <div className="text-sm text-stone-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://image.qwenlm.ai/generated-images/549d4cde-56b0-4504-bf0f-aa699771a7d7/_result.png" 
                alt="Мастер за работой"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Отзывы</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Что говорят клиенты</h2>
          <p className="text-stone-600 text-lg">Реальные отзывы людей, которые уже воспользовались нашими услугами</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Icon key={j} name="star" className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-semibold text-stone-600">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-stone-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Useful() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Полезное</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Информация для вас</h2>
          <p className="text-stone-600 text-lg">Полезные материалы о телевидении, настройке и оборудовании</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {usefulLinks.map((link, i) => (
            <div key={i} className="group p-5 rounded-xl border border-stone-200 hover:border-orange-200 hover:bg-orange-50/30 transition-all cursor-pointer">
              <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-orange-700 transition-colors">{link.title}</h3>
              <p className="text-sm text-stone-500">{link.desc}</p>
            </div>
          ))}
        </div>

        {/* Digital TV info block */}
        <div className="mt-10 bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 lg:p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Цифровое ТВ — бесплатно</h3>
              <p className="text-stone-300 leading-relaxed mb-4">
                Каждый владелец телевизора может бесплатно принимать 20 цифровых каналов в формате DVB-T2. 
                Нужна только антенна дециметрового диапазона и встроенный тюнер DVB-T2 (есть во всех телевизорах с 2013 года).
              </p>
              <ul className="space-y-2 text-sm text-stone-400">
                <li className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-green-400" /> 20 каналов в отличном качестве</li>
                <li className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-green-400" /> Без абонентской платы</li>
                <li className="flex items-center gap-2"><Icon name="check" className="w-4 h-4 text-green-400" /> Работает без интернета</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-stone-700/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">20</div>
                <div className="text-sm text-stone-400">бесплатных каналов</div>
                <div className="text-xs text-stone-500 mt-2">Первый мультиплекс + Второй мультиплекс</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Частые вопросы</h2>
          <p className="text-stone-600 text-lg">Ответы на популярные вопросы наших клиентов</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-stone-900 pr-4">{item.q}</span>
                <Icon name="arrow" className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Позвоните нам
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Обсудим вашу задачу, рассчитаем стоимость и подберём удобное время для выезда мастера
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="tel:+74957636885" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors text-lg">
                <Icon name="phone" className="w-5 h-5" />
                +7 (495) 763-68-85
              </a>
              <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-lg">
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-400">
              <div className="flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4" />
                <span>Ежедневно 8:00 — 23:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="location" className="w-4 h-4" />
                <span>Москва и Московская область</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="check" className="w-4 h-4 text-green-400" />
                <span>Выезд бесплатно</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center">
                <Icon name="tv" className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">ТВ-Мастер</span>
            </div>
            <p className="text-sm leading-relaxed">Профессиональная установка и настройка телевизоров в Москве и МО. Работаем с 2014 года.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Услуги</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Монтаж телевизора</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Настройка ТВ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Спутниковое ТВ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Эфирное ТВ</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Навесные работы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Информация</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Фото работ</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+74957636885" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="phone" className="w-4 h-4 text-orange-500" />
                  +7 (495) 763-68-85
                </a>
              </li>
              <li>
                <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="whatsapp" className="w-4 h-4 text-green-500" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="clock" className="w-4 h-4 text-stone-500" />
                Ежедневно 8:00 — 23:00
              </li>
              <li className="flex items-center gap-2">
                <Icon name="location" className="w-4 h-4 text-stone-500" />
                Москва и МО
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">© 2024 ТВ-Мастер. Установка телевизоров в Москве.</p>
          <p className="text-xs text-stone-500">Сайт: tv-na-stene.ru</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="tel:+74957636885" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-600/25 hover:scale-110 transition-transform">
        <Icon name="phone" className="w-5 h-5 text-white" />
      </a>
      <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/25 hover:scale-110 transition-transform">
        <Icon name="whatsapp" className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}

// ============ MAIN APP ============
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <HowWeWork />
      <Prices />
      <Gallery />
      <About />
      <Reviews />
      <Useful />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
