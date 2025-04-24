
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HardHat, Beaker, Database, BarChart3, Hammer, Search } from "lucide-react";

interface Profession {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  salary: string;
  education: string;
  workplaces: string[];
  tasks: string[];
}

const Professions = () => {
  const professions: Profession[] = [
    {
      id: "engineer",
      title: "Инженер-нефтяник",
      description: "Специалист, отвечающий за техническое сопровождение бурения, добычи и переработки нефти.",
      icon: <HardHat className="h-12 w-12 text-primary" />,
      salary: "от 90 000 до 250 000 ₽",
      education: "Высшее техническое (бакалавр, магистр)",
      workplaces: ["Нефтедобывающие компании", "Сервисные предприятия", "Проектные институты"],
      tasks: [
        "Разработка технических решений для повышения эффективности добычи",
        "Контроль за соблюдением технологических процессов",
        "Анализ работы скважин и нефтепромыслового оборудования",
        "Планирование работ по ремонту скважин"
      ]
    },
    {
      id: "geologist",
      title: "Геолог-нефтяник",
      description: "Специалист, изучающий геологическое строение месторождений и прогнозирующий запасы нефти.",
      icon: <Search className="h-12 w-12 text-primary" />,
      salary: "от 80 000 до 200 000 ₽",
      education: "Высшее геологическое",
      workplaces: ["Геологоразведочные экспедиции", "Нефтедобывающие компании", "Научно-исследовательские институты"],
      tasks: [
        "Геологическое картирование территорий",
        "Изучение образцов пород и создание геологических моделей",
        "Оценка запасов нефти в месторождениях",
        "Планирование разведочного бурения"
      ]
    },
    {
      id: "lab",
      title: "Лаборант химического анализа",
      description: "Специалист, проводящий лабораторные исследования нефти и нефтепродуктов.",
      icon: <Beaker className="h-12 w-12 text-primary" />,
      salary: "от 50 000 до 90 000 ₽",
      education: "Среднее профессиональное или высшее химическое",
      workplaces: ["Лаборатории на НПЗ", "Научно-исследовательские центры", "Контрольно-аналитические службы"],
      tasks: [
        "Анализ состава и свойств нефти и нефтепродуктов",
        "Контроль качества готовой продукции",
        "Проведение испытаний опытных образцов",
        "Оформление результатов анализа"
      ]
    },
    {
      id: "data",
      title: "Специалист по анализу данных",
      description: "Специалист, занимающийся обработкой и анализом больших массивов данных для оптимизации нефтедобычи.",
      icon: <Database className="h-12 w-12 text-primary" />,
      salary: "от 120 000 до 300 000 ₽",
      education: "Высшее (информатика, математика, нефтяное дело)",
      workplaces: ["IT-отделы нефтяных компаний", "Аналитические центры", "Технологические стартапы"],
      tasks: [
        "Анализ показателей добычи и переработки",
        "Создание моделей для прогнозирования добычи",
        "Разработка алгоритмов оптимизации производства",
        "Визуализация данных для принятия решений"
      ]
    },
    {
      id: "economy",
      title: "Экономист нефтегазовой отрасли",
      description: "Специалист, отвечающий за экономическое планирование и анализ эффективности нефтяных проектов.",
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      salary: "от 70 000 до 180 000 ₽",
      education: "Высшее экономическое",
      workplaces: ["Плановые отделы нефтяных компаний", "Инвестиционные департаменты", "Консалтинговые фирмы"],
      tasks: [
        "Экономическая оценка проектов разработки месторождений",
        "Планирование бюджета на нефтедобычу",
        "Расчет себестоимости продукции",
        "Анализ экономической эффективности производства"
      ]
    },
    {
      id: "technician",
      title: "Оператор по добыче нефти и газа",
      description: "Специалист, непосредственно работающий на объектах нефтедобычи и обслуживающий оборудование.",
      icon: <Hammer className="h-12 w-12 text-primary" />,
      salary: "от 65 000 до 150 000 ₽",
      education: "Среднее профессиональное",
      workplaces: ["Нефтепромыслы", "Буровые площадки", "Нефтеперерабатывающие заводы"],
      tasks: [
        "Обслуживание нефтепромыслового оборудования",
        "Контроль режима работы скважин",
        "Выполнение технологических операций",
        "Ликвидация неполадок оборудования"
      ]
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProfessions = showAll ? professions : professions.slice(0, 3);

  return (
    <section id="professions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Основные профессии в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Нефтяная отрасль объединяет специалистов различных направлений. 
          Познакомьтесь с наиболее востребованными профессиями в этой сфере.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleProfessions.map((profession) => (
            <Card key={profession.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mb-3">{profession.icon}</div>
                <CardTitle>{profession.title}</CardTitle>
                <CardDescription>{profession.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Зарплата:</span>
                  <p className="font-semibold">{profession.salary}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Образование:</span>
                  <p>{profession.education}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Основные задачи:</span>
                  <ul className="mt-1 space-y-1">
                    {profession.tasks.map((task, index) => (
                      <li key={index} className="text-sm">{task}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t pt-4">
                {profession.workplaces.map((workplace, index) => (
                  <Badge key={index} variant="secondary">{workplace}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setShowAll(!showAll)} 
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            {showAll ? "Показать меньше" : "Показать больше профессий"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Professions;
