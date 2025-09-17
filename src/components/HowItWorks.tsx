import { Salad, Droplets, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      week: 1,
      icon: Salad,
      emoji: "🥑",
      title: "Semana 1: O Início sem Complicação",
      description: "Você receberá seu primeiro plano alimentar com opções práticas, uma lista de compras otimizada e um ebook de receitas para você utilizar além do dia a dia. O foco aqui é dar o pontapé inicial e se familiarizar com a rotina de forma leve e sem estresse."
    },
    {
      week: 2,
      icon: Droplets,
      emoji: "💧",
      title: "Semana 2: Acelere os Resultados",
      description: "Já com a base sólida da primeira semana, você vai começar a introduzir desafios simples e estratégicos (como uma meta de hidratação diária). É o momento de potencializar a queima de gordura e sentir o seu corpo com mais energia."
    },
    {
      week: 3,
      icon: Sparkles,
      emoji: "✨",
      title: "Semana 3: A Mudança Definitiva",
      description: "Na última semana, você vai consolidar todos os novos hábitos. O objetivo é que, ao final do desafio, você tenha todo o conhecimento e as ferramentas necessárias para seguir sua jornada de forma autônoma, com resultados que duram para sempre."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-nutrition-primary to-nutrition-action py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Sua Jornada de 26 Dias para a <span className="underline decoration-white/50 decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">Transformação</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-4xl mx-auto px-2 leading-relaxed">
            É mais fácil do que você imagina. Em apenas 26 dias, você vai construir a base para uma vida mais saudável,
            com um passo a passo prático e sem segredos.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur p-4 sm:p-6 lg:p-8 border-white/20 relative overflow-hidden hover-lift">
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-b from-nutrition-primary to-nutrition-action"></div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="bg-nutrition-primary/10 p-3 sm:p-4 rounded-full min-w-fit flex-shrink-0 mx-auto sm:mx-0">
                  <div className="text-xl sm:text-2xl">{step.emoji}</div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="bg-nutrition-primary text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mx-auto sm:mx-0 w-fit">
                      Passo {step.week}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-nutrition-primary mb-3 sm:mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-nutrition-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA after How It Works */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-nutrition-primary px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover-lift border-2 border-white"
          >
            Começar Minha Transformação Agora
          </Button>
          <p className="text-xs sm:text-sm text-white/80 mt-3">
            Acesso imediato + Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}