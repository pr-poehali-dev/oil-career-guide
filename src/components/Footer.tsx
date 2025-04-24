import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <span className="text-secondary mr-2">⛽</span> Нефтяное дело
            </Link>
            <p className="mt-2 max-w-md text-primary-foreground/80">
              Информативный гид для школьников и их родителей о карьере в нефтяной промышленности. 
              Данные актуальны на 2025 год.
            </p>
          </div>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={scrollToTop}
            className="group"
          >
            Наверх <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pros-cons" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Преимущества и недостатки
                </a>
              </li>
              <li>
                <a href="#professions" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Профессии
                </a>
              </li>
              <li>
                <a href="#career" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#education" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Образование
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Навыки
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.rosneft.ru/Development/personnel/young_specialists/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Программы для молодых специалистов
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gubkin.ru/enrollee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Поступление в нефтегазовый ВУЗ
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gazprom-neft.ru/career/graduates/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Стажировки для студентов
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tatneft.ru/social-policy/educational-projects/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Образовательные проекты
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            <p className="text-primary-foreground/80 mb-2">
              Если у вас остались вопросы о карьере в нефтяной промышленности, свяжитесь с нами:
            </p>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">
                Email: info@neftyanoedelo.ru
              </li>
              <li className="text-primary-foreground/80">
                Телефон: +7 (495) 123-45-67
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mt-8 mb-6" />

        <div className="text-center text-primary-foreground/60 text-sm">
          <p>© 2025 Нефтяное дело. Проектная работа. Все права защищены.</p>
          <p className="mt-1">
            Информация на сайте носит исключительно информационный характер и не является публичной офертой.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;