import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Промышленное оборудование A100',
    category: 'Станки',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg',
    power: '15 кВт',
    weight: '2500 кг',
    precision: '0.001 мм',
    description: 'Высокоточное промышленное оборудование для обработки металлов'
  },
  {
    id: 2,
    name: 'Обрабатывающий центр B200',
    category: 'Станки',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg',
    power: '22 кВт',
    weight: '3500 кг',
    precision: '0.0005 мм',
    description: 'Многофункциональный обрабатывающий центр с ЧПУ'
  },
  {
    id: 3,
    name: 'Система автоматизации C300',
    category: 'Автоматизация',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/46b5fe03-2686-484a-a33b-5b55655cd14e.jpg',
    power: '5 кВт',
    weight: '500 кг',
    precision: 'N/A',
    description: 'Интеллектуальная система автоматизации производства'
  },
  {
    id: 4,
    name: 'Конвейерная линия D400',
    category: 'Логистика',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/46b5fe03-2686-484a-a33b-5b55655cd14e.jpg',
    power: '10 кВт',
    weight: '1500 кг',
    precision: 'N/A',
    description: 'Модульная конвейерная система для оптимизации логистики'
  },
  {
    id: 5,
    name: 'Токарный станок E500',
    category: 'Станки',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg',
    power: '18 кВт',
    weight: '2800 кг',
    precision: '0.002 мм',
    description: 'Токарный станок с программным управлением'
  },
  {
    id: 6,
    name: 'Робототехнический комплекс F600',
    category: 'Автоматизация',
    image: 'https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/46b5fe03-2686-484a-a33b-5b55655cd14e.jpg',
    power: '8 кВт',
    weight: '800 кг',
    precision: '0.01 мм',
    description: 'Промышленный робот для автоматизации производственных процессов'
  }
];

