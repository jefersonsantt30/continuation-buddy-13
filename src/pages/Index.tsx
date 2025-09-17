import Hero from "@/components/Hero";
import WhoAmI from "@/components/WhoAmI";
import TargetAudience from "@/components/TargetAudience";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import PriceOffer from "@/components/PriceOffer";
import FAQ from "@/components/FAQ";
import TopNavigation from "@/components/TopNavigation";
import MarqueeBanner from "@/components/MarqueeBanner";

const Index = () => {
  const motivationalMessages = [
    "RECEITAS FÁCEIS",
    "MÉTODO APROVADO", 
    "RESULTADOS QUE DURAM",
    "RELAÇÃO MAIS LEVE COM A COMIDA",
    "MAIS ENERGIA E DISPOSIÇÃO",
    "PLANOS COM RECEITAS FÁCEIS"
  ];

  const benefitsMessages = [
    "26 DIAS DE TRANSFORMAÇÃO",
    "ACOMPANHAMENTO PERSONALIZADO",
    "RECEITAS PRÁTICAS E SABOROSAS", 
    "GRUPO VIP DE APOIO",
    "GARANTIA DE 7 DIAS"
  ];

  const successMessages = [
    "MAIS DE 1.000 PESSOAS TRANSFORMADAS",
    "RESULTADOS COMPROVADOS",
    "MÉTODO TESTADO E APROVADO",
    "REEDUCAÇÃO ALIMENTAR REAL",
    "SEM DIETAS RESTRITIVAS"
  ];

  return (
    <div className="min-h-screen m-0 p-0">
      <TopNavigation />
      <Hero />
      
      <MarqueeBanner 
        messages={motivationalMessages}
        bgColor="bg-nutrition-action" 
        textColor="text-white"
      />
      
      <WhoAmI />
      <TargetAudience />
      
      <MarqueeBanner 
        messages={benefitsMessages}
        bgColor="bg-nutrition-primary" 
        textColor="text-white"
        speed="25s"
      />
      
      <Benefits />
      <Testimonials />
      
      <MarqueeBanner 
        messages={successMessages}
        bgColor="bg-nutrition-light" 
        textColor="text-nutrition-primary"
        speed="35s"
      />
      
      <HowItWorks />
      <PriceOffer />
      
      <MarqueeBanner 
        messages={["🔥 ÚLTIMOS DIAS COM DESCONTO!", "⏰ VAGAS LIMITADAS", "✨ GARANTIA DE 7 DIAS", "🎯 TRANSFORMAÇÃO GARANTIDA"]}
        bgColor="bg-nutrition-action" 
        textColor="text-white"
        speed="20s"
      />
      
      <FAQ />
      
      <MarqueeBanner 
        messages={["🚀 COMECE SUA TRANSFORMAÇÃO HOJE!", "💪 JUNTE-SE A MAIS DE 1.000 PESSOAS", "🌟 SEU NOVO EU TE ESPERA"]}
        bgColor="bg-gradient-to-r from-nutrition-primary to-nutrition-action" 
        textColor="text-white"
        speed="25s"
      />
    </div>
  );
};

export default Index;
