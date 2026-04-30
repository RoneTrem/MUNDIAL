type ProposalValueBlockProps = {
  deadline: string;
  warranty: string;
  paymentTerms: string;
};

export function ProposalValueBlock({ deadline, warranty, paymentTerms }: ProposalValueBlockProps) {
  return (
    <div className="proposalValueBlock"><div><p className="label">Valorização profissional</p><h3>Por que este investimento?</h3><p>O valor considera não apenas a aplicação da tinta, mas também o tempo de preparação, proteção do ambiente, análise da superfície, organização da execução, acabamento e clareza no combinado.</p></div><div className="conditionsBox"><h3>Condições comerciais</h3><p><strong>Prazo:</strong> {deadline}</p><p><strong>Garantia:</strong> {warranty}</p><p><strong>Pagamento:</strong> {paymentTerms}</p></div></div>
  );
}
