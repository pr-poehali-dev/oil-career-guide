import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const ProsCons = () => {
  const advantages = [
    {
      title: "Высокая заработная плата",
      description: "Нефтяная отрасль предлагает одни из самых высоких зарплат среди промышленных секторов"
    },
    {
      title: "Социальный пакет",
      description: "Расширенное медицинское страхование, оплачиваемый отпуск, пенсионные программы"
    },
    {
      title: "Карьерный рост",
      description: "Чёткая структура продвижения по карьерной лестнице с возможностью быстрого роста"
    },
    {
      title: "Стабильность",
      description: "Нефтяная промышленность остаётся стабильной даже в периоды экономических спадов"
    },
    {
      title: "Международные возможности",
      description: "Шанс работать в разных странах и получить международный опыт"
    }
  ];

  const disadvantages = [
    {
      title: "Тяжёлые условия труда",
      description: "Работа часто проходит в суровых климатических условиях и отдалённых регионах"
    },
    {
      title: "Вахтовый метод",
      description: "Длительное отсутствие дома, влияющее на личную жизнь и семейные отношения"
    },
    {
      title: "Риски для здоровья",
      description: "Повышенная опасность травматизма и профессиональных заболеваний"
    },
    {
      title: "Экологические проблемы",
      description: "Негативное влияние нефтедобычи на окружающую среду и связанные с этим этические вопросы"
    },
    {
      title: "Нестабильность нефтяного рынка",
      description: "Зависимость от мировых цен на нефть может влиять на стабильность занятости"
    }
  ];

  return (
    <section id="pros-cons" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Преимущества и недостатки трудоустройства
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={24} />
              Преимущества
            </h3>
            <div className="space-y-4">
              {advantages.map((item, index) => (
                <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <XCircle className="text-red-500 mr-2" size={24} />
              Недостатки
            </h3>
            <div className="space-y-4">
              {disadvantages.map((item, index) => (
                <Card key={index} className="p-5 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsCons;