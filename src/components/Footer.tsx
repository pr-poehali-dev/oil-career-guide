import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-secondary mr-2">⛽</span> Нефтяное дело
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Информативный гид по карьере в нефтяной промышленности для школьников и их родителей.
              Все данные актуализированы на 2025 год.
            </p>
            <p className="text-primary-foreground/80">
              Проектная работа по профессиональной ориентации
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pros-cons" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Преимущества и недостатки
                </a>
              </li>
              <li>
                <a href="#professions" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Профессии в отрасли
                </a>
              </li>
              <li>
                <a href="#career" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Карьерные возможности
                </a>
              </li>
              <li>
                <a href="#education" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Образование
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Необходимые навыки
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            <div className="flex items-start mb-3">
              <Mail className="h-5 w-5 mr-2 mt-0.5 text-secondary" />
              <a href="mailto:irinapodlesnaa76@gmail.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                irinapodlesnaa76@gmail.com
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm mt-6">
              Для получения дополнительной информации о профессиях в нефтяной отрасли вы можете обратиться в профориентационные центры ведущих нефтяных компаний.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © {currentYear} Нефтяное дело. Все права защищены.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Проектная работа обновлена в 2025 году
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;