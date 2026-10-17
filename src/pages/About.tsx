import { Icon, reviews } from '../data/shared';

export default function About() {
  const stats = [
    { value: '10+', label: 'лет на рынке' },
    { value: '5000+', label: 'выполненных заказов' },
    { value: '12', label: 'месяцев гарантии' },
    { value: '4.9', label: 'средняя оценка' },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">О компании</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2 mb-4">ТВ-Мастер</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Команда профессиональных мастеров по установке и настройке телевизоров в Москве и Московской области
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-6">Работаем с 2014 года</h2>
              
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
                  src="https://tv-na-stene.ru/modules/gallery_jsImageBox/images/IMG_5060.JPG" 
                  alt="Мастер за работой"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Преимущества</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'calendar', title: 'Работаем в праздники', desc: 'Не берём выходных — принимаем заявки 365 дней в году' },
              { icon: 'clock', title: 'Выезд в день звонка', desc: 'Мастер приедет в удобное для вас время, в тот же день' },
              { icon: 'users', title: 'Постоянные мастера', desc: 'Одни и те же проверенные специалисты — не случайные люди' },
              { icon: 'shield', title: 'Честные цены', desc: 'Без скрытых доплат и накруток. Цена как на сайте' },
              { icon: 'tool', title: 'Профессиональный инструмент', desc: 'Лазерный уровень, перфоратор, весь необходимый крепёж' },
              { icon: 'check', title: 'Гарантия 12 месяцев', desc: 'Если что-то не так — приедем и исправим бесплатно' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional vs Amateur */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Профессионал vs Частный мастер</h2>
            <p className="text-stone-600 text-lg">Почему важно обращаться к проверенным специалистам</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional */}
            <div className="rounded-2xl border-2 border-green-200 overflow-hidden">
              <div className="bg-green-50 p-5 border-b border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="check" className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-900">Профессионал</h3>
                </div>
              </div>
              <div className="p-6">
                <img 
                  src="https://tv-na-stene.ru/files/tv-na-stene.jpg" 
                  alt="Правильная установка телевизора"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <ul className="space-y-3">
                  {[
                    'Профессиональный инструмент',
                    'Лазерный уровень',
                    'Только опытные мастера',
                    'Строго к назначенному времени',
                    'Не уронит новый телевизор',
                    'Не испортит обои',
                    'Не просверлит стену насквозь',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-700">
                      <Icon name="check" className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Amateur */}
            <div className="rounded-2xl border-2 border-red-200 overflow-hidden">
              <div className="bg-red-50 p-5 border-b border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-900">Частный мастер</h3>
                </div>
              </div>
              <div className="p-6">
                <img 
                  src="https://tv-na-stene.ru/files/crashed-tv.jpg" 
                  alt="Разбитый телевизор"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <ul className="space-y-3">
                  {[
                    'Отсутствие инструмента',
                    'Выравнивание "на глаз"',
                    'Не всегда обладает опытом',
                    'Приезжает "как получится"',
                    'Не знает правил установки',
                    'Завышает оговоренную цену',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-700">
                      <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Отзывы</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Что говорят клиенты</h2>
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

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Доверьте установку профессионалам</h2>
          <p className="text-stone-600 text-lg mb-8">Позвоните нам — мы работаем без выходных и выезжаем в день обращения</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74957636885" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors">
              <Icon name="phone" className="w-5 h-5" />
              +7 (495) 763-68-85
            </a>
            <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
