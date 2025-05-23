import Link from "next/link";

const PoliticaDePrivacidade = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-4xl font-serif font-bold mb-8 text-primary">Política de Privacidade</h1>
    <p className="mb-6"><strong>Última atualização:</strong> 23 de maio de 2025</p>

    <h2 className="text-2xl font-bold mt-8 mb-2">1. Informações Coletadas</h2>
    <p className="mb-4">
      Podemos coletar as seguintes informações: nome, telefone, e-mail, endereço para entrega, cookies, endereço IP, dados de acesso, páginas visitadas, informações necessárias para processar pedidos, pagamentos e entregas, além de informações fornecidas via redes sociais.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">2. Como Utilizamos os Dados</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Processar e entregar pedidos realizados via site, app ou plataformas de delivery;</li>
      <li>Fornecer suporte ao cliente e responder solicitações;</li>
      <li>Enviar comunicações sobre ofertas, promoções e novidades (quando autorizado);</li>
      <li>Melhorar nossos serviços, produtos e experiência do usuário;</li>
      <li>Cumprir obrigações legais e regulatórias.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-8 mb-2">3. Compartilhamento de Dados</h2>
    <p className="mb-4">
      Seus dados poderão ser compartilhados com parceiros de pagamento, serviços de entrega e logística, plataformas de marketing e analytics, e autoridades públicas quando exigido por lei. Não vendemos seus dados para terceiros.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">4. Cookies e Tecnologias de Rastreamento</h2>
    <p className="mb-4">
      Utilizamos cookies para melhorar a experiência do usuário, personalizar conteúdo, analisar o tráfego e para fins de marketing. Você pode gerenciar as preferências de cookies pelo seu navegador.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">5. Segurança</h2>
    <p className="mb-4">
      Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">6. Direitos do Usuário</h2>
    <p className="mb-4">
      Você pode, a qualquer momento, solicitar acesso, atualização ou exclusão de seus dados pessoais, revogar consentimento para comunicações de marketing e entrar em contato pelo e-mail:{" "}
      <a href="mailto:contato@flipspizza.com.br" className="underline text-primary">contato@flipspizza.com.br</a>.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">7. Alterações na Política</h2>
    <p className="mb-4">
      Esta Política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de eventuais alterações.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">8. Contato</h2>
    <p className="mb-4">
      Em caso de dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail:{" "}
      <a href="mailto:contato@flipspizza.com.br" className="underline text-primary">contato@flipspizza.com.br</a>
    </p>

    <div className="mt-10 text-lg font-bold text-primary">
      Flip&apos;s Pizza – Tradição e Frescor em Cada Mordida
    </div>
    <div className="mt-6 text-sm">
      Veja também nossos{" "}
      <Link href="/termos-de-servico" className="underline text-primary">
        Termos de Serviço
      </Link>
      .
    </div>
  </div>
);

export default PoliticaDePrivacidade;
