import barbara1 from "@/assets/barbara-consultation-real.png";

export default function WhoAmI() {
  return (
    <section className="bg-nutrition-background py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-nutrition-light/30 to-nutrition-background"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary gradient-text leading-tight">
              Quem Sou Eu
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-nutrition-text leading-relaxed">
              Sou a <span className="font-semibold text-nutrition-primary">Bárbara Maria</span>, nutricionista (CRN: 88626/P). 
              Minha missão é te guiar em uma jornada de reeducação alimentar sem sofrimento, 
              para que você construa uma relação mais leve com a comida e conquiste 
              <span className="font-semibold text-nutrition-primary"> resultados que duram para sempre</span>.
            </p>
          </div>

          {/* Professional Image */}
          <div className="relative floating-animation order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover-lift max-w-sm sm:max-w-md lg:max-w-full mx-auto">
              <img 
                src={barbara1} 
                alt="Bárbara Maria - Nutricionista especialista" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-all duration-300 bg-gradient-to-br from-nutrition-light to-white"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}