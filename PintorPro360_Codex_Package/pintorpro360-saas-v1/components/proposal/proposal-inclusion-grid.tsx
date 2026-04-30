import { ProposalSection } from "./proposal-section";

type ProposalInclusionGridProps = {
  includedItems: string[];
  excludedItems: string[];
};

export function ProposalInclusionGrid({ includedItems, excludedItems }: ProposalInclusionGridProps) {
  return (
    <div className="premiumGrid"><ProposalSection title="Está incluso"><ul className="premiumList">{includedItems.map((item) => <li key={item}>{item}</li>)}</ul></ProposalSection><ProposalSection title="Não está incluso"><ul className="premiumList dangerList">{excludedItems.map((item) => <li key={item}>{item}</li>)}</ul></ProposalSection></div>
  );
}
