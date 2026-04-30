type ProposalClosingGridProps = {
  validUntilText: string;
};

export function ProposalClosingGrid({ validUntilText }: ProposalClosingGridProps) {
  return (
    <div className="proposalClosingGrid"><div className="nextStepsBox"><p className="label">Próximos passos</p><h3>Como aprovar e iniciar</h3><ol><li>Confirmar aprovação pelo WhatsApp.</li><li>Alinhar data de início.</li><li>Confirmar entrada, quando aplicável.</li><li>Liberar o ambiente.</li></ol></div><div className="validityBox"><p className="label">Validade da proposta</p><h3>{validUntilText}</h3><p>Após esta data, valores, prazos e condições podem ser revisados.</p></div></div>
  );
}
