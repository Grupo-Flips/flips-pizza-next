import { useState } from "react";
import { Menu, X, ShoppingBag, MessageCircle, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Links do menu principal
const menuLinks = [
  { label: "Início", href: "/" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Promoções", href: "/promocoes" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Fidelidade", href: "/fidelidade" },
  { label: "Franquia", href: "/franquia" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow z-30">
        <div className="container-flip flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Flip's Pizza" width={50} height={50} />
          </Link>
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {menuLinks.map((item) => (
              <Link key={item.href} href={item.href} className="font-semibold hover:text-primary transition">
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Ações Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.ifood.com.br/delivery/nova-iguacu-rj/flips-pizza---nova-iguacu-vila-avelina/78047371-417d-4f22-9ef1-41614b36c72a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-2 rounded-full flex items-center gap-2"
            >
              <ShoppingBag size={20} /> Peça Agora
            </a>
            <a
              href="https://wa.me/5521983806222"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary rounded-full p-2 flex items-center hover:bg-primary hover:text-white transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="https://www.instagram.com/flipspizza"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary rounded-full p-2 flex items-center hover:bg-primary hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
          {/* Menu Mobile Button */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={32} />
          </button>
        </div>

        {/* Overlay Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 flex md:hidden">
            <div className="bg-white w-full max-w-md mx-auto min-h-full flex flex-col relative">
              {/* Fechar */}
              <button
                className="absolute right-5 top-5 p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={36} />
              </button>
              {/* Logo */}
              <div className="pt-8 pb-4 flex justify-center">
                <Image src="/logo.png" alt="Flip's Pizza" width={56} height={56} />
              </div>
              {/* Menu links */}
              <nav className="flex flex-col gap-5 items-center mb-8">
                {menuLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-2xl font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* Botão Peça Agora grande */}
              <div className="px-6">
                <a
                  href="https://www.ifood.com.br/delivery/nova-iguacu-rj/flips-pizza---nova-iguacu-vila-avelina/78047371-417d-4f22-9ef1-41614b36c72a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full text-xl mb-5"
                >
                  <ShoppingBag size={28} /> Peça Agora
                </a>
              </div>
              {/* Ícones Sociais só ícone */}
              <div className="flex gap-8 justify-center mt-2 pb-8">
                <a
                  href="https://wa.me/5521983806222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary rounded-full w-14 h-14 flex items-center justify-center hover:bg-primary hover:text-white transition"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={30} />
                </a>
                <a
                  href="https://www.instagram.com/flipspizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary rounded-full w-14 h-14 flex items-center justify-center hover:bg-primary hover:text-white transition"
                  aria-label="Instagram"
                >
                  <Instagram size={30} />
                </a>
              </div>
            </div>
            {/* Clicar fora do menu para fechar */}
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </header>
    </>
  );
}
