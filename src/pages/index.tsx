import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // Instagram feed dinâmico
  const [photos, setPhotos] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/instagram")
      .then(res => res.json())
      .then(data => setPhotos(data || []));
  }, []);

  return (
    <>
      <Head>
        <title>Flip's Pizza — Tradição e Frescor em Cada Mordida</title>
        <meta name="description" content="Flip's Pizza — Pizzas artesanais de fermentação longa em Nova Iguaçu. Peça já pelo iFood!" />
      </Head>
      <main className="flex flex-col">
        {/* HERO */}
        <section className="relative min-h-[70vh] bg-amber-50 flex items-center justify-center overflow-hidden">
          <Image
            src="/hero.png"
            alt="Pizza Flip's artesanal"
            fill
            priority
            className="object-cover object-center z-0"
            style={{ opacity: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center z-10">
            <div className="container mx-auto px-4 text-white flex flex-col items-center justify-center z-20">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-6 drop-shadow-lg">
                Tradição e Frescor<br />em Cada Mordida
              </h1>
              <p className="text-2xl md:text-3xl mb-10 text-center max-w-2xl font-light">
                Pizzas artesanais com fermentação natural de até 72 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xl mx-auto">
                <a
                  href="https://www.ifood.com.br/delivery/nova-iguacu-rj/flips-pizza---nova-iguacu-vila-avelina/78047371-417d-4f22-9ef1-41614b36c72a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full flex items-center justify-center gap-3 min-w-0 w-full sm:w-auto transition-colors"
                >
                  Peça Agora no iFood
                </a>
                <a
                  href="/cardapio"
                  className="border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full min-w-0 w-full sm:w-auto transition-colors flex items-center justify-center"
                >
                  Ver Cardápio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Nossos Favoritos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  nome: "Flip's Especial",
                  desc: "Combinação exclusiva da casa com ingredientes selecionados.",
                  img: "/placeholder-pizza1.jpg"
                },
                {
                  nome: "Pizza 48 Horas",
                  desc: "Fermentação longa para uma massa leve e sabor marcante.",
                  img: "/placeholder-pizza2.jpg"
                },
                {
                  nome: "Margherita",
                  desc: "Molho artesanal, muçarela de qualidade e manjericão fresco.",
                  img: "/placeholder-pizza3.jpg"
                },
                {
                  nome: "Trufada",
                  desc: "Toque gourmet com creme trufado e queijo especial.",
                  img: "/placeholder-pizza4.jpg"
                },
              ].map((pizza, i) => (
                <div key={i} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    <Image
                      src={pizza.img}
                      alt={pizza.nome}
                      width={320}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-serif font-bold mb-2">{pizza.nome}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pizza.desc}</p>
                    <button className="bg-amber-400 hover:bg-amber-500 text-maroon font-semibold py-2 px-6 rounded-full mt-auto transition-colors">
                      Quero essa
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/cardapio"
                className="border-2 border-[#800000] text-[#800000] bg-white hover:bg-[#800000] hover:text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
              >
                Ver Cardápio Completo
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA FLIP’S */}
        <section className="py-16 bg-maroon text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">A Experiência Flip's</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Ingredientes Frescos", text: "Selecionamos apenas os melhores ingredientes para nossas pizzas artesanais." },
                { title: "Fermentação Natural", text: "Nosso processo de fermentação natural de até 72 horas garante sabor e digestibilidade." },
                { title: "Delivery Seguro", text: "Entregamos sua pizza com todo cuidado para garantir a melhor experiência." }
              ].map((item, i) => (
                <div className="flex flex-col items-center text-center" key={i}>
                  <div className="w-20 h-20 mb-4 flex items-center justify-center">
                    <span className="text-amber-400 text-4xl">🍕</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMOÇÕES */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Promoções da Semana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary text-white rounded-xl p-10 flex flex-col items-center text-center shadow-lg">
                <h3 className="text-2xl font-serif font-bold mb-2">Terça da Tradição</h3>
                <p className="text-xl mb-4">Clássicas com desconto</p>
                <p className="mb-6">Toda terça-feira, nossas pizzas clássicas com preços especiais para você aproveitar.</p>
                <a
                  href="/promocoes"
                  className="bg-white text-primary hover:bg-amber-100 font-bold py-2 px-8 rounded-full transition-colors"
                >
                  Ver Detalhes
                </a>
              </div>
              <div className="bg-amber-400 text-maroon rounded-xl p-10 flex flex-col items-center text-center shadow-lg">
                <h3 className="text-2xl font-serif font-bold mb-2">Quinta do Flip</h3>
                <p className="text-xl mb-4">Surpresas especiais</p>
                <p className="mb-6">Toda quinta-feira, surpresas especiais para você experimentar novos sabores.</p>
                <a
                  href="/promocoes"
                  className="bg-maroon text-white hover:bg-maroon/90 font-bold py-2 px-8 rounded-full transition-colors"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="/promocoes"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
              >
                Aproveite Agora
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Nossa História</h2>
            <div className="max-w-3xl mx-auto text-center text-lg text-gray-700">
              <p>
                A Flip’s Pizza nasceu da paixão pela verdadeira pizza artesanal de fermentação longa.
                Nosso fundador, Felipe, trouxe para Nova Iguaçu um novo conceito de sabor, combinando ingredientes frescos, técnicas tradicionais de Nova York e inovação em cada receita.
              </p>
              <p className="mt-4">
                Nosso compromisso é entregar sempre o melhor: pizzas de borda alta, massa leve, molho de tomate artesanal e coberturas exclusivas. Aqui, tradição e frescor chegam juntos em cada fatia!
              </p>
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-4">Siga-nos no Instagram</h2>
            <p className="text-center text-lg mb-8">@flipspizza</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photos.length > 0 ? (
                photos.slice(0, 8).map((photo) =>
                  (photo.media_type === "IMAGE" || photo.media_type === "CAROUSEL_ALBUM") && photo.media_url ? (
                    <a
                      key={photo.id}
                      href={photo.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={photo.media_url}
                        alt={photo.caption || "Instagram Flip's Pizza"}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ) : null
                )
              ) : (
                // Placeholders
                Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden"></div>
                ))
              )}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/flipspizza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full text-lg transition-colors"
              >
                Ver mais no Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
