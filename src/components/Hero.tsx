import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-oil-dark to-primary overflow-hidden pt-16 pb-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNNiA1YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="text-5xl md:text-7xl font-bold text-white mb-4">
            Нефтяное дело
          </div>
          <div className="text-2xl md:text-3xl font-medium text-oil-light mb-8">
            Начало пути в нефтяной промышленности
          </div>
          <p className="text-xl text-white/80 max-w-2xl mb-10">
            Информативный гид для школьников и их родителей о карьере в одной из важнейших отраслей экономики
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary"
              onClick={() => document.getElementById('professions')?.scrollIntoView({behavior: 'smooth'})}
            >
              Узнать о профессиях
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('education')?.scrollIntoView({behavior: 'smooth'})}
            >
              Как получить образование
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;