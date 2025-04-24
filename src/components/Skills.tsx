import { Card } from "@/components/ui/card";
import {
  Brain,
  Tool,
  Zap,
  Languages,
  Compass,
  Network,
  Clock,
  MessagesSquare,
  Laptop,
  Workflow
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      name: "Инженерные знания",
      description: "Понимание принципов бурения, добычи, транспортировки нефти и газа",
      icon: <Tool className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    },
    {
      name: "Цифровые навыки",
      description: "Работа со специализированным ПО, системами моделирования и управления производством",
      icon: <Laptop className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    },
    {
      name: "Знание нормативов",
      description: "Понимание стандартов, регламентов и требований промышленной безопасности",
      icon: <Workflow className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    }
  ];

  const softSkills = [
    {
      name: "Работа в команде",
      description: "Умение эффективно взаимодействовать в коллективе, особенно в условиях вахтового метода",
      icon: <Network className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    },
    {
      name: "Стрессоустойчивость",
      description: "Способность сохранять эффективность в сложных условиях и при высокой ответственности",
      icon: <Zap className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    },
    {
      name: "Коммуникабельность",
      description: "Умение ясно выражать мысли, передавать информацию и работать в многопрофильных командах",
      icon: <MessagesSquare className="h-5 w-5 text-secondary" />,
      importance: "Средняя"
    }
  ];
  
  const personalQualities = [
    {
      name: "Ответственность",
      description: "Понимание последствий своих действий, особенно в условиях повышенной опасности",
      icon: <Compass className="h-5 w-5 text-secondary" />,
      importance: "Критическая"
    },
    {
      name: "Адаптивность",
      description: "Способность быстро приспосабливаться к новым технологиям и условиям работы",
      icon: <Brain className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    },
    {
      name: "Пунктуальность",
      description: "Точное соблюдение графиков и расписаний, критично важное для безопасности производства",
      icon: <Clock className="h-5 w-5 text-secondary" />,
      importance: "Высокая"
    }
  ];

  const additionalSkills = [
    {
      name: "Иностранные языки",
      description: "Английский и другие языки для работы с международными партнерами и документацией",
      icon: <Languages className="h-5 w-5 text-secondary" />,
      importance: "Средняя/Высокая"
    },
    {
      name: "Анализ данных",
      description: "Навыки работы с большими массивами данных для оптимизации процессов",
      icon: <Laptop className="h-5 w-5 text-secondary" />,
      importance: "Растущая"
    },
    {
      name: "Экологическое мышление",
      description: "Понимание принципов устойчивого развития и экологической безопасности",
      icon: <Compass className="h-5 w-5 text-secondary" />,
      importance: "Растущая"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Навыки, знания и качества необходимые для работы
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Успешная карьера в нефтяной промышленности требует сочетания различных навыков и качеств. 
          Рассмотрим основные из них, востребованные в 2025 году.
        </p>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Технические навыки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-medium ml-3">{skill.name}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="pt-2 border-t mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Важность:</span>
                      <span className={`text-sm font-medium ${
                        skill.importance === 'Высокая' ? 'text-red-600' : 
                        skill.importance === 'Критическая' ? 'text-red-700' : 'text-amber-600'
                      }`}>
                        {skill.importance}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Гибкие навыки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-medium ml-3">{skill.name}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="pt-2 border-t mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Важность:</span>
                      <span className={`text-sm font-medium ${
                        skill.importance === 'Высокая' ? 'text-red-600' : 'text-amber-600'
                      }`}>
                        {skill.importance}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Личные качества</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {personalQualities.map((quality, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {quality.icon}
                    <h4 className="text-lg font-medium ml-3">{quality.name}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{quality.description}</p>
                  <div className="pt-2 border-t mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Важность:</span>
                      <span className={`text-sm font-medium ${
                        quality.importance === 'Высокая' ? 'text-red-600' : 
                        quality.importance === 'Критическая' ? 'text-red-700' : 'text-amber-600'
                      }`}>
                        {quality.importance}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Дополнительные навыки</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h4 className="text-lg font-medium ml-3">{skill.name}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="pt-2 border-t mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Важность:</span>
                      <span className={`text-sm font-medium ${
                        skill.importance === 'Высокая' ? 'text-red-600' : 
                        skill.importance === 'Растущая' ? 'text-green-600' : 'text-amber-600'
                      }`}>
                        {skill.importance}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;