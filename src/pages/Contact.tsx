import { Icon } from '../data/shared';

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Контакты</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2 mb-4">Свяжитесь с нами</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Позвоните, напишите в WhatsApp или оставьте заявку — мы ответим в течение 15 минут
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Cards */}
            <div className="space-y-6">
              <a href="tel:+74957636885" className="flex items-start gap-4 p-6 rounded-2xl border border-stone-200 hover:border-orange-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Icon name="phone" className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">Телефон</div>
                  <div className="text-xl font-semibold text-stone-900">+7 (495) 763-68-85</div>
                  <div className="text-sm text-stone-500 mt-1">Звоните с 8:00 до 23:00</div>
                </div>
              </a>

              <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-2xl border border-stone-200 hover:border-green-200 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                  <Icon name="whatsapp" className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">WhatsApp</div>
                  <div className="text-xl font-semibold text-stone-900">+7 (985) 763-68-85</div>
                  <div className="text-sm text-stone-500 mt-1">Напишите — ответим быстро</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-2xl border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                  <Icon name="clock" className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">Режим работы</div>
                  <div className="text-xl font-semibold text-stone-900">Ежедневно</div>
                  <div className="text-sm text-stone-500 mt-1">Приём заявок: 8:00 — 23:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0">
                  <Icon name="location" className="w-6 h-6 text-stone-600" />
                </div>
                <div>
                  <div className="text-sm text-stone-500 mb-1">Зона обслуживания</div>
                  <div className="text-xl font-semibold text-stone-900">Москва и МО</div>
                  <div className="text-sm text-stone-500 mt-1">Выезд за МКАД — 30 ₽/км</div>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div>
              <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Вызвать мастера</h2>
                  <p className="text-stone-400 mb-8 leading-relaxed">
                    Оставьте заявку — мы перезвоним в течение 15 минут, обсудим задачу и подберём удобное время для выезда
                  </p>

                  <div className="space-y-4 mb-8">
                    <a href="tel:+74957636885" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors text-lg">
                      <Icon name="phone" className="w-5 h-5" />
                      Позвонить
                    </a>
                    <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-lg">
                      <Icon name="whatsapp" className="w-5 h-5" />
                      Написать в WhatsApp
                    </a>
                  </div>

                  <div className="space-y-3 text-sm text-stone-400">
                    <div className="flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-green-400" />
                      <span>Выезд мастера — бесплатно</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-green-400" />
                      <span>Работаем без выходных</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-green-400" />
                      <span>Гарантия 12 месяцев</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="check" className="w-4 h-4 text-green-400" />
                      <span>Оплата после выполнения</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">География</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Зона обслуживания</h2>
            <p className="text-stone-600 text-lg">Выезжаем по всей Москве и ближайшему Подмосковью</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'ЦАО', 'САО', 'СВАО', 'ВАО',
              'ЮВАО', 'ЮАО', 'ЮЗАО', 'ЗАО',
              'СЗАО', 'Зеленоград', 'Балашиха', 'Химки',
              'Мытищи', 'Люберцы', 'Красногорск', 'Одинцово',
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-white rounded-xl border border-stone-200">
                <Icon name="location" className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="text-sm text-stone-700 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-orange-50 border border-orange-100 rounded-xl">
            <p className="text-sm text-stone-700">
              <span className="font-semibold">Выезд за МКАД:</span> 30 ₽/км. Точную стоимость выезда в ваш район уточняйте у мастера по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Оплата</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Способы оплаты</h2>
            <p className="text-stone-600 text-lg">Оплата производится после выполнения работы</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Наличные', desc: 'Оплата мастеру наличными после работы' },
              { title: 'Перевод по СБП', desc: 'Быстрый перевод по номеру телефона' },
              { title: 'Банковская карта', desc: 'Оплата картой через терминал' },
              { title: 'На расчётный счёт', desc: 'Для юридических лиц — по реквизитам' },
            ].map((method, i) => (
              <div key={i} className="p-5 rounded-xl bg-stone-50 border border-stone-100">
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center mb-3">
                  <Icon name="payment" className="w-5 h-5 text-stone-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-1">{method.title}</h3>
                <p className="text-stone-600 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
