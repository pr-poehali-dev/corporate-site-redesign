import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Wrench',
    title: 'Техническое обслуживание',
    description: 'Регулярное и плановое техническое обслуживание оборудования Nelden для обеспечения бесперебойной работы и продления срока службы.',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg'
  },
  {
    icon: 'Cog',
    title: 'Ремонт оборудования',
    description: 'Качественный ремонт любой сложности с использованием оригинальных запчастей Nelden и современных диагностических систем.',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/46b5fe03-2686-484a-a33b-5b55655cd14e.jpg'
  },
  {
    icon: 'Package',
    title: 'Поставка запчастей',
    description: 'Оперативная поставка оригинальных запчастей и расходных материалов со склада в Москве и под заказ из Италии.',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/c7495e1e-3f3b-4a4b-90c8-3a523b8658ae.jpg'
  }
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-md z-50 transition-all">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/5e07de1b-51e6-496f-a0f6-eeaaf347bf6d.png" 
                alt="Nelden Industry Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary font-montserrat">NELDEN</span>
                  <span className="text-xl font-bold text-secondary font-montserrat">RUSSIA</span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Официальное представительство</span>
              </div>
            </div>
            
            <button 
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent shadow-md md:shadow-none flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-4 md:p-0`}>
              <button onClick={() => scrollToSection('home')} className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
                О компании
              </button>
              <button onClick={() => scrollToSection('partners')} className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
                Партнеры
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide">
                Контакты
              </button>
              <div className="flex gap-2 ml-4">
                <button className="text-sm font-semibold text-secondary">RU</button>
                <span className="text-muted-foreground">|</span>
                <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">EN</button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section 
        id="home" 
        className="relative pt-32 pb-24 bg-cover bg-center bg-no-repeat mt-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(44, 76, 59, 0.85), rgba(44, 76, 59, 0.9)), url(https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg)'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Nelden Industry в России
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Официальное представительство итальянского лидера в области промышленного оборудования. Профессиональный сервис, техническое обслуживание и поставка оригинальных запчастей по всей территории РФ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold uppercase tracking-wide"
              onClick={() => scrollToSection('contact')}
            >
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold uppercase tracking-wide"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block pb-4">
              Наши услуги
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button className="bg-secondary hover:bg-secondary/90 uppercase text-sm font-semibold tracking-wide">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 relative pb-4">
                Официальное представительство Nelden в России
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-secondary"></span>
              </h2>
              <p className="text-base mb-4 leading-relaxed">
                Мы являемся официальным представительством итальянской компании Nelden Industry на территории Российской Федерации с 2015 года.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Наша команда сертифицированных специалистов обеспечивает полный цикл поддержки оборудования Nelden: от продажи и пусконаладки до регулярного обслуживания и ремонта.
              </p>

              <div className="space-y-5 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Сертифицированные специалисты</h4>
                    <p className="text-sm text-muted-foreground">Наши инженеры прошли обучение на заводе-производителе в Италии.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Гарантия качества</h4>
                    <p className="text-sm text-muted-foreground">Используем только оригинальные запчасти и соблюдаем стандарты производителя.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Быстрая реакция</h4>
                    <p className="text-sm text-muted-foreground">Собственная служба логистики и выездные бригады в ключевых регионах России.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/c7495e1e-3f3b-4a4b-90c8-3a523b8658ae.jpg"
                alt="Наш сервисный центр"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block pb-4">
              Наши партнеры
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Nelden Italy', 'Газпром', 'Лукойл', 'СИБУР', 'НЛМК', 'Северсталь'].map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <span className="text-primary font-bold text-center">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block pb-4">
              Контакты
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-secondary"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-8 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-primary mb-3">Адрес</h3>
              <p className="text-sm text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
              <p className="text-sm text-muted-foreground">Бизнес-центр "Технопарк", офис 405</p>
            </Card>

            <Card className="text-center p-8 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-primary mb-3">Телефон</h3>
              <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground">+7 (800) 100-50-50 (бесплатно)</p>
            </Card>

            <Card className="text-center p-8 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-primary mb-3">Email</h3>
              <p className="text-sm text-muted-foreground">info@nelden-russia.ru</p>
              <p className="text-sm text-muted-foreground">service@nelden-russia.ru</p>
            </Card>

            <Card className="text-center p-8 hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-primary mb-3">Режим работы</h3>
              <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Сб: 10:00 - 16:00</p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 uppercase font-semibold tracking-wide"
            >
              Отправить запрос
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Nelden Russia
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-secondary"></span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Официальное представительство Nelden Industry в России. Сервисное обслуживание, ремонт и поставка запчастей для промышленного оборудования.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Услуги
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Техническое обслуживание</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Ремонт оборудования</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Поставка запчастей</a></li>
                <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Пусконаладочные работы</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 relative pb-3">
                Контакты
                <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-secondary"></span>
              </h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Промышленная, 15</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@nelden-russia.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Nelden Industry Russia. Все права защищены.</p>
            <p className="mt-1">Официальное представительство Nelden Industry S.p.A. (Италия)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
