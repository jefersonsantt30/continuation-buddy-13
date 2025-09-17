interface MarqueeBannerProps {
  messages: string[];
  bgColor?: string;
  textColor?: string;
  speed?: string;
}

export default function MarqueeBanner({ 
  messages, 
  bgColor = "bg-nutrition-primary", 
  textColor = "text-white",
  speed = "30s"
}: MarqueeBannerProps) {
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className={`${bgColor} py-2 sm:py-3 overflow-hidden relative w-full`} style={{ minWidth: '100vw' }}>
      <div 
        className={`flex whitespace-nowrap ${textColor} font-semibold text-xs sm:text-sm md:text-base`}
        style={{ 
          animationDuration: speed,
          animation: `marquee ${speed} linear infinite`,
          width: 'max-content',
          minWidth: '200%'
        }}
      >
        {duplicatedMessages.map((message, index) => (
          <span key={index} className="px-3 sm:px-6 md:px-8 flex-shrink-0 inline-block">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}