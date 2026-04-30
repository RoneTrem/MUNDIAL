type ProposalCoverProps = {
  generatedDateText: string;
};

export function ProposalCover({ generatedDateText }: ProposalCoverProps) {
  return (
    <div className="proposalCover"><div><p className="proposalKicker">PintorPro 360</p><h2>Proposta Inteligente de Pintura</h2><p>Diagnóstico, escopo, investimento e condições apresentados de forma clara para aumentar confiança, valorizar o serviço e reduzir mal-entendidos.</p></div><div className="proposalMetaBox"><span>Proposta Nº 0001</span><strong>{generatedDateText}</strong></div></div>
  );
}
