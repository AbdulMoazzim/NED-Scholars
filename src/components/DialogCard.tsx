"use client";

import { useEffect, useRef } from "react";

const DialogCard = ({ text, color, Icon, index, iconColor }: { text: string, color: string, Icon: React.ElementType, index: number, iconColor: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r ${color} opacity-0 transform translate-y-3 hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="flex items-start space-x-3">
        <Icon className={`w-5 h-5 ${iconColor} mt-1 flex-shrink-0`} />
        <div className="text-gray-800 font-medium">{text}</div>
      </div>
    </div>
  );
};

export default DialogCard;