import { useState } from 'react';
import { X } from 'lucide-react';

const FloatingBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBar = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-amber-400 text-maroon py-2 px-4 z-40 text-center">
      <div className="container-flip flex items-center justify-between">
        <div className="flex-1"></div>
        <p className="font-medium">Pedidos acima de R$80 ganham sobremesa!</p>
        <button 
          onClick={closeBar}
          className="text-maroon hover:text-maroon/70"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default FloatingBar;
