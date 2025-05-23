import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar o popup após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative overflow-hidden">
        <button 
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="bg-primary text-white py-3 px-6">
          <h3 className="text-xl font-serif font-bold">Promoção Especial!</h3>
        </div>
        
        <div className="p-6">
          <p className="text-lg mb-4">
            <span className="font-bold">Terça da Tradição!</span> Todas as pizzas clássicas com 20% de desconto.
          </p>
          <p className="mb-6 text-sm text-gray-600">
            Válido apenas para pedidos online. Não cumulativo com outras promoções.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.ifood.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
