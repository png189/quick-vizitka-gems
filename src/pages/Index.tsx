import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Code, Palette, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Современная платформа электронной коммерции с интеграцией платежей",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Мобильное приложение для управления финансами с AI-помощником",
      tags: ["React Native", "TypeScript", "AI"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 3,
      title: "Design System",
      description: "Комплексная система дизайна для enterprise-продуктов",
      tags: ["Figma", "React", "Storybook"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time аналитическая панель для маркетинговых данных",
      tags: ["Next.js", "D3.js", "Firebase"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const skills = [
    { icon: Code, name: "Разработка", items: ["React", "TypeScript", "Node.js", "Python"] },
    { icon: Palette, name: "Дизайн", items: ["UI/UX", "Figma", "Adobe XD", "Webflow"] },
    { icon: Rocket, name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Портфолио
            </h2>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-primary transition-colors">О себе</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              Доступен для проектов
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Александр Иванов
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full-Stack разработчик & UI/UX дизайнер
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Создаю современные веб-приложения с фокусом на пользовательский опыт 
              и производительность. Превращаю идеи в цифровые решения.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                Посмотреть проекты
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Привет! Я занимаюсь разработкой более 5 лет и специализируюсь на создании 
              современных веб-приложений. Моя страсть — это сочетание красивого дизайна 
              с функциональным кодом.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Я работал с компаниями от стартапов до enterprise-уровня, помогая им 
              воплощать цифровые идеи в жизнь. Постоянно изучаю новые технологии 
              и методологии для создания лучших продуктов.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Избранные проекты</h2>
          <p className="text-muted-foreground text-center mb-12">
            Некоторые из моих последних работ
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="group/btn text-primary hover:text-primary">
                      Подробнее
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Навыки</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={skill.name}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь со мной</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Открыт для интересных проектов и сотрудничества
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Написать письмо
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Скачать резюме
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center">
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground">
            © 2024 Александр Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
