import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Lock } from "lucide-react";
import professionalImage from "@/assets/barbara-hero-real.png";
import { useState } from "react";
import PixPayment from "./PixPayment";

export default function Hero() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  return (
    <section className="bg-gradient-to-br from-nutrition-light to-nutrition-background py-8 sm:py-12 lg:py-16 px-2 sm:px-3 lg:px-4 relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-nutrition-primary/5 to-nutrition-action/5"></div>
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary leading-tight gradient-text">
                Desafio de 26 Dias – Reeducação Alimentar e Emagrecimento
                <span className="text-sm sm:text-lg lg:text-xl text-nutrition-action font-medium block mt-1 sm:mt-2">08/10 até 02/11</span>
              </h1>
              
              <div className="text-sm sm:text-base lg:text-lg text-nutrition-text leading-relaxed">
                De <span className="font-semibold text-nutrition-primary">08/10 a 28/10</span>, você terá a{" "}
                <span className="font-semibold text-nutrition-action">oportunidade de transformar sua alimentação</span>, 
                seus hábitos e seu corpo com um programa prático,{" "}
                <span className="font-semibold">acessível e totalmente guiado!</span>
              </div>

              <Button 
                size="lg" 
                onClick={() => setIsPixModalOpen(true)}
                className="w-full bg-nutrition-action hover:bg-nutrition-primary text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl pulse-glow hover-lift min-h-[48px] touch-manipulation"
              >
                Entrar para o Desafio
              </Button>
              
              <PixPayment 
                isOpen={isPixModalOpen} 
                onClose={() => setIsPixModalOpen(false)} 
              />
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col xs:flex-row xs:flex-wrap gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-nutrition-text/70">
              <div className="flex items-center gap-2 justify-center xs:justify-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 justify-center xs:justify-start">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span>Satisfação Garantida</span>
              </div>
              <div className="flex items-center gap-2 justify-center xs:justify-start">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-nutrition-action flex-shrink-0" />
                <span>Privacidade Protegida</span>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative floating-animation order-1 lg:order-2 w-full">
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover-lift max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              <img 
                src={professionalImage} 
                alt="Bárbara Maria - Nutricionista especialista em emagrecimento" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-nutrition-light to-white"
                loading="eager"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <Card className="mt-6 sm:mt-8 lg:mt-12 p-2 sm:p-4 lg:p-6 glassmorphism hover-lift mx-2 sm:mx-0">
          <p className="text-center text-xs sm:text-sm lg:text-base text-nutrition-text/70 font-medium leading-tight">
            Desenvolvido e validado por nutricionistas especialistas em emagrecimento
          </p>
        </Card>
      </div>
    </section>
  );
}