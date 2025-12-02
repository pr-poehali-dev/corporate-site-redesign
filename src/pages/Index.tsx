import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Cog',
    title: 'Плановое ТО оборудования',
    description: 'Регулярное техническое обслуживание оборудования Nelden для обеспечения бесперебойной работы',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg'
  },
  {
    icon: 'Wrench',
    title: 'Ремонт любой сложности',
    description: 'Качественный ремонт с использованием оригинальных запчастей и современной диагностики',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/46b5fe03-2686-484a-a33b-5b55655cd14e.jpg'
  },
  {
    icon: 'Package',
    title: 'Поставка запчастей',
    description: 'Оперативная поставка оригинальных запчастей со склада в Москве и под заказ',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/c7495e1e-3f3b-4a4b-90c8-3a523b8658ae.jpg'
  }
];

const stats = [
  { number: 150, label: 'Обслужено объектов' },
  { number: 24, label: 'Часа поддержка' },
  { number: 50, label: 'Сертифицированных инженеров' },
  { number: 15, label: 'Лет в России' }
];

const partners = ['Nelden Italy', 'Газпром', 'Лукойл', 'СИБУР', 'НЛМК', 'Северсталь'];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(interval);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 30);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 shadow-lg py-3' : 'bg-white/98 shadow-md py-6'} backdrop-blur-md`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gradient-olive rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                N
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-2xl font-extrabold text-primary font-montserrat tracking-tight">NELDEN</span>
                  <span className="text-xl md:text-2xl font-extrabold text-secondary font-montserrat">RUSSIA</span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Официальное представительство в РФ</span>
              </div>
            </div>

            <button 
              className="md:hidden text-primary w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-0 mt-3 md:mt-0 rounded-b-2xl md:rounded-none`}>
              <button onClick={() => scrollToSection('home')} className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider relative group">
                Главная
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-olive group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider relative group">
                Сервис
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-olive group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider relative group">
                О компании
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-olive group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              <button onClick={() => scrollToSection('partners')} className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider relative group">
                Клиенты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-olive group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider relative group">
                Контакты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-olive group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="font-bold text-primary text-lg">+7 (495) 123-45-67</div>
              <Button 
                className="gradient-olive btn-hover-effect uppercase font-bold tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                onClick={() => scrollToSection('contact')}
              >
                Запрос
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section 
        id="home" 
        className="relative pt-48 pb-32 mt-20 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.85), rgba(44, 59, 47, 0.9)), url(https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-shadow animate-fade-in-up">
            Официальное представительство <span className="text-accent relative">Nelden Industry</span> в России
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Полный спектр сервисных услуг, техническое обслуживание, поставка оригинальных запчастей и оборудования по всей территории Российской Федерации
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="gradient-olive btn-hover-effect text-white font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-full px-8"
              onClick={() => scrollToSection('contact')}
            >
              Заказать сервис
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase tracking-widest backdrop-blur-sm bg-white/10 rounded-full px-8"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2 font-montserrat">{animatedStats[index]}{stat.number >= 24 && '/'}{stat.number === 24 && '7'}</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 relative inline-block pb-5">
              Наши сервисные услуги
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 gradient-olive rounded-full"></span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
              Комплексное обслуживание промышленного оборудования Nelden с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border-t-4 border-t-transparent hover:border-t-accent rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 w-16 h-16 gradient-olive rounded-full flex items-center justify-center shadow-lg">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Button className="gradient-olive btn-hover-effect uppercase text-sm font-bold tracking-wider hover:shadow-lg transition-all">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 relative pb-4">
                Официальное представительство Nelden в России
                <span className="absolute bottom-0 left-0 w-20 h-1 gradient-olive rounded-full"></span>
              </h2>
              <p className="text-base mb-5 leading-relaxed text-foreground">
                Мы являемся официальным представительством итальянской компании Nelden Industry на территории Российской Федерации с 2015 года.
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Наша команда сертифицированных специалистов обеспечивает полный цикл поддержки оборудования Nelden.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-olive rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Сертификация</h4>
                    <p className="text-sm text-muted-foreground">Обучение в Италии</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-olive rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Гарантия</h4>
                    <p className="text-sm text-muted-foreground">100% качество</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-olive rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Скорость</h4>
                    <p className="text-sm text-muted-foreground">Быстрая реакция</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 gradient-olive rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Опыт</h4>
                    <p className="text-sm text-muted-foreground">15 лет в России</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/c7495e1e-3f3b-4a4b-90c8-3a523b8658ae.jpg"
                alt="Наш сервисный центр"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 relative inline-block pb-5">
              Наши клиенты
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 gradient-olive rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
              >
                <span className="text-primary font-bold text-center text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.9), rgba(44, 59, 47, 0.95)), url(https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 relative inline-block pb-5">
              Контакты
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 gradient-olive rounded-full"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:bg-white/15">
              <div className="w-20 h-20 gradient-olive rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Адрес</h3>
              <p className="text-sm text-white/80">г. Москва, ул. Промышленная, д. 15</p>
              <p className="text-sm text-white/80">БЦ "Технопарк", офис 405</p>
            </div>

            <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:bg-white/15">
              <div className="w-20 h-20 gradient-olive rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Телефон</h3>
              <p className="text-sm text-white/80">+7 (495) 123-45-67</p>
              <p className="text-sm text-white/80">+7 (800) 100-50-50</p>
            </div>

            <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:bg-white/15">
              <div className="w-20 h-20 gradient-olive rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Email</h3>
              <p className="text-sm text-white/80">info@nelden-russia.ru</p>
              <p className="text-sm text-white/80">service@nelden-russia.ru</p>
            </div>

            <div className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:bg-white/15">
              <div className="w-20 h-20 gradient-olive rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Режим работы</h3>
              <p className="text-sm text-white/80">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-sm text-white/80">Сб: 10:00 - 16:00</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="gradient-olive btn-hover-effect uppercase font-bold tracking-widest shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 rounded-full px-10"
            >
              Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 gradient-olive"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 relative pb-4">
                Nelden Russia
                <span className="absolute bottom-0 left-0 w-10 h-0.5 gradient-olive rounded-full"></span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Официальное представительство Nelden Industry в России. Сервисное обслуживание, ремонт и поставка запчастей.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 relative pb-4">
                Услуги
                <span className="absolute bottom-0 left-0 w-10 h-0.5 gradient-olive rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-white/70 hover:text-accent transition-colors inline-block hover:translate-x-1">Техническое обслуживание</a></li>
                <li><a href="#services" className="text-white/70 hover:text-accent transition-colors inline-block hover:translate-x-1">Ремонт оборудования</a></li>
                <li><a href="#services" className="text-white/70 hover:text-accent transition-colors inline-block hover:translate-x-1">Поставка запчастей</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 relative pb-4">
                Контакты
                <span className="absolute bottom-0 left-0 w-10 h-0.5 gradient-olive rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span>Москва, ул. Промышленная, 15</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span>info@nelden-russia.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>&copy; 2024 Nelden Industry Russia. Все права защищены.</p>
            <p className="mt-1">Официальное представительство Nelden Industry S.p.A. (Италия)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
