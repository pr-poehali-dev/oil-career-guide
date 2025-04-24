
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Code, Users, Target, Book, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "technical",
      icon: <Wrench className="w-5 h-5 mr-2" />,
      title: "Технические навыки",
      skills: [
        "Понимание принципов бурения и добычи нефти",
        "Знание оборудования для нефтедобычи и переработки",
        "Умение читать и создавать технические чертежи",
        "Навыки работы с измерительными приборами",
        "Знание основ механики и гидравлики"
      ]
    },
    {
      id: "digital",
      icon: <Code className="w-5 h-5 mr-2" />,
      title: "Цифровые навыки",
      skills: [
        "Работа со специализированным ПО (Petrel, Schlumberger, Roxar)",
        "Анализ больших объемов данных",
        "Базовые навыки программирования для автоматизации процессов",
        "3D-моделирование месторождений",
        "Работа с геоинформационными системами (ГИС)"
      ]
    },
    {
      id: "soft",
      icon: <Users className="w-5 h-5 mr-2" />,
      title: "Личные качества",
      skills: [
        "Ответственность и внимательность к деталям",
        "Устойчивость к стрессовым ситуациям",
        "Умение работать в команде",
        "Способность принимать решения в сложных условиях",
        "Готовность к профессиональному развитию"
      ]
    },
    {
      id: "knowledge",
      icon: <Brain className="w-5 h-5 mr-2" />,
      title: "Базовые знания",
      skills: [
        "Химия нефти и нефтепродуктов",
        "Геология и геофизика",
        "Физика пластовых процессов",
        "Основы экологии и охраны окружающей среды",
        "Нормативно-правовая база нефтяной отрасли"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Необходимые навыки и качества
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Успешная карьера в нефтяной отрасли требует комплекса профессиональных и личных качеств.
          Развивайте эти навыки, чтобы стать востребованным специалистом.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Target className="mr-2 text-primary" />
            Как развивать необходимые навыки
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Школьникам</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Углубленное изучение физики, химии, математики и информатики</li>
                  <li>Участие в олимпиадах и научных конкурсах технической направленности</li>
                  <li>Посещение дней открытых дверей профильных вузов</li>
                  <li>Участие в летних школах и образовательных программах крупных нефтяных компаний</li>
                  <li>Изучение технической литературы и документальных фильмов о нефтедобыче</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Студентам</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Участие в производственных практиках на предприятиях отрасли</li>
                  <li>Стажировки в нефтяных компаниях</li>
                  <li>Участие в научных исследованиях и конференциях</li>
                  <li>Работа над реальными проектами в рамках дипломных и курсовых работ</li>
                  <li>Получение дополнительных сертификатов и прохождение отраслевых курсов</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Молодым специалистам</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Участие в программах наставничества</li>
                  <li>Изучение английского и других иностранных языков</li>
                  <li>Постоянное обновление профессиональных знаний</li>
                  <li>Участие в корпоративных программах развития</li>
                  <li>Развитие навыков управления проектами и командами</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
