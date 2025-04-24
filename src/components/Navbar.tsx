import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <span className="text-secondary mr-2">⛽</span> Нефтяное дело
          </Link>

          {/* Мобильная кнопка меню */}
          <div className="block lg:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu}
              className="text-primary-foreground hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Десктопное меню */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <a href="#pros-cons" className="hover:text-secondary transition-colors">
                Преимущества и недостатки
              </a>
            </li>
            <li>
              <a href="#professions" className="hover:text-secondary transition-colors">
                Профессии
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-secondary transition-colors">
                Карьера
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-secondary transition-colors">
                Образование
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-secondary transition-colors">
                Навыки
              </a>
            </li>
          </ul>
        </div>

        {/* Мобильное меню */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-2 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="#pros-cons" 
                  className="block py-2 hover:text-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Преимущества и недостатки
                </a>
              </li>
              <li>
                <a 
                  href="#professions" 
                  className="block py-2 hover:text-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Профессии
                </a>
              </li>
              <li>
                <a 
                  href="#career" 
                  className="block py-2 hover:text-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Карьера
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="block py-2 hover:text-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Образование
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="block py-2 hover:text-secondary transition-colors"
                  onClick={toggleMenu}
                >
                  Навыки
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;