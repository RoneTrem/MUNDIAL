import { ProposalActions } from "../../components/proposta/proposal-actions";
import { ProposalSection } from "../../components/proposta/proposal-section";
import { getQuoteTotal, getRemainingValue, mockClient, mockDiagnostic, mockQuote } from "../../lib/mock/pintorpro-data";
import { formatCurrency } from "../../lib/utils/format";

export default function PropostaPage() {
  const finalValue = getQuoteTotal();
  const remainingValue = getRemainingValue();
  const generatedDateText = new Date().toLocaleDateString("pt-BR");
  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 7);

  const whatsappText = `Olá, ${mockClient.name}. Segue sua proposta de pintura no valor de ${formatCurrency(finalValue)}. Validade até ${validUntil.toLocaleDateString("pt-BR")}.`;
  const whatsappUrl = `https://wa.me/55${mockClient.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="proposal premiumProposal">
      <ProposalActions whatsappUrl={whatsappUrl} whatsappText={whatsappText} />
      <div className="proposalDocument">
        <div className="proposalCover"><div><p className="proposalKicker">PintorPro 360</p><h2>Proposta Inteligente de Pintura</h2><p>Diagnóstico, escopo, investimento e condições apresentados de forma clara para aumentar confiança, valorizar o serviço e reduzir mal-entendidos.</p></div><div className="proposalMetaBox"><span>Proposta Nº 0001</span><strong>{generatedDateText}</strong></div></div>
        <div className="proposalHero"><div><p className="label">Cliente</p><h2>{mockClient.name}</h2><p>{mockClient.neighborhood} • {mockClient.city}</p></div><div className="score premiumScore"><strong>100/100</strong><span>Score Proposta360</span></div></div>
        <div className="proposalExecutive"><div><p className="label">Resumo profissional</p><h3>Serviço proposto</h3><p>{mockQuote.serviceType}. Esta proposta organiza o serviço de pintura em etapas claras, com diagnóstico da superfície, escopo, condições, investimento e orientações para aprovação.</p></div><div className="investmentHighlight"><span>Investimento total</span><strong>{formatCurrency(finalValue)}</strong><small>Entrada: {formatCurrency(mockQuote.downPayment)} • Restante: {formatCurrency(remainingValue)}</small></div></div>
        <div className="premiumGrid"><ProposalSection title="Diagnóstico técnico" badge="Atenção alta"><p><strong>Superfície:</strong> {mockDiagnostic.surfaceType} • {mockDiagnostic.areaType}</p><p><strong>Problemas observados:</strong> {mockDiagnostic.problems.join(", ")}</p><p>{mockDiagnostic.notes}</p><p className="technicalNote">A presença de umidade, mofo ou infiltração exige atenção antes da pintura, pois pode comprometer aderência, acabamento e durabilidade.</p></ProposalSection><ProposalSection title="Escopo contratado"><p>{mockQuote.serviceType}</p><ul className="list"><li>Preparação básica da área conforme avaliação.</li><li>Organização da execução para reduzir sujeira e retrabalho.</li><li>Aplicação conforme condições combinadas com o cliente.</li><li>Revisão básica de acabamento antes da finalização.</li></ul></ProposalSection></div>
        <div className="premiumGrid"><ProposalSection title="Está incluso"><ul className="premiumList"><li>Mão de obra descrita no escopo da proposta.</li><li>Preparação básica da superfície conforme necessidade.</li><li>Aplicação da pintura nas áreas combinadas.</li><li>Revisão básica de acabamento.</li><li>Limpeza básica da área de trabalho ao final.</li></ul></ProposalSection><ProposalSection title="Não está incluso"><ul className="premiumList dangerList"><li>Correção de infiltrações estruturais.</li><li>Serviços elétricos, hidráulicos ou alvenaria pesada.</li><li>Troca de reboco comprometido.</li><li>Mudança de cor ou escopo após aprovação.</li><li>Serviços em áreas não descritas nesta proposta.</li></ul></ProposalSection></div>
        <div className="proposalValueBlock"><div><p className="label">Valorização profissional</p><h3>Por que este investimento?</h3><p>O valor considera não apenas a aplicação da tinta, mas também o tempo de preparação, proteção do ambiente, análise da superfície, organização da execução, acabamento e clareza no combinado.</p></div><div className="conditionsBox"><h3>Condições comerciais</h3><p><strong>Prazo:</strong> {mockQuote.deadline}</p><p><strong>Garantia:</strong> {mockQuote.warranty}</p><p><strong>Pagamento:</strong> {mockQuote.paymentTerms}</p></div></div>
        <div className="proposalClosingGrid"><div className="nextStepsBox"><p className="label">Próximos passos</p><h3>Como aprovar e iniciar</h3><ol><li>Confirmar aprovação pelo WhatsApp.</li><li>Alinhar data de início.</li><li>Confirmar entrada, quando aplicável.</li><li>Liberar o ambiente.</li></ol></div><div className="validityBox"><p className="label">Validade da proposta</p><h3>{validUntil.toLocaleDateString("pt-BR")}</h3><p>Após esta data, valores, prazos e condições podem ser revisados.</p></div></div>
        <div className="approvalBox"><div><p className="label">Aprovação do cliente</p><h3>Confirmação da proposta</h3><p>Declaro estar ciente do escopo, investimento, prazo, garantia, condições de pagamento, itens inclusos, itens não inclusos e próximos passos.</p></div><div className="signatureArea"><div className="signatureLine" /><span>Assinatura / aceite do cliente</span></div></div>
        <footer className="proposalFooter"><strong>PintorPro 360</strong><span>Proposta gerada para demonstrar organização, clareza, profissionalismo e segurança no atendimento de pintura.</span></footer>
      </div>
    </section>
  );
}
