
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Library, Globe, Briefcase } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Образование в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Получение качественного образования - первый шаг к успешной карьере в нефтяной отрасли.
          Выберите подходящий для вас путь обучения.
        </p>

        <Tabs defaultValue="higher" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="higher">Высшее образование</TabsTrigger>
            <TabsTrigger value="secondary">Среднее специальное</TabsTrigger>
            <TabsTrigger value="additional">Дополнительное обучение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="higher" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 text-primary" />
                  Высшее образование
                </CardTitle>
                <CardDescription>
                  Профильные университеты и институты, предлагающие программы бакалавриата и магистратуры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Ведущие вузы России</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Российский государственный университет нефти и газа им. И.М. Губкина</li>
                      <li>Санкт-Петербургский горный университет</li>
                      <li>Уфимский государственный нефтяной технический университет</li>
                      <li>Тюменский индустриальный университет</li>
                      <li>Томский политехнический университет</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Популярные направления</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Нефтегазовое дело</li>
                      <li>Химическая технология</li>
                      <li>Техносферная безопасность</li>
                      <li>Геология нефти и газа</li>
                      <li>Разработка и эксплуатация нефтяных и газовых месторождений</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="secondary" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 text-primary" />
                  Среднее специальное образование
                </CardTitle>
                <CardDescription>
                  Колледжи и техникумы, готовящие специалистов среднего звена
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Преимущества среднего специального образования</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Более короткий срок обучения (2-4 года)</li>
                      <li>Ранний выход на рынок труда</li>
                      <li>Практикоориентированное обучение</li>
                      <li>Возможность продолжить обучение в вузе по ускоренной программе</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Популярные специальности в колледжах</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Бурение нефтяных и газовых скважин</li>
                      <li>Оператор нефтепереработки</li>
                      <li>Разработка и эксплуатация нефтяных и газовых месторождений</li>
                      <li>Монтаж и техническое обслуживание промышленного оборудования</li>
                      <li>Лаборант-эколог нефтегазовой отрасли</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="additional" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Library className="mr-2 text-primary" />
                  Дополнительное образование
                </CardTitle>
                <CardDescription>
                  Дополнительные возможности для повышения квалификации и развития в профессии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Корпоративное обучение</h4>
                    <p>Крупные нефтяные компании (Роснефть, Газпром, Лукойл) имеют собственные учебные центры, где проводят профессиональную подготовку и переподготовку сотрудников.</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Международные сертификации</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>IWCF (International Well Control Forum)</li>
                      <li>NEBOSH (The National Examination Board in Occupational Safety and Health)</li>
                      <li>SPE (Society of Petroleum Engineers) курсы</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-medium mb-2">Онлайн-курсы и платформы</h4>
                    <p>Специализированные курсы на платформах Coursera, EdX и других образовательных ресурсах по геологии, нефтегазовому инжинирингу и смежным дисциплинам.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
