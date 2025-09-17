import MarqueeBanner from "@/components/MarqueeBanner";

export default function TopNavigation() {
  const navItems = [
    "MÉTODO APROVADO",
    "RESULTADOS QUE DURAM", 
    "RELAÇÃO MAIS LEVE COM A COMIDA",
    "MAIS ENERGIA E DISPOSIÇÃO",
    "PLANOS COM RECEITAS FÁCEIS",
    "RECEITAS FÁCEIS"
  ];

  return (
    <div className="bg-nutrition-primary text-white py-2 sm:py-3 overflow-hidden m-0 p-0 w-full" style={{ marginTop: '0 !important', paddingTop: '8px' }}>
      <div className="animate-marquee whitespace-nowrap">
        <div className="inline-flex items-center space-x-4 sm:space-x-8 text-xs sm:text-sm font-medium">
          {navItems.map((item, index) => (
            <span key={index} className="mx-2 sm:mx-4">
              {item}
            </span>
          ))}
          {/* Duplicate for seamless scrolling */}
          {navItems.map((item, index) => (
            <span key={`duplicate-${index}`} className="mx-2 sm:mx-4">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}