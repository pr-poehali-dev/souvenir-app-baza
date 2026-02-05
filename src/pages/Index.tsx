import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Керамическая кружка',
      price: 1200,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/444ca658-c2f9-408a-b32b-8d64393dd83a.jpg',
      artist: 'Анна Петрова',
      rating: 4.9,
      reviews: 24,
      category: 'Керамика'
    },
    {
      id: 2,
      name: 'Кожаный кошелёк',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/7f6bac57-4bc8-4071-8616-0d2ad1327795.jpg',
      artist: 'Игорь Смирнов',
      rating: 5.0,
      reviews: 18,
      category: 'Кожа'
    },
    {
      id: 3,
      name: 'Расписная шкатулка',
      price: 1500,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/23cb5d6e-46f7-4083-af76-8bd8a9d98016.jpg',
      artist: 'Мария Козлова',
      rating: 4.8,
      reviews: 32,
      category: 'Роспись'
    },
    {
      id: 4,
      name: 'Керамическая ваза',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/444ca658-c2f9-408a-b32b-8d64393dd83a.jpg',
      artist: 'Анна Петрова',
      rating: 4.7,
      reviews: 15,
      category: 'Керамика'
    },
    {
      id: 5,
      name: 'Кожаный ремень',
      price: 2200,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/7f6bac57-4bc8-4071-8616-0d2ad1327795.jpg',
      artist: 'Игорь Смирнов',
      rating: 4.9,
      reviews: 21,
      category: 'Кожа'
    },
    {
      id: 6,
      name: 'Деревянное панно',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/340a2b18-1f26-4592-8e97-063649b44a53/files/23cb5d6e-46f7-4083-af76-8bd8a9d98016.jpg',
      artist: 'Мария Козлова',
      rating: 5.0,
      reviews: 12,
      category: 'Роспись'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Анна Петрова',
      specialty: 'Керамика',
      rating: 4.9,
      reviews: 89,
      products: 12,
      avatar: 'АП',
      description: 'Мастер керамики с 15-летним опытом. Специализируется на авторской посуде и декоративных изделиях.'
    },
    {
      id: 2,
      name: 'Игорь Смирнов',
      specialty: 'Кожевенное дело',
      rating: 5.0,
      reviews: 67,
      products: 8,
      avatar: 'ИС',
      description: 'Создаёт уникальные кожаные изделия ручной работы. Каждая вещь — произведение искусства.'
    },
    {
      id: 3,
      name: 'Мария Козлова',
      specialty: 'Художественная роспись',
      rating: 4.8,
      reviews: 103,
      products: 24,
      avatar: 'МК',
      description: 'Художник-оформитель. Расписывает деревянные и керамические изделия в традиционном стиле.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/30">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">БАЗА</h1>
                <p className="text-xs text-muted-foreground">Сувениры от мастеров</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск сувениров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">3</Badge>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">2</Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>

          <div className="md:hidden mt-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск сувениров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-none"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Креативные сувениры <br />от мастеров Нижнекамска
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Уникальные изделия ручной работы от резидентов Центра креативных индустрий
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="catalog" className="gap-2">
              <Icon name="Grid3x3" size={16} />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="artists" className="gap-2">
              <Icon name="Users" size={16} />
              Мастера
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Icon name="UserCircle" size={16} />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-6 animate-fade-in">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="cursor-pointer hover-scale px-4 py-2">Все категории</Badge>
              <Badge variant="outline" className="cursor-pointer hover-scale px-4 py-2">Керамика</Badge>
              <Badge variant="outline" className="cursor-pointer hover-scale px-4 py-2">Кожа</Badge>
              <Badge variant="outline" className="cursor-pointer hover-scale px-4 py-2">Роспись</Badge>
              <Badge variant="outline" className="cursor-pointer hover-scale px-4 py-2">Текстиль</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={product.id} className="overflow-hidden hover-lift border-2 group animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="p-0 relative">
                    <div className="absolute top-3 right-3 z-10">
                      <Button size="icon" variant="secondary" className="rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Heart" size={18} />
                      </Button>
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">{product.category}</Badge>
                    <h3 className="font-heading font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Icon name="Palette" size={14} />
                      {product.artist}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-bold text-primary">{product.price} ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Eye" size={18} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artists" className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-heading font-bold mb-2">Наши мастера</h3>
              <p className="text-muted-foreground">Познакомьтесь с талантливыми художниками и ремесленниками</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artists.map((artist, index) => (
                <Card key={artist.id} className="hover-lift animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-heading">
                        {artist.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-heading font-bold">{artist.name}</h3>
                    <p className="text-sm text-muted-foreground">{artist.specialty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < Math.floor(artist.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{artist.rating}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-2xl font-heading font-bold text-primary">{artist.reviews}</p>
                        <p className="text-xs text-muted-foreground">Отзывов</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-2xl font-heading font-bold text-secondary">{artist.products}</p>
                        <p className="text-xs text-muted-foreground">Товаров</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">{artist.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Смотреть работы
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl font-heading">
                    ВИ
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-heading font-bold">Ваш профиль</h3>
                <p className="text-muted-foreground">Управляйте своими заказами и настройками</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="ShoppingBag" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-heading font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Заказов</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="Heart" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-heading font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Избранное</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <Icon name="MessageSquare" size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-heading font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Отзывов</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Package" size={18} />
                    Мои заказы
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Heart" size={18} />
                    Избранное
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="MessageSquare" size={18} />
                    Мои отзывы
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Icon name="Settings" size={18} />
                    Настройки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-heading font-bold mb-3">БАЗА</h4>
              <p className="text-sm text-muted-foreground">Центр креативных индустрий города Нижнекамск</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-3">Контакты</h4>
              <p className="text-sm text-muted-foreground">Нижнекамск, ул. Примерная, 1</p>
              <p className="text-sm text-muted-foreground">+7 (800) 555-35-35</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-3">Следите за нами</h4>
              <div className="flex gap-2 justify-center md:justify-start">
                <Button size="icon" variant="outline">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 БАЗА. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
