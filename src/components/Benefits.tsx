import { CheckCircle, Heart, Scale, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PixPayment from "./PixPayment";

export default function Benefits() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const benefits = [
    {
      icon: Scale,
      title: "Resultados Visíveis",
      description: "Veja a balança e as roupas mudarem, com foco na eliminação da gordura que mais incomoda."
    },
    {
      icon: Heart,
      title: "Mente e Corpo Renovados",
      description: "Sinta mais energia e disposição, com a melhora da sua saúde intestinal e bem-estar geral."
    },
    {
      icon: CheckCircle,
      title: "Adeus Efeito Sanfona",
      description: "Construa hábitos que duram para sempre, saindo do ciclo de dietas restritivas e da frustração de perder e ganhar peso."
    },
    {
      icon: Smile,
      title: "Uma Nova Relação com a Comida",
      description: "Aprenda a comer de forma consciente, sem medo e sem sofrimento, transformando a alimentação em algo leve e prazeroso."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-nutrition-light/30"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary mb-4 sm:mb-6 gradient-text leading-tight">
            Os Benefícios que Vão <span className="text-nutrition-action">Transformar Sua Vida</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-nutrition-text max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Você está a apenas 26 dias de distância de uma mudança real. Com o nosso desafio, 
            você não vai apenas emagrecer; você vai conquistar um novo estilo de vida com 
            <span className="font-semibold text-nutrition-primary"> resultados que você pode ver e sentir</span>.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-4 sm:p-6 lg:p-8 border-nutrition-light glassmorphism hover-lift pulse-glow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-nutrition-primary/10 p-2 sm:p-3 rounded-full floating-animation flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-nutrition-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-nutrition-primary mb-2 sm:mb-3 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-nutrition-text leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Button after Benefits */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => setIsPixModalOpen(true)}
            className="bg-nutrition-action hover:bg-nutrition-primary text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl pulse-glow hover-lift animate-pulse"
          >
            Quero Esses Resultados - Garantir Vaga
          </Button>
          <p className="text-xs sm:text-sm text-nutrition-text/70 mt-3">
            Últimas 48 horas com desconto especial
          </p>
          
          <PixPayment 
            isOpen={isPixModalOpen} 
            onClose={() => setIsPixModalOpen(false)} 
          />
        </div>
      </div>
    </section>
  );
}