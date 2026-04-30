import type { ProposalDocumentData } from "../../lib/types/proposal";
import { ProposalApproval } from "./proposal-approval";
import { ProposalClosingGrid } from "./proposal-closing-grid";
import { ProposalCover } from "./proposal-cover";
import { ProposalExecutiveSummary } from "./proposal-executive-summary";
import { ProposalFooter } from "./proposal-footer";
import { ProposalHero } from "./proposal-hero";
import { ProposalInclusionGrid } from "./proposal-inclusion-grid";
import { ProposalSection } from "./proposal-section";
import { ProposalValueBlock } from "./proposal-value-block";

export function ProposalDocument({ data }: { data: ProposalDocumentData }) {
  return (
    <div className="proposalDocument">
      <ProposalCover generatedDateText={data.generatedDateText} />
      <ProposalHero clientName={data.clientName} clientLocation={data.clientLocation} scoreText={data.scoreText} />
      <ProposalExecutiveSummary serviceType={data.serviceType} finalValueFormatted={data.finalValueFormatted} downPaymentFormatted={data.downPaymentFormatted} remainingValueFormatted={data.remainingValueFormatted} />
      <div className="premiumGrid"><ProposalSection title="Diagnóstico técnico" badge="Atenção alta"><p><strong>Superfície:</strong> {data.surfaceType} • {data.areaType}</p><p><strong>Problemas observados:</strong> {data.problems.join(", ")}</p><p>{data.notes}</p><p className="technicalNote">A presença de umidade, mofo ou infiltração exige atenção antes da pintura, pois pode comprometer aderência, acabamento e durabilidade.</p></ProposalSection><ProposalSection title="Escopo contratado"><p>{data.serviceType}</p><ul className="list">{data.scopeItems.map((item) => <li key={item}>{item}</li>)}</ul></ProposalSection></div>
      <ProposalInclusionGrid includedItems={data.includedItems} excludedItems={data.excludedItems} />
      <ProposalValueBlock deadline={data.deadline} warranty={data.warranty} paymentTerms={data.paymentTerms} />
      <ProposalClosingGrid validUntilText={data.validUntilText} />
      <ProposalApproval />
      <ProposalFooter />
    </div>
  );
}
