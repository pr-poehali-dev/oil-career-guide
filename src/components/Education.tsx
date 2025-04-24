import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Clock, MapPin, Globe, ArrowRight } from "lucide-react";

const Education = () => {
  const educationTypes = [
    {
      id: "universities",
      name: "Высшее образование",
      institutions: [
        {
          name: "РГУ нефти и газа им. И.М. Губкина",
          location: "Москва",
          flagship_programs: [
            "Нефтегазовое дело",
            "Геология нефти и газа",
            "Разработка и эксплуатация нефтяных и газовых месторождений"
          ],
          duration: "4 года (бакалавриат), 2 года (магистратура)",
          opportunities: "Международный обмен, стажировки в ведущих компаниях",
          admission: "ЕГЭ: математика, физика/химия, русский язык",
          url: "https://www.gubkin.ru"
        },
        {
          name: "Тюменский индустриальный университет",
          location: "Тюмень",
          flagship_programs: [
            "Нефтегазовая инженерия",
            "Бурение нефтяных и газовых скважин",
            "Эксплуатация и обслуживание объектов нефтедобычи"
          ],
          duration: "4 года (бакалавриат), 2 года (магистратура)",
          opportunities: "Практика на месторождениях Западной Сибири",
          admission: "ЕГЭ: математика, физика/информатика, русский язык",
          url: "https://www.tyuiu.ru"
        },
        {
          name: "Уфимский государственный нефтяной технический университет",
          location: "Уфа",
          flagship_programs: [
            "Нефтегазовое дело",
            "Технологические машины и оборудование",
            "Химическая технология"
          ],
          duration: "4 года (бакалавриат), 2 года (магистратура)",
          opportunities: "Центр дополнительного профессионального образования",
          admission: "ЕГЭ: математика, физика/химия, русский язык",
          url: "https://www.usptu.ru"
        }
      ]
    },
    {
      id: "colleges",
      name: "Среднее профессиональное образование",
      institutions: [
        {
          name: "Колледж нефтехимии и нефтепереработки им. Н.В. Лемаева",
          location: "Нижнекамск",
          flagship_programs: [
            "Оператор нефтепереработки",
            "Слесарь по ремонту технологических установок",
            "Аппаратчик химического производства"
          ],
          duration: "2 года 10 месяцев (на базе 11 классов)",
          opportunities: "Трудоустройство на предприятиях ТАИФ и Татнефть",
          admission: "Конкурс аттестатов, собеседование",
          url: "https://www.nnk.edu.ru"
        },
        {
          name: "Сургутский нефтяной техникум",
          location: "Сургут",
          flagship_programs: [
            "Разработка и эксплуатация нефтяных и газовых месторождений",
            "Бурение нефтяных и газовых скважин",
            "Переработка нефти и газа"
          ],
          duration: "3 года 10 месяцев (на базе 9 классов)",
          opportunities: "Практика в Сургутнефтегаз",
          admission: "Конкурс аттестатов",
          url: "https://www.snt.edu.ru"
        },
        {
          name: "Тюменский нефтепроводный профессиональный колледж",
          location: "Тюмень",
          flagship_programs: [
            "Сооружение и эксплуатация газонефтепроводов и газонефтехранилищ",
            "Автоматизация технологических процессов",
            "Монтаж и техническая эксплуатация промышленного оборудования"
          ],
          duration: "3 года 10 месяцев",
          opportunities: "Сотрудничество с Транснефть",
          admission: "Конкурс аттестатов, тестирование",
          url: "https://www.tnpk.ru"
        }
      ]
    },
    {
      id: "additional",
      name: "Дополнительное образование",
      institutions: [
        {
          name: "Корпоративный университет Роснефти",
          location: "Москва (и филиалы)",
          flagship_programs: [
            "Школа мастеров",
            "Молодой специалист",
            "Технологическое лидерство"
          ],
          duration: "От 1 недели до 2 лет",
          opportunities: "Карьерный рост внутри компании",
          admission: "Сотрудники компании",
          url: "https://www.rosneft.ru"
        },
        {
          name: "Центр дополнительного образования УГНТУ",
          location: "Уфа",
          flagship_programs: [
            "Переработка нефти и газа",
            "Геология и разведка нефтяных месторождений",
            "Экономика нефтегазового комплекса"
          ],
          duration: "От 2 недель до 6 месяцев",
          opportunities: "Повышение квалификации и переподготовка",
          admission: "Открытый набор",
          url: "https://ipkoil.ru"
        },
        {
          name: "EdTech-платформы специализированные курсы (Skillbox, Coursera)",
          location: "Онлайн",
          flagship_programs: [
            "Цифровизация нефтегазовой отрасли",
            "Управление нефтегазовыми проектами",
            "Нефтегазовый инжиниринг"
          ],
          duration: "2-6 месяцев",
          opportunities: "Гибкий график обучения",
          admission: "Свободная регистрация",
          url: "https://www.coursera.org"
        }
      ]
    }
  ];

  const scholarships = [
    {
      name: "Стипендия имени И.М. Губкина",
      description: "Для студентов РГУ нефти и газа, показывающих выдающиеся результаты",
      amount: "До 25 000 ₽ ежемесячно",
      requirements: "Отличная успеваемость, научные публикации"
    },
    {
      name: "Корпоративные стипендии Роснефти",
      description: "Для целевых студентов, обучающихся на нефтегазовых специальностях",
      amount: "От 15 000 до 30 000 ₽ ежемесячно",
      requirements: "Средний балл не ниже 4.5, участие в корпоративных мероприятиях"
    },
    {
      name: "Газпромбанк-стипендия",
      description: "Для талантливых студентов нефтегазовых вузов",
      amount: "20 000 ₽ ежемесячно",
      requirements: "Высокая академическая успеваемость, проектная работа"
    }
  ];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Получение образования в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Обзор образовательных возможностей для желающих построить карьеру 
          в нефтегазовой отрасли. Данные актуальны на 2025 год.
        </p>

        <Tabs defaultValue="universities" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            {educationTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id}>
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {educationTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {type.institutions.map((institution, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <GraduationCap className="h-8 w-8 text-primary mb-2" />
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {institution.location}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{institution.name}</CardTitle>
                      <CardDescription className="mt-1 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Длительность: {institution.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <h4 className="font-medium mb-2">Основные программы:</h4>
                      <ul className="space-y-1 ml-5 list-disc text-sm">
                        {institution.flagship_programs.map((program, idx) => (
                          <li key={idx}>{program}</li>
                        ))}
                      </ul>
                      <div className="mt-4 space-y-2">
                        <div className="flex">
                          <BookOpen className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          <div className="text-sm">
                            <span className="font-medium">Поступление:</span> {institution.admission}
                          </div>
                        </div>
                        <div className="flex">
                          <Globe className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          <div className="text-sm">
                            <span className="font-medium">Возможности:</span> {institution.opportunities}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={institution.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Перейти на сайт <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Стипендиальные программы в 2025 году</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                  <CardDescription>{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Сумма:</span> {scholarship.amount}
                    </div>
                    <div>
                      <span className="font-medium">Требования:</span> {scholarship.requirements}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-medium mb-4">Рекомендации при выборе образования</h4>
          <ul className="max-w-3xl mx-auto text-left space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Выбирайте учебные заведения с хорошими связями с индустрией и программами стажировок</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Обращайте внимание на современность лабораторий и технической базы учебного заведения</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Интересуйтесь возможностями практики на реальных производствах</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Ищите программы целевого обучения от нефтяных компаний</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Дополняйте основное образование курсами по смежным специальностям (экономика, IT, экология)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;