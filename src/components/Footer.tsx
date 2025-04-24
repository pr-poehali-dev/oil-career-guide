
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-secondary mr-2">⛽</span> Нефтяное дело
            </h3>
            <p className="text-primary-foreground/80">
              Информативный гид для школьников и их родителей о карьере в нефтяной промышленности.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.gubkin.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  РГУ нефти и газа им. И.М. Губкина
                </a>
              </li>
              <li>
                <a href="https://www.rosneft.ru/Development/personnel/young_specialists/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Программы для молодых специалистов Роснефть
                </a>
              </li>
              <li>
                <a href="https://www.gazprom.ru/careers/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Карьера в Газпром
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты для вопросов</h3>
            <Button variant="outline" className="mb-2 border-white/30 hover:bg-white/10">
              <Mail className="mr-2 w-4 h-4" /> info@neftdelo.ru
            </Button>
            <p className="text-sm text-primary-foreground/70 mt-4">
              * Информация на сайте предназначена для ознакомления и может быть дополнена или изменена в зависимости от текущей ситуации на рынке труда.
            </p>
          </div>
        </div>
        
        <Separator className="my-6 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © 2023 Нефтяное дело. Все права защищены.
          </p>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="mt-4 md:mt-0 hover:bg-white/10" 
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Наверх</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
