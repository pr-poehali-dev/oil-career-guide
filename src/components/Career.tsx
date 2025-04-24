import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, TrendingUp, Award, Building, Briefcase } from "lucide-react";

const Career = () => {
  const careerPaths = [
    {
      title: "Технический путь",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      description: "Карьерный рост по техническим специальностям",
      steps: [
        {
          position: "Помощник бурильщика / Лаборант / Оператор",
          years: "0-2 года",
          salary: "80 000 - 120 000 ₽",
          description: "Начальные позиции, требующие базовых технических знаний и готовности к обучению"
        },
        {
          position: "Бурильщик / Старший лаборант / Инженер",
          years: "2-5 лет",
          salary: "120 000 - 200 000 ₽",
          description: "Позиции среднего уровня, требующие специализированных знаний и опыта работы"
        },
        {
          position: "Мастер / Ведущий инженер / Технолог",
          years: "5-10 лет",
          salary: "200 000 - 300 000 ₽",
          description: "Специалисты высокого уровня с глубокими знаниями в узких областях нефтяного дела"
        },
        {
          position: "Главный специалист / Эксперт",
          years: "10+ лет",
          salary: "300 000 - 450 000 ₽",
          description: "Высокооплачиваемые позиции для экспертов в своей области с большим опытом"
        }
      ]
    },
    {
      title: "Управленческий путь",
      icon: <Building className="h-8 w-8 text-primary" />,
      description: "Карьерный рост по линии административного управления",
      steps: [
        {
          position: "Мастер / Руководитель группы",
          years: "3-5 лет",
          salary: "150 000 - 250 000 ₽",
          description: "Начальные руководящие позиции, требующие лидерских качеств и технических знаний"
        },
        {
          position: "Начальник участка / Начальник отдела",
          years: "5-8 лет",
          salary: "250 000 - 350 000 ₽",
          description: "Управление подразделениями среднего размера, ответственность за выполнение производственных задач"
        },
        {
          position: "Заместитель директора / Главный инженер",
          years: "8-12 лет",
          salary: "350 000 - 500 000 ₽",
          description: "Высшее звено менеджмента, стратегическое управление направлениями деятельности"
        },
        {
          position: "Директор / Вице-президент",
          years: "12+ лет",
          salary: "500 000 - 1 000 000+ ₽",
          description: "Топ-менеджмент компании, принятие ключевых стратегических решений"
        }
      ]
    },
    {
      title: "Научно-исследовательский путь",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Карьера в области научных исследований и разработок",
      steps: [
        {
          position: "Младший научный сотрудник / Инженер-исследователь",
          years: "0-3 года",
          salary: "90 000 - 150 000 ₽",
          description: "Участие в исследовательских проектах под руководством опытных специалистов"
        },
        {
          position: "Научный сотрудник / Старший инженер",
          years: "3-7 лет",
          salary: "150 000 - 250 000 ₽",
          description: "Ведение самостоятельных исследований, разработка новых технологий"
        },
        {
          position: "Ведущий научный сотрудник / Руководитель лаборатории",
          years: "7-12 лет",
          salary: "250 000 - 400 000 ₽",
          description: "Руководство исследовательскими группами, определение направлений исследований"
        },
        {
          position: "Главный научный сотрудник / Директор по НИОКР",
          years: "12+ лет",
          salary: "400 000 - 600 000+ ₽",
          description: "Формирование научной политики компании, руководство инновационной деятельностью"
        }
      ]
    }
  ];

  const companies = [
    {
      name: "ПАО «Роснефть»",
      description: "Крупнейшая нефтегазовая компания России с обширной программой развития молодых специалистов",
      opportunities: "Стажировки, корпоративный университет, программы наставничества, карьерный рост",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      name: "ПАО «Газпром нефть»",
      description: "Технологичная компания с развитой системой корпоративного обучения и карьерного продвижения",
      opportunities: "Цифровая трансформация, международные проекты, профессиональные конкурсы",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      name: "ПАО «ЛУКОЙЛ»",
      description: "Международная вертикально интегрированная нефтегазовая компания с возможностями работы за рубежом",
      opportunities: "Международная карьера, социальные гарантии, корпоративные награды",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      name: "ПАО «Татнефть»",
      description: "Инновационная компания с фокусом на экологичные и эффективные технологии добычи",
      opportunities: "Инновационные проекты, научно-техническая деятельность, региональные льготы",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      name: "ПАО «Сургутнефтегаз»",
      description: "Компания с высокой корпоративной культурой и стабильностью, особое внимание уделяет развитию персонала",
      opportunities: "Расширенный социальный пакет, жилищные программы, спортивные мероприятия",
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <section id="career" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Карьерные возможности в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Нефтяная отрасль предлагает разнообразные пути развития карьеры с возможностью 
          достижения высоких позиций и уровня дохода. Данные актуальны на 2025 год.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {careerPaths.map((path, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow h-full">
              <div className="mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-muted-foreground mb-4">{path.description}</p>
              
              <Accordion type="single" collapsible className="w-full">
                {path.steps.map((step, stepIndex) => (
                  <AccordionItem key={stepIndex} value={`item-${index}-${stepIndex}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <div className="font-medium">{step.position}</div>
                        <div className="text-sm text-muted-foreground">{step.years}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 space-y-2">
                        <div className="font-medium">
                          Зарплата: <span className="text-primary">{step.salary}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Ведущие компании нефтегазовой отрасли 2025</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium">{company.name}</h4>
                  {company.icon}
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{company.description}</p>
                <div className="flex items-start space-x-2">
                  <ArrowUpRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm"><span className="font-medium">Возможности:</span> {company.opportunities}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;