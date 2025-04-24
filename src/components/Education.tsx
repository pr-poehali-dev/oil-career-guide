import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Award, Globe, Clock } from "lucide-react";

const Education = () => {
  const universities = [
    {
      name: "Российский государственный университет нефти и газа имени И.М. Губкина",
      programs: ["Нефтегазовое дело", "Геология нефти и газа", "Химическая технология"],
      rating: "Топ-1 в России, топ-100 в мире по нефтегазовому образованию",
      location: "Москва",
      admission: "От 240 баллов ЕГЭ (2025)"
    },
    {
      name: "Тюменский индустриальный университет",
      programs: ["Нефтегазовая инженерия", "Бурение нефтяных и газовых скважин"],
      rating: "Топ-5 в России по нефтегазовому образованию",
      location: "Тюмень",
      admission: "От 220 баллов ЕГЭ (2025)"
    },
    {
      name: "Санкт-Петербургский горный университет",
      programs: ["Нефтегазовое дело", "Разработка и эксплуатация нефтяных и газовых месторождений"],
      rating: "Топ-3 в России, топ-20 в мире среди горно-технических вузов",
      location: "Санкт-Петербург",
      admission: "От 230 баллов ЕГЭ (2025)"
    }
  ];

  const colleges = [
    {
      name: "Волгоградский колледж нефти и газа",
      programs: ["Разработка и эксплуатация нефтяных и газовых месторождений", "Сооружение и эксплуатация газонефтепроводов и газонефтехранилищ"],
      duration: "3 года 10 месяцев",
      location: "Волгоград"
    },
    {
      name: "Ямальский многопрофильный колледж",
      programs: ["Оператор нефтяных и газовых скважин", "Бурение нефтяных и газовых скважин"],
      duration: "3 года 10 месяцев",
      location: "Салехард"
    },
    {
      name: "Сургутский нефтяной техникум",
      programs: ["Переработка нефти и газа", "Монтаж и техническая эксплуатация промышленного оборудования"],
      duration: "3 года 10 месяцев",
      location: "Сургут"
    }
  ];

  const additionalEducation = [
    {
      type: "Корпоративные университеты",
      examples: ["Корпоративный университет Роснефти", "Газпром корпоративный институт"],
      benefits: "Практические знания, гарантированное трудоустройство, бесплатное обучение"
    },
    {
      type: "Профессиональная переподготовка",
      examples: ["Геофизические исследования скважин", "Цифровые технологии в нефтегазе"],
      benefits: "Быстрый вход в профессию, фокус на актуальных навыках, короткий срок обучения"
    },
    {
      type: "Онлайн-курсы",
      examples: ["Нефтегазовая инженерия (Coursera)", "Цифровой нефтяник (edX)"],
      benefits: "Доступность, гибкий график, международная сертификация"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Получение образования в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Существует несколько путей получения образования для работы в нефтяной промышленности, 
          от высшего образования до средне-специального и дополнительного. Данные актуальны на 2025 год.
        </p>
        
        <Tabs defaultValue="universities" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="universities" className="flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" /> Университеты
            </TabsTrigger>
            <TabsTrigger value="colleges" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" /> Колледжи
            </TabsTrigger>
            <TabsTrigger value="additional" className="flex items-center">
              <Award className="mr-2 h-4 w-4" /> Дополнительное образование
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="universities">
            <div className="grid md:grid-cols-3 gap-6">
              {universities.map((uni, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">{uni.name}</h3>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1">Ключевые программы:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {uni.programs.map((program, idx) => (
                        <li key={idx}>{program}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <Award className="h-4 w-4 mr-2 mt-0.5 text-secondary" />
                      <span>{uni.rating}</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-4 w-4 mr-2 mt-0.5 text-secondary" />
                      <span>{uni.location}</span>
                    </div>
                    <div className="flex items-start">
                      <GraduationCap className="h-4 w-4 mr-2 mt-0.5 text-secondary" />
                      <span>{uni.admission}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="colleges">
            <div className="grid md:grid-cols-3 gap-6">
              {colleges.map((college, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">{college.name}</h3>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1">Ключевые программы:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {college.programs.map((program, idx) => (
                        <li key={idx}>{program}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 mr-2 mt-0.5 text-secondary" />
                      <span>Срок обучения: {college.duration}</span>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-4 w-4 mr-2 mt-0.5 text-secondary" />
                      <span>Расположение: {college.location}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="additional">
            <div className="grid md:grid-cols-3 gap-6">
              {additionalEducation.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">{edu.type}</h3>
                  <div className="mb-3">
                    <h4 className="text-sm font-medium mb-1">Примеры:</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {edu.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <h4 className="text-sm font-medium mb-1">Преимущества:</h4>
                    <p className="text-sm text-muted-foreground">{edu.benefits}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Подготовка к поступлению</h3>
          <p className="mb-4">Для успешного поступления на нефтегазовые специальности рекомендуется уделить внимание следующим предметам:</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Обязательные экзамены:</h4>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Математика (профильный уровень)</li>
                <li>Физика или Химия</li>
                <li>Русский язык</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Дополнительная подготовка:</h4>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Подготовительные курсы при университетах</li>
                <li>Олимпиады по профильным предметам</li>
                <li>Профильные классы в школах</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h4 className="font-medium mb-2">Полезные навыки:</h4>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Технический английский язык</li>
                <li>Основы программирования</li>
                <li>Навыки работы с AutoCAD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;