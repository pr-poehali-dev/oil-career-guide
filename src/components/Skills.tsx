import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Hammer, 
  HeartHandshake, 
  Languages, 
  LayoutGrid, 
  Lightbulb, 
  LineChart, 
  Microscope, 
  Scroll, 
  Signal, 
  Wrench 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "technical",
      name: "Технические навыки",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        {
          name: "Знание нефтегазового оборудования",
          importance: 95,
          description: "Понимание принципов работы буровых установок, насосов, компрессоров и другого оборудования",
          icon: <Hammer className="h-8 w-8 text-primary" />
        },
        {
          name: "Интерпретация геологических данных",
          importance: 90,
          description: "Умение анализировать данные о строении пластов и свойствах горных пород",
          icon: <Signal className="h-8 w-8 text-primary" />
        },
        {
          name: "Знание процессов нефтедобычи",
          importance: 85,
          description: "Понимание технологических цепочек от разведки до транспортировки нефти",
          icon: <LayoutGrid className="h-8 w-8 text-primary" />
        },
        {
          name: "Лабораторные исследования",
          importance: 80,
          description: "Навыки проведения химического анализа нефти, газа и нефтепродуктов",
          icon: <Microscope className="h-8 w-8 text-primary" />
        }
      ]
    },
    {
      id: "digital",
      name: "Цифровые навыки",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: [
        {
          name: "Работа со специализированным ПО",
          importance: 90,
          description: "Владение программами для моделирования месторождений (Petrel, Eclipse, Roxar)",
          icon: <BrainCircuit className="h-8 w-8 text-primary" />
        },
        {
          name: "Анализ больших данных",
          importance: 85,
          description: "Умение обрабатывать и интерпретировать большие массивы производственных данных",
          icon: <LineChart className="h-8 w-8 text-primary" />
        },
        {
          name: "Автоматизированные системы управления",
          importance: 80,
          description: "Навыки работы с АСУ ТП и системами мониторинга производства",
          icon: <Signal className="h-8 w-8 text-primary" />
        },
        {
          name: "Базовое программирование",
          importance: 75,
          description: "Знание основ программирования для автоматизации рутинных задач (Python, R)",
          icon: <Scroll className="h-8 w-8 text-primary" />
        }
      ]
    },
    {
      id: "soft",
      name: "Гибкие навыки",
      icon: <Lightbulb className="h-5 w-5" />,
      skills: [
        {
          name: "Работа в команде",
          importance: 95,
          description: "Умение эффективно взаимодействовать в коллективе различных специалистов",
          icon: <HeartHandshake className="h-8 w-8 text-primary" />
        },
        {
          name: "Адаптивность",
          importance: 90,
          description: "Готовность работать в изменяющихся условиях, часто в экстремальной среде",
          icon: <Lightbulb className="h-8 w-8 text-primary" />
        },
        {
          name: "Аналитическое мышление",
          importance: 85,
          description: "Способность анализировать сложные технические проблемы и находить решения",
          icon: <BrainCircuit className="h-8 w-8 text-primary" />
        },
        {
          name: "Иностранные языки",
          importance: 80,
          description: "Английский язык для работы с документацией и международными партнерами",
          icon: <Languages className="h-8 w-8 text-primary" />
        }
      ]
    }
  ];

  const educationLevels = [
    {
      title: "Бакалавриат / специалитет",
      description: "Базовое высшее образование по нефтегазовому направлению",
      skills: ["Фундаментальные знания о нефтегазовой отрасли", "Основы геологии и разработки месторождений", "Базовые знания о технологическом оборудовании"]
    },
    {
      title: "Магистратура",
      description: "Углубленная специализация и исследовательские навыки",
      skills: ["Углубленные знания в узкой специализации", "Научно-исследовательские компетенции", "Навыки анализа и оптимизации производственных процессов"]
    },
    {
      title: "Дополнительное профессиональное образование",
      description: "Повышение квалификации и профессиональная переподготовка",
      skills: ["Актуализация знаний о современных технологиях", "Изучение нового оборудования и методов работы", "Специализированные курсы по конкретным задачам"]
    }
  ];

  const personalQualities = [
    {
      quality: "Стрессоустойчивость",
      description: "Способность сохранять эффективность в сложных и напряженных условиях",
      importance: "Критически важно"
    },
    {
      quality: "Ответственность",
      description: "Понимание последствий своих действий и решений для безопасности и экологии",
      importance: "Критически важно"
    },
    {
      quality: "Дисциплинированность",
      description: "Строгое соблюдение регламентов, инструкций и правил безопасности",
      importance: "Очень важно"
    },
    {
      quality: "Физическая выносливость",
      description: "Готовность к работе в сложных климатических условиях и с физическими нагрузками",
      importance: "Важно для полевых специальностей"
    },
    {
      quality: "Любознательность",
      description: "Интерес к изучению новых технологий и постоянному профессиональному развитию",
      importance: "Важно для карьерного роста"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Необходимые навыки и качества
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Успешная карьера в нефтяной промышленности требует комбинации различных навыков, 
          знаний и личностных качеств. Данные актуальны на 2025 год.
        </p>

        <Tabs defaultValue="technical" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{skill.icon}</div>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Важность</span>
                          <span className="text-sm font-medium">{skill.importance}%</span>
                        </div>
                        <Progress value={skill.importance} className="h-2" />
                      </div>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Образование и знания</h3>
            <div className="space-y-6">
              {educationLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{level.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{level.description}</p>
                    <h4 className="font-medium mb-2">Приобретаемые навыки:</h4>
                    <ul className="space-y-1 ml-5 list-disc text-sm">
                      {level.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Личностные качества</h3>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {personalQualities.map((item, index) => (
                    <div key={index} className="pb-4 border-b last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium">{item.quality}</h4>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
                          {item.importance}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h4 className="text-xl font-medium mb-4">Совет от профессионала</h4>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <blockquote className="italic text-muted-foreground">
                    "В нефтяной отрасли 2025 года особенно ценятся специалисты, которые совмещают 
                    традиционные инженерные знания с пониманием цифровых технологий. Инвестируйте время 
                    в изучение систем автоматизации и анализа данных — это даст вам конкурентное преимущество 
                    на рынке труда."
                  </blockquote>
                  <div className="mt-4 text-right">
                    <p className="font-medium">Александр Петров</p>
                    <p className="text-sm text-muted-foreground">Главный инженер, ПАО "Роснефть"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Востребованные цифровые навыки 2025 года</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Цифровые двойники", level: "Продвинутый" },
              { name: "Машинное обучение", level: "Средний" },
              { name: "Промышленный IoT", level: "Продвинутый" },
              { name: "VR/AR технологии", level: "Базовый" },
              { name: "Кибербезопасность", level: "Средний" },
              { name: "Облачные вычисления", level: "Базовый" },
              { name: "Робототехника", level: "Средний" },
              { name: "Блокчейн", level: "Базовый" }
            ].map((skill, index) => (
              <div key={index} className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">{skill.name}</p>
                <p className="text-sm text-muted-foreground">Уровень: {skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;