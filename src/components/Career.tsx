
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, TrendingUp, Award, Briefcase, Clock, Coins } from "lucide-react";

const Career = () => {
  const careerPaths = [
    {
      title: "Техническая карьера",
      description: "Развитие профессиональных навыков и компетенций в узкой специализации",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      stages: [
        {
          title: "Специалист",
          description: "Начальная позиция после получения образования"
        },
        {
          title: "Старший специалист",
          description: "Расширение зоны ответственности, более сложные задачи"
        },
        {
          title: "Ведущий специалист",
          description: "Наставничество, участие в стратегических проектах"
        },
        {
          title: "Главный специалист / Эксперт",
          description: "Решение наиболее сложных задач, консультирование руководства"
        }
      ]
    },
    {
      title: "Управленческая карьера",
      description: "Развитие лидерских навыков и руководство коллективом",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      stages: [
        {
          title: "Руководитель группы",
          description: "Координация работы небольшой группы специалистов"
        },
        {
          title: "Начальник отдела",
          description: "Управление отделом, решение тактических задач"
        },
        {
          title: "Начальник управления",
          description: "Руководство несколькими отделами, планирование"
        },
        {
          title: "Директор департамента / Вице-президент",
          description: "Стратегическое руководство направлением"
        }
      ]
    }
  ];

  return (
    <section id="career" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Карьерные возможности в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Нефтяная отрасль предлагает разнообразные пути для карьерного роста.
          Вы можете развиваться как в техническом направлении, совершенствуя профессиональные навыки,
          так и в управленческом, развивая лидерские качества.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {careerPaths.map((path, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-primary/5 pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    {path.icon}
                    <span className="ml-3">{path.title}</span>
                  </CardTitle>
                </div>
                <p className="text-muted-foreground mt-2">{path.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {path.stages.map((stage, stageIndex) => (
                    <div key={stageIndex} className="relative">
                      {stageIndex < path.stages.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                      )}
                      <div className="flex">
                        <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                          {stageIndex + 1}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium">{stage.title}</h4>
                          <p className="text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="mr-3 text-primary" />
            Факторы успешной карьеры в нефтяной отрасли
          </h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Опыт работы</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Практический опыт ценится очень высоко. Начинайте с прохождения практик и стажировок еще во время обучения.
              </p>
            </div>
            
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Профессиональное развитие</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Постоянное обучение и получение новых сертификаций повышает вашу ценность как специалиста.
              </p>
            </div>
            
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Coins className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Зарплатные ожидания</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Зарплаты в нефтяной отрасли значительно выше среднего особенно при работе в сложных климатических условиях.
              </p>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <h4 className="font-semibold mb-4 flex items-center">
              <ArrowRight className="h-5 w-5 text-primary mr-2" />
              Советы для успешного карьерного роста
            </h4>
            
            <ul className="grid sm:grid-cols-2 gap-3">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Развивайте не только технические, но и коммуникативные навыки</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Будьте готовы к мобильности и вахтовому методу работы</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Изучайте английский язык – он необходим для работы с документацией</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Участвуйте в отраслевых конференциях и выставках</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Следите за новыми технологиями в отрасли</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span className="text-sm">Найдите наставника среди опытных специалистов</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
