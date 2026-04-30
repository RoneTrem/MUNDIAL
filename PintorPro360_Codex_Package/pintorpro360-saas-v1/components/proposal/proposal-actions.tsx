export function ProposalActions() {
  return (
    <div className="proposalActions">
      <button type="button" className="primaryButton" onClick={() => window.print()}>
        Gerar PDF da proposta
      </button>
    </div>
  );
}