const services = [
  {
    icon: 'Wrench',
    title: 'Техническое обслуживание',
    description: 'Комплексное обслуживание промышленного оборудования с гарантией качества'
  },
  {
    icon: 'Settings',
    title: 'Модернизация',
    description: 'Обновление и модернизация существующего оборудования для повышения эффективности'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Техническая поддержка 24/7',
    description: 'Круглосуточная поддержка специалистов для решения любых вопросов'
  },
  {
    icon: 'GraduationCap',
    title: 'Обучение персонала',
    description: 'Профессиональное обучение работе с оборудованием и системами автоматизации'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Станки', 'Автоматизация', 'Логистика'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/5e07de1b-51e6-496f-a0f6-eeaaf347bf6d.png" 
                alt="Nelden Industry Logo" 
                className="h-10 w-10 object-contain"
              />
              <img 
                src="https://cdn.poehali.dev/files/1ba42836-a64d-4a99-a569-f90fb37006e3.png" 
                alt="Nelden" 
                className="h-7 object-contain"
              />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors font-medium">
                Продукция
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
                О компании
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('specs')} className="text-foreground hover:text-primary transition-colors font-medium">
                Технические характеристики
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button className="hidden md:flex">
              Заказать консультацию
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Промышленные решения для вашего бизнеса
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Комплексные услуги по поставке, установке и обслуживанию промышленного оборудования с акцентом на надежность и качество
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" className="font-semibold" onClick={() => scrollToSection('products')}>
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                  Связаться с нами
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-white/80">лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80">реализованных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80">техподдержка</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-2xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/54b4775d-275e-4dcb-b69a-10314def41ec.jpg" 
                  alt="Промышленное оборудование" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент промышленного оборудования с возможностью фильтрации и поиска
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск оборудования..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className="mb-3">{product.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-semibold">{product.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Вес:</span>
                      <span className="font-semibold">{product.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Точность:</span>
                      <span className="font-semibold">{product.precision}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Запросить КП
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Продукция не найдена</p>
              <p className="text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-primary">О компании</h2>
              <p className="text-lg mb-4 text-foreground">
                Нелден Индастри — ведущий поставщик промышленного оборудования и комплексных решений для автоматизации производства в России.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                На протяжении более 15 лет мы помогаем предприятиям повышать эффективность производства, предлагая надежное оборудование и профессиональный сервис.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Наш подход основан на глубоком понимании потребностей клиента и предоставлении решений, которые действительно работают.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <Icon name="Award" size={32} className="text-secondary mb-3" />
                  <h4 className="font-bold mb-2">Сертифицировано</h4>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <Icon name="Shield" size={32} className="text-secondary mb-3" />
                  <h4 className="font-bold mb-2">Гарантия качества</h4>
                  <p className="text-sm text-muted-foreground">До 5 лет</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/f78d8f22-1f18-48b4-9a50-06a27356b1e9/files/c7495e1e-3f3b-4a4b-90c8-3a523b8658ae.jpg" 
                alt="О компании" 
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание на всех этапах: от консультации до постгарантийной поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-12 text-center text-white animate-scale-in">
            <h3 className="text-3xl font-bold mb-4">Индивидуальный подход к каждому проекту</h3>
            <p className="text-xl mb-8 text-white/90">
              Мы анализируем специфику вашего производства и предлагаем оптимальные решения
            </p>
            <Button size="lg" variant="secondary" className="font-semibold">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section id="specs" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">Технические характеристики</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Детальная информация о параметрах оборудования
            </p>
          </div>

          <Tabs defaultValue="machines" className="animate-fade-in">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="machines">Станки</TabsTrigger>
              <TabsTrigger value="automation">Автоматизация</TabsTrigger>
              <TabsTrigger value="logistics">Логистика</TabsTrigger>
            </TabsList>

            <TabsContent value="machines" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Характеристики станочного оборудования</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Основные параметры</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Мощность двигателя</span>
                          <span className="font-semibold">15-22 кВт</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Точность обработки</span>
                          <span className="font-semibold">0.0005-0.002 мм</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Рабочая зона</span>
                          <span className="font-semibold">800×600×500 мм</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Скорость шпинделя</span>
                          <span className="font-semibold">До 12000 об/мин</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Дополнительные возможности</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Система ЧПУ последнего поколения</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Автоматическая смена инструмента</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Система охлаждения с рециркуляцией</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Удаленный мониторинг параметров</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Системы автоматизации</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Технические параметры</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Потребляемая мощность</span>
                          <span className="font-semibold">5-8 кВт</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Грузоподъемность</span>
                          <span className="font-semibold">До 200 кг</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Радиус действия</span>
                          <span className="font-semibold">1500 мм</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Точность позиционирования</span>
                          <span className="font-semibold">±0.01 мм</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Функциональность</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Программируемая логика работы</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Интеграция с ERP-системами</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Система безопасности и датчиков</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Удаленное управление и диагностика</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logistics" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Логистическое оборудование</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Технические данные</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Мощность привода</span>
                          <span className="font-semibold">10 кВт</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Скорость транспортировки</span>
                          <span className="font-semibold">0.5-2 м/с</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Максимальная нагрузка</span>
                          <span className="font-semibold">300 кг/м</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Ширина ленты</span>
                          <span className="font-semibold">400-1200 мм</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Преимущества</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Модульная конструкция для гибкости</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Низкое энергопотребление</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Простота обслуживания и ремонта</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                          <span className="text-sm">Датчики контроля загрузки</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-primary">Свяжитесь с нами</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Готовы обсудить ваш проект? Наши специалисты ответят на все вопросы и помогут выбрать оптимальное решение
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (800) 555-00-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@nelden-industry.ru</p>
                    <p className="text-muted-foreground">sales@nelden-industry.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">Россия, Москва</p>
                    <p className="text-muted-foreground">ул. Промышленная, д. 25, офис 301</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить запрос
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/5dfde240-9c39-4de8-a7c8-0e2f34cdad86.png" 
                  alt="Nelden Industry" 
                  className="h-8 object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/80 text-sm">
                Надежный партнер в области промышленного оборудования и автоматизации
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Станки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Логистика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@nelden-industry.ru</li>
                <li>Москва, ул. Промышленная, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2024 Нелден Индастри. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}