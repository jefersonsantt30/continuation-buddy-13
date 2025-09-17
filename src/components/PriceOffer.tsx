import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

export default function PriceOffer() {
  return (
    <section className="bg-nutrition-background py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary mb-4 sm:mb-6 gradient-text leading-tight">
            Pronta para <span className="text-nutrition-action">Mudar</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-nutrition-text max-w-3xl mx-auto px-2 leading-relaxed">
            O Desafio de 26 Dias é o seu ponto de partida para uma vida mais saudável, 
            com <span className="font-semibold text-nutrition-primary">resultados reais e duradouros</span>. 
            E a melhor parte é que você pode começar essa transformação agora mesmo.
          </p>
        </div>

        <Card className="glassmorphism border-nutrition-primary/20 shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden hover-lift pulse-glow">
          <div className="absolute top-0 right-0 bg-nutrition-action text-white px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-bl-lg">
            Oferta Especial
          </div>
          
          <div className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-0">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action fill-current" />
                <span className="text-sm sm:text-base text-nutrition-text font-medium">Desafio de 26 Dias (08/10 até 02/11)</span>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action fill-current" />
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nutrition-primary">
                  R$ 47<span className="text-lg sm:text-xl lg:text-2xl">,00</span>
                </div>
                <p className="text-xs sm:text-sm text-nutrition-text/70">Investimento único</p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 max-w-md mx-auto">
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base text-nutrition-text">26 dias de acompanhamento guiado</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base text-nutrition-text">Planos alimentares práticos</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base text-nutrition-text">Lista de compras otimizada</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span className="text-xs sm:text-sm lg:text-base text-nutrition-text">Resultados que duram para sempre</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-nutrition-action hover:bg-nutrition-primary text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl pulse-glow hover-lift w-full min-h-[48px] touch-manipulation break-words"
            >
              <span className="text-center">Garantir Minha Vaga no Desafio</span>
            </Button>

            <p className="text-xs sm:text-sm text-nutrition-text/70">
              Acesso imediato após a confirmação do pagamento
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}