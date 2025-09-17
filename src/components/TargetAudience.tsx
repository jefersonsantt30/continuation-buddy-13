export default function TargetAudience() {
  const targetGroups = [
    {
      text: "Para quem está cansada(o) de dietas restritivas",
      subtext: "e quer, de verdade, uma transformação de hábitos que dure para sempre."
    },
    {
      text: "Para quem busca um guia e um método prático",
      subtext: "para começar a reeducação alimentar sem complicação e sem sofrimento."
    },
    {
      text: "Para quem deseja melhorar a saúde por completo",
      subtext: "com mais energia, disposição e resultados que se refletem até nos exames."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-nutrition-primary to-nutrition-action py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 sm:mb-12 leading-tight">
          Para quem é o <span className="underline decoration-white/50 decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">Desafio?</span>
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {targetGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-nutrition-primary/80 backdrop-blur p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-white/20 text-white max-w-3xl mx-auto hover-lift"
            >
              <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 leading-tight">
                <span className="underline decoration-white decoration-1 sm:decoration-2">{group.text}</span>
              </div>
              <div className="text-sm sm:text-base text-white/90 leading-relaxed">
                {group.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}