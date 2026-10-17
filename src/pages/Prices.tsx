import { useState } from 'react';
import { Icon, prices, faqItems } from '../data/shared';

export default function Prices() {
  const [activeTab, setActiveTab] = useState<'mount' | 'other' | 'extra'>('mount');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'mount' as const, label: 'Монтаж ТВ' },
    { id: 'other' as const, label: 'Настройка и ТВ' },
    { id: 'extra' as const, label: 'Дополнительно' },
  ];

  const data = { mount: prices.tvMount, other: prices.other, extra: prices.extra };

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Цены</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2 mb-4">Стоимость услуг</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Фиксированные цены без скрытых доплат. Стоимость зависит от диагонали телевизора и типа работ. Выезд мастера по Москве — бесплатно.
            </p>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
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

              <div className="bg-stone-50 rounded-xl p-5 mb-6">
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

              <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="shield" className="w-4 h-4 text-green-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 text-sm">Гарантия 12 месяцев</div>
                    <div className="text-sm text-stone-600 mt-1">На все виды монтажных работ. Если что-то не так — приедем и исправим бесплатно.</div>
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

      {/* What's included */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">В стоимость входит</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Что включено в цену</h2>
            <p className="text-stone-600 text-lg">Никаких скрытых доплат — всё прозрачно</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Выезд мастера', desc: 'Бесплатный выезд в пределах МКАД' },
              { title: 'Расходные материалы', desc: 'Крепёж, дюбели, хомуты для проводов' },
              { title: 'Монтаж кронштейна', desc: 'Установка и выравнивание по уровню' },
              { title: 'Подвес телевизора', desc: 'Аккуратная навеска на кронштейн' },
              { title: 'Организация кабелей', desc: 'Сборка проводов в аккуратный жгут' },
              { title: 'Автонастройка', desc: 'Поиск и настройка телевизионных каналов' },
              { title: 'Обучение', desc: 'Объясним основные функции пульта и меню' },
              { title: 'Гарантия', desc: '12 месяцев на все монтажные работы' },
              { title: 'Чистота', desc: 'Убираем за собой весь мусор и пыль' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="check" className="w-3.5 h-3.5 text-green-700" />
                </div>
                <div>
                  <div className="font-semibold text-stone-900 text-sm">{item.title}</div>
                  <div className="text-stone-600 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2 mb-4">Частые вопросы</h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-stone-900 pr-4">{item.q}</span>
                  <Icon name="arrow" className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-stone-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Готовы заказать?</h2>
          <p className="text-stone-600 text-lg mb-8">Позвоните нам — рассчитаем точную стоимость для вашего случая</p>
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
