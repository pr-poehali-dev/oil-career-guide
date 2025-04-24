import { Card } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, Award, Target } from "lucide-react";

const Career = () => {
  const careerPaths = [
    {
      title: "Технический путь",
      description: "Развитие от младших технических позиций до главного инженера или технического директора",
      stages: [
        "Младший специалист → Инженер → Старший инженер",
        "Ведущий инженер → Главный специалист",
        "Технический руководитель → Главный инженер"
      ],
      timeline: "8-15 лет",
      icon: <TrendingUp className="h-6 w-6 text-secondary" />
    },
    {
      title: "Управленческий путь",
      description: "Продвижение по административной лестнице до руководящих позиций",
      stages: [
        "Специалист → Руководитель группы → Начальник отдела",
        "Начальник управления → Заместитель директора",
        "Директор по направлению → Генеральный директор"
      ],
      timeline: "10-15 лет",
      icon: <Target className="h-6 w-6 text-secondary" />
    },
    {
      title: "Научно-исследовательский путь",
      description: "Развитие в области исследований и разработок новых технологий",
      stages: [
        "Младший научный сотрудник → Научный сотрудник",
        "Старший научный сотрудник → Ведущий научный сотрудник",
        "Руководитель лаборатории → Научный директор"
      ],
      timeline: "7-12 лет",
      icon: <Award className="h-6 w-6 text-secondary" />
    }
  ];

  const specialProjects = [
    {
      title: "Проекты цифровой трансформации",
      description: "Участие в проектах внедрения цифровых технологий, Индустрии 4.0 и автоматизации процессов",
      benefit: "Приобретение передовых цифровых навыков, работа с инновационными технологиями"
    },
    {
      title: "Международные проекты",
      description: "Работа в международных командах над глобальными проектами в разных странах",
      benefit: "Международный опыт, языковая практика, знакомство с мировыми стандартами"
    },
    {
      title: "Экологические инициативы",
      description: "Проекты по снижению углеродного следа и разработке экологически чистых технологий",
      benefit: "Опыт в востребованном направлении зеленой энергетики, работа на стыке отраслей"
    }
  ];

  return (
    <section id="career" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Карьерные возможности в нефтяной промышленности
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          В нефтяной отрасли существует несколько основных карьерных путей, каждый из которых предлагает 
          широкие возможности для профессионального роста. Данные актуальны на 2025 год.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {careerPaths.map((path, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-4">
                {path.icon}
                <h3 className="text-xl font-semibold ml-3">{path.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{path.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Типичные этапы:</h4>
                <ul className="space-y-2">
                  {path.stages.map((stage, idx) => (
                    <li key={idx} className="text-sm">
                      {stage}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Примерные сроки:</span>
                  <span className="text-primary font-semibold">{path.timeline}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold text-center mb-8">
          Специальные карьерные возможности
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {specialProjects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-secondary">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                {project.title}
                <ArrowUpRight className="h-4 w-4 ml-1 text-secondary" />
              </h4>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="pt-3 border-t">
                <h5 className="text-sm font-medium mb-1">Преимущества для карьеры:</h5>
                <p className="text-sm text-muted-foreground">{project.benefit}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;