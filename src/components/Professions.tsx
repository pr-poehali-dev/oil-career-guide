import { Card } from "@/components/ui/card";
import { BadgeCheck, HardHat, Wrench, Beaker, Laptop, Microscope, PieChart, Factory } from "lucide-react";

const Professions = () => {
  const professions = [
    {
      title: "Инженер-нефтяник",
      description: "Разрабатывает и оптимизирует технологии добычи нефти и газа, работает с техническими аспектами бурения скважин.",
      icon: <HardHat className="h-8 w-8 text-secondary" />,
      salary: "220,000 - 450,000 ₽",
      prospects: "Высокий спрос до 2035 года"
    },
    {
      title: "Оператор нефтегазодобычи",
      description: "Управляет оборудованием нефтегазовых скважин, контролирует добычу, параметры работы и исправность системы.",
      icon: <Wrench className="h-8 w-8 text-secondary" />,
      salary: "90,000 - 180,000 ₽",
      prospects: "Стабильный спрос, автоматизация части функций"
    },
    {
      title: "Лаборант химического анализа",
      description: "Анализирует свойства нефти, нефтепродуктов и газа, отслеживает качество и соответствие стандартам.",
      icon: <Beaker className="h-8 w-8 text-secondary" />,
      salary: "70,000 - 120,000 ₽",
      prospects: "Высокий спрос на фоне роста требований к качеству"
    },
    {
      title: "Геолог-нефтяник",
      description: "Исследует геологическое строение нефтяных месторождений, прогнозирует запасы и оптимальные методы добычи.",
      icon: <Microscope className="h-8 w-8 text-secondary" />,
      salary: "160,000 - 300,000 ₽",
      prospects: "Высокий спрос на фоне разработки новых месторождений"
    },
    {
      title: "Цифровой аналитик месторождений",
      description: "Анализирует данные с месторождений с помощью цифровых технологий, оптимизирует процессы добычи.",
      icon: <Laptop className="h-8 w-8 text-secondary" />,
      salary: "200,000 - 380,000 ₽",
      prospects: "Растущий спрос на фоне цифровизации отрасли"
    },
    {
      title: "Экономист нефтегазового сектора",
      description: "Анализирует экономические показатели, оценивает рентабельность проектов и инвестиционные риски.",
      icon: <PieChart className="h-8 w-8 text-secondary" />,
      salary: "140,000 - 250,000 ₽",
      prospects: "Стабильный спрос в условиях экономической неопределенности"
    },
    {
      title: "Инженер-эколог в нефтегазе",
      description: "Разрабатывает и внедряет природоохранные технологии, снижает негативное воздействие на окружающую среду.",
      icon: <Factory className="h-8 w-8 text-secondary" />,
      salary: "150,000 - 270,000 ₽",
      prospects: "Растущий спрос в связи с усилением экологических требований"
    },
    {
      title: "Специалист по цифровым двойникам",
      description: "Создает и обслуживает цифровые копии нефтяных объектов для моделирования и оптимизации процессов.",
      icon: <BadgeCheck className="h-8 w-8 text-secondary" />,
      salary: "220,000 - 400,000 ₽",
      prospects: "Высокий спрос на фоне развития технологий Индустрии 4.0"
    }
  ];

  return (
    <section id="professions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Основные профессии в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Нефтяная отрасль предлагает широкий спектр специальностей с различными требованиями и уровнем ответственности. 
          Данные актуальны на 2025 год.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((profession, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow flex flex-col h-full border-t-4 border-t-secondary">
              <div className="flex items-center mb-4">
                {profession.icon}
                <h3 className="text-xl font-semibold ml-3">{profession.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4 flex-grow">{profession.description}</p>
              <div className="pt-4 border-t mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Зарплата (мес.):</span>
                  <span className="text-primary font-bold">{profession.salary}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Перспективы:</span>
                  <span className="text-green-600 text-sm">{profession.prospects}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professions;