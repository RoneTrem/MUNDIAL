import type { ReactNode } from "react";

type ProposalSectionProps = {
  title: string;
  badge?: string;
  children: ReactNode;
};

export function ProposalSection({ title, badge, children }: ProposalSectionProps) {
  return <div className="proposalSection"><div className="proposalSectionHeader"><h3>{title}</h3>{badge ? <span className="miniBadge">{badge}</span> : null}</div>{children}</div>;
}
