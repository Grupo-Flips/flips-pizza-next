import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon text-white pt-12 pb-6">
      <div className="container-flip">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.png"
              alt="Flip's Pizza"
              width={96}
              height={64}
              className="h-16 w-auto mb-4"
              priority
            />
            <p className="text-lg font-serif italic">
              &quot;Tradição e Frescor em Cada Mordida&quot;
            </p>
          </div>

          {/* Menu Rápido */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Menu Rápido</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/cardapio" className="hover:text-secondary transition-colors">Cardápio</Link>
              <Link href="/promocoes" className="hover:text-secondary transition-colors">Promoções</Link>
              <Link href="/contato" className="hover:text-secondary transition-colors">Contato</Link>
              <Link href="/privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</Link>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Informações</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Terça a Sábado 18h–00h, Domingo 18h–23h</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Dark Kitchen – Nova Iguaçu/RJ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(21) 98380-6222</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>contato@flipspizza.com.br</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/flipspizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@flipspizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary transition-colors"
                  aria-label="TikTok"
                >
                  <span className="sr-only">TikTok</span>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>
            &copy; 2025 Flip&apos;s Pizza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
