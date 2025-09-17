import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import QRCode from 'qrcode';

interface PixPaymentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PixPayment({ isOpen, onClose }: PixPaymentProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isPaid, setIsPaid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const pixCode = "00020126360014BR.GOV.BCB.PIX0114+5516994037590520400005303986540547.905802BR5919BARBARA MARIA SILVA6014RIBEIRAO PRETO622605223iba7l37whC8J4OKjZF9hB6304E4D7";
  const whatsappLink = "https://chat.whatsapp.com/Cl5cpi6Ko03ISE9H9t5bdx?mode=ems_wa_t";

  useEffect(() => {
    if (isOpen) {
      generateQRCode();
    }
  }, [isOpen]);

  const generateQRCode = async () => {
    try {
      // Ajustar tamanho do QR Code baseado no viewport
      const isMobile = window.innerWidth < 768;
      const qrSize = isMobile ? 250 : 300;
      
      const qrCodeDataUrl = await QRCode.toDataURL(pixCode, {
        width: qrSize,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(qrCodeDataUrl);
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error);
      toast({
        title: "Erro",
        description: "Não foi possível gerar o QR Code. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Copiado!",
      description: "Código PIX copiado para a área de transferência."
    });
  };

  const confirmPayment = () => {
    setIsLoading(true);
    // Simula processamento do pagamento
    setTimeout(() => {
      setIsPaid(true);
      setIsLoading(false);
      toast({
        title: "Pagamento Confirmado!",
        description: "Seja bem-vinda ao Desafio de 26 Dias!"
      });
    }, 2000);
  };

  const goToWhatsApp = () => {
    window.open(whatsappLink, '_blank');
    onClose();
    setIsPaid(false); // Reset para próxima vez
  };

  const handleClose = () => {
    onClose();
    setIsPaid(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-md mx-auto bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center text-nutrition-primary text-lg sm:text-xl font-bold leading-tight">
            {isPaid ? "Pagamento Confirmado!" : "Finalizar Pagamento"}
          </DialogTitle>
        </DialogHeader>

        {!isPaid ? (
          <div className="space-y-4 sm:space-y-6 p-1 sm:p-2">
            <Card className="p-3 sm:p-4 text-center bg-nutrition-light/20">
              <div className="text-xl sm:text-2xl font-bold text-nutrition-primary mb-1 sm:mb-2">
                R$ 47,90
              </div>
              <p className="text-xs sm:text-sm text-nutrition-text leading-tight">
                Desafio de 26 Dias (08/10 até 02/11)
              </p>
            </Card>

            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="font-semibold text-nutrition-primary text-sm sm:text-base">
                Escaneie o QR Code PIX
              </h3>
              
              {qrCodeUrl && (
                <div className="flex justify-center px-2">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code PIX" 
                    className="border-2 border-nutrition-primary/20 rounded-lg max-w-full h-auto"
                    style={{ maxWidth: '250px' }}
                  />
                </div>
              )}

              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-nutrition-text">
                  Ou copie o código PIX:
                </p>
                
                <div className="bg-gray-100 p-2 sm:p-3 rounded-lg text-xs break-all relative mx-2 sm:mx-0">
                  <span className="text-gray-700 pr-8">{pixCode}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyPixCode}
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 h-5 w-5 sm:h-6 sm:w-6 p-0 touch-manipulation"
                  >
                    <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={confirmPayment}
                disabled={isLoading}
                className="w-full bg-nutrition-action hover:bg-nutrition-primary text-white font-semibold py-3 sm:py-4 rounded-full text-sm sm:text-base touch-manipulation min-h-[48px]"
              >
                {isLoading ? "Confirmando..." : "Já Paguei"}
              </Button>

              <p className="text-xs sm:text-sm text-nutrition-text/70 leading-tight px-2 sm:px-0">
                Clique em "Já Paguei" após realizar o pagamento
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6 p-1 sm:p-2 text-center">
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
            </div>
            
            <div className="space-y-2 px-2 sm:px-0">
              <h3 className="text-lg sm:text-xl font-bold text-green-600">
                Pagamento Confirmado!
              </h3>
              <p className="text-nutrition-text text-sm sm:text-base leading-relaxed">
                Bem-vinda ao <strong>Desafio de 26 Dias</strong>! 
                Agora entre no nosso grupo VIP do WhatsApp para começar sua transformação.
              </p>
            </div>

            <Button
              onClick={goToWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation min-h-[48px]"
            >
              <ExternalLink className="w-4 h-4" />
              Entrar no Grupo WhatsApp
            </Button>

            <p className="text-xs sm:text-sm text-nutrition-text/70 px-2 sm:px-0">
              Você será redirecionada para o WhatsApp
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}