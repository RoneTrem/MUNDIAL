type ProposalExecutiveSummaryProps = {
  serviceType: string;
  finalValueFormatted: string;
  downPaymentFormatted: string;
  remainingValueFormatted: string;
};

export function ProposalExecutiveSummary({ serviceType, finalValueFormatted, downPaymentFormatted, remainingValueFormatted }: ProposalExecutiveSummaryProps) {
  return (
    <div className="proposalExecutive"><div><p className="label">Resumo profissional</p><h3>Serviço proposto</h3><p>{serviceType}. Esta proposta organiza o serviço de pintura em etapas claras, com diagnóstico da superfície, escopo, condições, investimento e orientações para aprovação.</p></div><div className="investmentHighlight"><span>Investimento total</span><strong>{finalValueFormatted}</strong><small>Entrada: {downPaymentFormatted} • Restante: {remainingValueFormatted}</small></div></div>
  );
}
