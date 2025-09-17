import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import barbara2 from "@/assets/barbara-testimonial-1.png";
import barbara3 from "@/assets/barbara-testimonial-2.png";
import barbara4 from "@/assets/barbara-testimonial-3.png";
import barbara5 from "@/assets/barbara-testimonial-4.png";

export default function Testimonials() {
  const images = [
    { src: barbara2, alt: "Bárbara Maria - Nutricionista profissional" },
    { src: barbara3, alt: "Bárbara Maria mostrando seu cartão profissional" },
    { src: barbara4, alt: "Bárbara Maria em consulta profissional" },
    { src: barbara5, alt: "Bárbara Maria em ambiente de trabalho" }
  ];

  return (
    <section className="bg-gradient-to-br from-nutrition-light to-white py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nutrition-primary/5 to-nutrition-action/5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary mb-4 sm:mb-6 gradient-text leading-tight">
            Acompanhamento <span className="text-nutrition-action">Profissional Completo</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-nutrition-text max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Eu te acompanho pessoalmente durante todo o desafio, garantindo que você tenha o 
            <span className="font-semibold text-nutrition-action"> suporte necessário para alcançar seus objetivos</span>.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover-lift">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-all duration-500 bg-gradient-to-br from-nutrition-light to-white"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-nutrition-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Rating Card */}
        <Card className="p-4 sm:p-6 lg:p-8 text-center glassmorphism hover-lift">
          <div className="flex justify-center gap-1 mb-3 sm:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-nutrition-action text-nutrition-action" />
            ))}
          </div>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-nutrition-primary mb-2 sm:mb-3">
            Clientes Satisfeitos
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-nutrition-text px-1 sm:px-2 leading-relaxed">
            "A Bárbara não apenas me ajudou a emagrecer, mas transformou completamente minha relação com a comida. 
            O acompanhamento é incrível e os resultados são reais!"
          </p>
          <p className="text-xs sm:text-sm lg:text-base text-nutrition-text/70 mt-3 sm:mt-4 font-medium">
            - Maria Santos, cliente
          </p>
        </Card>
      </div>
    </section>
  );
}