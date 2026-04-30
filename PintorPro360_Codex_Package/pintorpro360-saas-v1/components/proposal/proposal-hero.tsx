type ProposalHeroProps = {
  clientName: string;
  clientLocation: string;
  scoreText: string;
};

export function ProposalHero({ clientName, clientLocation, scoreText }: ProposalHeroProps) {
  return (
    <div className="proposalHero"><div><p className="label">Cliente</p><h2>{clientName}</h2><p>{clientLocation}</p></div><div className="score premiumScore"><strong>{scoreText}</strong><span>Score Proposta360</span></div></div>
  );
}
