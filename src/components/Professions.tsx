import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { HardHat, Microscope, Wrench, ChartBar, Search, Beaker, Cog } from "lucide-react";

const Professions = () => {
  const professionCategories = [
    {
      id: "field",
      name: "Полевые специальности",
      description: "Профессии, связанные с непосредственной работой на месторождениях",
      professions: [
        {
          title: "Бурильщик",
          description: "Специалист, управляющий процессом бурения скважин для добычи нефти и газа",
          icon: <HardHat className="h-12 w-12 text-primary" />,
          salary: "от 120 000 до 250 000 ₽",
          demand: "Высокий",
          requirements: "Среднее профессиональное образование, физическая выносливость",
        },
        {
          title: "Оператор по добыче нефти и газа",
          description: "Контролирует и обеспечивает бесперебойную работу оборудования для добычи нефти и газа",
          icon: <Cog className="h-12 w-12 text-primary" />,
          salary: "от 90 000 до 180 000 ₽",
          demand: "Стабильно высокий",
          requirements: "Среднее профессиональное образование, технический склад ума",
        },
        {
          title: "Помощник бурильщика",
          description: "Ассистирует бурильщику в процессе бурения скважин и обслуживания бурового оборудования",
          icon: <Wrench className="h-12 w-12 text-primary" />,
          salary: "от 80 000 до 150 000 ₽",
          demand: "Высокий",
          requirements: "Среднее профессиональное образование, физическая выносливость",
        },
      ],
    },
    {
      id: "technical",
      name: "Технические специальности",
      description: "Инженерные и технические профессии в нефтяной промышленности",
      professions: [
        {
          title: "Инженер-нефтяник",
          description: "Проектирует и контролирует процессы разработки месторождений нефти и газа",
          icon: <ChartBar className="h-12 w-12 text-primary" />,
          salary: "от 150 000 до 300 000 ₽",
          demand: "Очень высокий",
          requirements: "Высшее образование, аналитический склад ума",
        },
        {
          title: "Геолог-нефтяник",
          description: "Изучает геологическое строение месторождений для определения запасов нефти и газа",
          icon: <Search className="h-12 w-12 text-primary" />,
          salary: "от 130 000 до 250 000 ₽",
          demand: "Высокий",
          requirements: "Высшее образование, пространственное мышление",
        },
        {
          title: "Лаборант химического анализа",
          description: "Проводит анализы качества нефти, нефтепродуктов и химических реагентов",
          icon: <Beaker className="h-12 w-12 text-primary" />,
          salary: "от 70 000 до 120 000 ₽",
          demand: "Средний",
          requirements: "Среднее профессиональное образование, внимательность",
        },
      ],
    },
    {
      id: "management",
      name: "Управленческие должности",
      description: "Руководящие позиции в нефтяной отрасли",
      professions: [
        {
          title: "Начальник участка бурения",
          description: "Руководит работой бурового участка, координирует процессы бурения скважин",
          icon: <HardHat className="h-12 w-12 text-primary" />,
          salary: "от 250 000 до 400 000 ₽",
          demand: "Высокий",
          requirements: "Высшее образование, опыт работы от 5 лет, лидерские качества",
        },
        {
          title: "Главный инженер",
          description: "Отвечает за техническую политику предприятия и руководит инженерным составом",
          icon: <Cog className="h-12 w-12 text-primary" />,
          salary: "от 300 000 до 500 000 ₽",
          demand: "Средний",
          requirements: "Высшее образование, опыт работы от 7-10 лет, стратегическое мышление",
        },
        {
          title: "Начальник лаборатории",
          description: "Руководит работой лаборатории по контролю качества нефти и нефтепродуктов",
          icon: <Microscope className="h-12 w-12 text-primary" />,
          salary: "от 180 000 до 300 000 ₽",
          demand: "Средний",
          requirements: "Высшее образование, опыт работы от 5 лет, организаторские способности",
        },
      ],
    },
  ];

  return (
    <section id="professions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Основные профессии в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Нефтяная отрасль предлагает широкий спектр карьерных возможностей с различными требованиями 
          к образованию и навыкам. Обзор актуальных профессий на 2025 год.
        </p>

        <Tabs defaultValue="field" className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto mb-8">
            {professionCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {professionCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.professions.map((profession, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div className="bg-primary/10 p-3 rounded-lg">{profession.icon}</div>
                        <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          Востребованность: {profession.demand}
                        </div>
                      </div>
                      <CardTitle className="mt-4">{profession.title}</CardTitle>
                      <CardDescription className="mt-2">{profession.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Зарплата (2025):</span>
                          <span className="font-medium">{profession.salary}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Требования:</span>
                          <span className="text-right">{profession.requirements}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => document.getElementById('education')?.scrollIntoView({behavior: 'smooth'})}>
                        Узнать о подготовке
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Professions;