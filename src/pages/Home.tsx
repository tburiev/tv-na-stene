import { Link } from 'react-router-dom';
import { Icon, services, reviews, galleryPhotos } from '../data/shared';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
                  src="https://tv-na-stene.ru/modules/gallery_jsImageBox/images/samsung%2075.jpg" 
                  alt="Установленный телевизор Samsung 75 на стене"
                  className="w-full h-[400px] object-cover"
                />
              </div>
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
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white rounded-xl px-4 py-3 shadow-lg">
                <div className="text-xs opacity-80">от</div>
                <div className="text-xl font-bold">3 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {[
              { icon: 'calendar', text: 'Работаем в праздники' },
              { icon: 'clock', text: 'Выезд в день звонка' },
              { icon: 'users', text: 'Постоянные мастера' },
              { icon: 'shield', text: 'Честные цены' },
              { icon: 'tool', text: 'Свой инструмент' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                <Icon name={item.icon} className="w-5 h-5 text-orange-600" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Услуги</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-2">Что мы делаем</h2>
              <p className="text-stone-600 text-lg">Полный спектр услуг по установке и настройке ТВ</p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Все услуги →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <Link to="/services" key={i} className="group p-6 rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <Icon name={service.icon} className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.slice(0, 3).map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-500">
                      <Icon name="check" className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Наши работы</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-2">Примеры установок</h2>
              <p className="text-stone-600 text-lg">Реальные фото наших работ</p>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Смотреть все →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryPhotos.slice(0, 8).map((photo, i) => (
              <Link to="/gallery" key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow">
                <img src={photo.url} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-white font-semibold text-sm">{photo.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Как мы работаем</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">4 простых шага</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Звонок или заявка', desc: 'Позвоните нам или оставьте заявку в WhatsApp. Опишите задачу — мы подскажем стоимость.' },
              { num: '02', title: 'Выезд мастера', desc: 'Мастер приезжает в назначенное время со всем необходимым инструментом и крепежом.' },
              { num: '03', title: 'Выполнение работы', desc: 'Аккуратно выполняем монтаж, вешаем телевизор. При необходимости — настраиваем каналы.' },
              { num: '04', title: 'Оплата и гарантия', desc: 'Оплата после выполнения работы. Даём гарантию 12 месяцев.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-orange-100 mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Отзывы</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Что говорят клиенты</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Позвоните нам</h2>
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
    </>
  );
}
