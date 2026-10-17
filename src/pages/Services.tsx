import { Link } from 'react-router-dom';
import { Icon, services } from '../data/shared';

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Услуги</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2 mb-4">Наши услуги</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Полный спектр услуг по установке, настройке и подключению телевизоров и ТВ-оборудования в Москве и Московской области
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-4">
                    <Icon name={service.icon} className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-medium text-orange-800">Услуга</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">{service.title}</h2>
                  <p className="text-stone-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Icon name="check" className="w-3.5 h-3.5 text-green-700" />
                        </div>
                        <span className="text-stone-700">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+74957636885" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors">
                      <Icon name="phone" className="w-4 h-4" />
                      Заказать
                    </a>
                    <Link to="/prices" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-800 font-semibold rounded-xl border border-stone-200 hover:border-stone-300 transition-colors">
                      Узнать цену
                    </Link>
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[300px] lg:h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bracket Types */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Кронштейны</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Типы кронштейнов</h2>
            <p className="text-stone-600 text-lg">Подберём оптимальный кронштейн под ваши задачи</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Плоский', desc: 'Минимальный отступ от стены. Идеален, если телевизор висит на одном месте.', features: ['Тонкий профиль', 'Надёжная фиксация', 'Для всех диагоналей'] },
              { title: 'Наклонный', desc: 'Возможность наклона телевизора. Удобно для монтажа высоко на стене.', features: ['Наклон до 15°', 'Для тяжёлых ТВ', 'Можно на гипсокартон'] },
              { title: 'Поворотный', desc: 'Позволяет выдвинуть и развернуть телевизор. Удобный просмотр с любого места.', features: ['Поворот до 180°', 'Выдвижение от стены', 'Для ниш и углов'] },
              { title: 'Полнофункциональный', desc: 'Сочетает наклон и поворот. Максимальная гибкость расположения.', features: ['Наклон + поворот', 'Выдвижной механизм', 'Универсальный'] },
              { title: 'Моторизованный', desc: 'Управление с пульта. Телевизор опускается или поворачивается автоматически.', features: ['Управление с пульта', 'Бесшумный мотор', 'Премиум-решение'] },
              { title: 'Потолочный', desc: 'Крепление к потолку. Идеально для нестандартных помещений.', features: ['Крепление к потолку', 'Регулировка высоты', 'Для коммерческих объектов'] },
            ].map((bracket, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{bracket.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{bracket.desc}</p>
                <ul className="space-y-2">
                  {bracket.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-500">
                      <Icon name="check" className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Поверхности</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Установка на любые стены</h2>
            <p className="text-stone-600 text-lg">Работаем со всеми типами стен, включая сложные поверхности</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Бетон', desc: 'Самый надёжный вариант. Стандартный крепёж.' },
              { title: 'Кирпич', desc: 'Используем дюбели повышенной надёжности.' },
              { title: 'Гипсокартон', desc: 'Специальные крепления Fischer™ для пустотелых стен.' },
              { title: 'Дерево', desc: 'Саморезы по дереву с увеличенной резьбой.' },
            ].map((wall, i) => (
              <div key={i} className="p-5 rounded-xl bg-stone-50 border border-stone-100">
                <h3 className="font-semibold text-stone-900 mb-2">{wall.title}</h3>
                <p className="text-stone-600 text-sm">{wall.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-orange-50 border border-orange-100 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                <Icon name="shield" className="w-5 h-5 text-orange-700" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Безопасность монтажа</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Благодаря использованию специального крепежа Fischer™, монтаж телевизора на гипсокартонную стену стал возможен без риска вырвать винты из стены и повреждения дорогостоящей аппаратуры. Мастер всегда оценивает несущую способность стены перед монтажом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Нужна установка?</h2>
          <p className="text-stone-600 text-lg mb-8">Позвоните нам или напишите в WhatsApp — рассчитаем стоимость и подберём время</p>
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
