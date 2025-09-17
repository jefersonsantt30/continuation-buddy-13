import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PixPayment from "./PixPayment";

export default function FAQ() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const faqs = [
    {
      question: "O plano é personalizado para mim ou é igual para todo mundo?",
      answer: "O plano é guiado, mas a jornada é sua! Você receberá um guia semanal com opções e estratégias para a reeducação alimentar. O objetivo é que você aprenda a se alimentar bem por conta própria, e não dependa de um cardápio rígido."
    },
    {
      question: "Vou ter que passar fome ou seguir uma dieta muito restritiva?",
      answer: "Não! Nosso foco é em nutrição inteligente, não em privação. O desafio foi criado para que você coma de forma consciente e nutritiva, usando alimentos de verdade para se sentir saciada e com energia."
    },
    {
      question: "O que acontece depois dos 26 dias? Os resultados duram?",
      answer: "Os 26 dias são a base para uma mudança definitiva. A maior transformação não será só no seu corpo, mas nos novos hábitos que você vai construir, te dando as ferramentas para manter os resultados para sempre."
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-nutrition-primary mb-4 sm:mb-6 leading-tight">
            Dúvidas <span className="text-nutrition-action">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-nutrition-muted/50 border-nutrition-light rounded-lg px-3 sm:px-4 lg:px-6"
            >
              <AccordionTrigger className="text-left text-nutrition-primary font-semibold hover:no-underline py-4 sm:py-6 text-sm sm:text-base lg:text-lg leading-tight">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-nutrition-text pb-4 sm:pb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Final CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => setIsPixModalOpen(true)}
            className="bg-nutrition-action hover:bg-nutrition-primary text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl pulse-glow hover-lift mb-4"
          >
            Todas as Dúvidas Esclarecidas - Quero Começar!
          </Button>
          <p className="text-xs sm:text-sm text-nutrition-text/70">
            Compra 100% segura • Garantia de 7 dias • Acesso imediato
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