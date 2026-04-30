export function ProposalSection({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="proposalSection">
      <div className="proposalSectionHeader">
        <h3>{title}</h3>
        {badge ? <span className="miniBadge">{badge}</span> : null}
      </div>
      {children}
    </div>
  );
}
