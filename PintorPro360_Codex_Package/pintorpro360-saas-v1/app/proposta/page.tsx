"use client";

import { ProposalActions } from "../../components/proposal/proposal-actions";
import { ProposalDocument } from "../../components/proposal/proposal-document";
import { getQuoteTotal, getRemainingValue, mockClient, mockDiagnostic, mockQuote } from "../../lib/mock/pintorpro-data";
import type { ProposalDocumentData } from "../../lib/types/proposal";
import { formatCurrency } from "../../lib/utils/format";

const SCOPE_ITEMS = [
  "Preparação básica da área conforme avaliação.",
  "Organização da execução para reduzir sujeira e retrabalho.",
  "Aplicação conforme condições combinadas com o cliente.",
  "Revisão básica de acabamento antes da finalização."
];

const INCLUDED_ITEMS = [
  "Mão de obra descrita no escopo da proposta.",
  "Preparação básica da superfície conforme necessidade.",
  "Aplicação da pintura nas áreas combinadas.",
  "Revisão básica de acabamento.",
  "Limpeza básica da área de trabalho ao final."
];

const EXCLUDED_ITEMS = [
  "Correção de infiltrações estruturais.",
  "Serviços elétricos, hidráulicos ou alvenaria pesada.",
  "Troca de reboco comprometido.",
  "Mudança de cor ou escopo após aprovação.",
  "Serviços em áreas não descritas nesta proposta."
];

function buildProposalData(): ProposalDocumentData {
  const finalValue = getQuoteTotal();
  const remainingValue = getRemainingValue();
  const generatedDate = new Date();
  const validUntil = new Date(generatedDate);
  validUntil.setDate(validUntil.getDate() + 7);

  return {
    generatedDateText: generatedDate.toLocaleDateString("pt-BR"),
    validUntilText: validUntil.toLocaleDateString("pt-BR"),
    clientName: mockClient.name,
    clientLocation: `${mockClient.neighborhood} • ${mockClient.city}`,
    scoreText: "100/100",
    serviceType: mockQuote.serviceType,
    finalValueFormatted: formatCurrency(finalValue),
    downPaymentFormatted: formatCurrency(mockQuote.downPayment),
    remainingValueFormatted: formatCurrency(remainingValue),
    surfaceType: mockDiagnostic.surfaceType,
    areaType: mockDiagnostic.areaType,
    problems: mockDiagnostic.problems,
    notes: mockDiagnostic.notes,
    scopeItems: SCOPE_ITEMS,
    includedItems: INCLUDED_ITEMS,
    excludedItems: EXCLUDED_ITEMS,
    deadline: mockQuote.deadline,
    warranty: mockQuote.warranty,
    paymentTerms: mockQuote.paymentTerms
  };
}

export default function PropostaPage() {
  const proposalData = buildProposalData();

  return (
    <section className="proposal premiumProposal">
      <ProposalActions />
      <ProposalDocument data={proposalData} />
    </section>
  );
}
