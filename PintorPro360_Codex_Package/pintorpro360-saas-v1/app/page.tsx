import Link from "next/link";

export default function HomePage() {
  return (
    <section className="landingHero">
      <div className="landingContent">
        <span className="statusBadge">Base real SaaS v1</span>
        <h1>Transforme orçamentos simples em propostas profissionais.</h1>
        <p>O PintorPro 360 ajuda pintores autônomos e pequenas equipes a criar diagnósticos, orçamentos, propostas inteligentes, mensagens de WhatsApp, acompanhamento de obras e pós-venda.</p>
        <div className="actions"><Link href="/dashboard" className="primaryButton">Entrar no dashboard</Link><Link href="/proposta" className="secondaryButton">Ver proposta premium</Link></div>
      </div>
      <div className="landingPanel"><h2>Proposta Inteligente de Pintura</h2><p>Diagnóstico técnico, escopo, investimento, condições, validade e aprovação em um documento claro para o cliente.</p></div>
    </section>
  );
}
