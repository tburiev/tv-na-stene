import { useState } from 'react';
import { Icon, galleryPhotos } from '../data/shared';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'tv' | 'satellite'>('all');

  const filteredPhotos = galleryPhotos.filter(photo => {
    if (filter === 'all') return true;
    if (filter === 'satellite') return photo.title.includes('Триколор') || photo.title.includes('антенна') || photo.title.includes('Антенна') || photo.title.includes('тарелка') || photo.title.includes('SUPRAL');
    return !photo.title.includes('Триколор') && !photo.title.includes('антенна') && !photo.title.includes('Антенна') && !photo.title.includes('тарелка') && !photo.title.includes('SUPRAL');
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Фото работ</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2 mb-4">Примеры наших работ</h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Реальные фотографии установок телевизоров, спутниковых антенн и другого оборудования, выполненных нашими мастерами
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { id: 'all' as const, label: 'Все работы' },
              { id: 'tv' as const, label: 'Установка ТВ' },
              { id: 'satellite' as const, label: 'Спутниковое ТВ' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${filter === f.id ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(i)} 
                className="group cursor-pointer relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all"
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white font-semibold text-sm">{photo.title}</div>
                    <div className="text-white/70 text-xs mt-0.5">{photo.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16 text-stone-500">
              Нет фотографий в этой категории
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white z-10" onClick={() => setSelectedImage(null)}>
            <Icon name="close" className="w-8 h-8" />
          </button>
          
          {/* Navigation */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredPhotos.length - 1); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage < filteredPhotos.length - 1 ? selectedImage + 1 : 0); }}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={filteredPhotos[selectedImage].url} 
              alt={filteredPhotos[selectedImage].title} 
              className="w-full rounded-lg max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <div className="text-white font-semibold">{filteredPhotos[selectedImage].title}</div>
              <div className="text-white/60 text-sm">{filteredPhotos[selectedImage].desc}</div>
              <div className="text-white/40 text-xs mt-2">{selectedImage + 1} / {filteredPhotos.length}</div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">Хотите так же?</h2>
          <p className="text-stone-600 text-lg mb-8">Позвоните нам — установим ваш телевизор аккуратно и профессионально</p>
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
