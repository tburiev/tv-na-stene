import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    tv: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    phone: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    whatsapp: <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    menu: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
    close: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
    clock: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    location: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    check: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  };
  return icons[name] || null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/services', label: 'Услуги' },
    { to: '/prices', label: 'Цены' },
    { to: '/gallery', label: 'Фото работ' },
    { to: '/about', label: 'О компании' },
    { to: '/contact', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center">
                <Icon name="tv" className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-stone-900">ТВ-Мастер</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className={`text-sm font-medium transition-colors ${isActive(link.to) ? 'text-orange-600' : 'text-stone-600 hover:text-stone-900'}`}
                >
                  {link.label}
                </Link>
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
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 px-3 rounded-lg font-medium ${isActive(link.to) ? 'bg-orange-50 text-orange-600' : 'text-stone-700 hover:bg-stone-50'}`}
                >
                  {link.label}
                </Link>
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

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
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
                <li><Link to="/services" className="hover:text-white transition-colors">Монтаж телевизора</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Настройка ТВ</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Спутниковое ТВ</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Эфирное ТВ</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Навесные работы</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Информация</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/prices" className="hover:text-white transition-colors">Цены</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Фото работ</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
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

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a href="tel:+74957636885" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-600/25 hover:scale-110 transition-transform">
          <Icon name="phone" className="w-5 h-5 text-white" />
        </a>
        <a href="https://wa.me/79857636885" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/25 hover:scale-110 transition-transform">
          <Icon name="whatsapp" className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
