import type { ReactNode } from "react";

export type ProposalStatus = "rascunho" | "enviada" | "visualizada" | "aprovada" | "recusada" | "expirada";

export type SmartProposal = {
  id: string;
  userId: string;
  clientId: string;
  quoteId: string;
  diagnosticId: string;
  proposalNumber: string;
  score: number;
  status: ProposalStatus;
  validUntil: string;
  pdfUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProposalSectionData = {
  title: string;
  badge?: string;
  children: ReactNode;
};

export type ProposalInclusionGridData = {
  includedItems: string[];
  excludedItems: string[];
};

export type ProposalDocumentData = {
  generatedDateText: string;
  validUntilText: string;
  clientName: string;
  clientLocation: string;
  scoreText: string;
  serviceType: string;
  finalValueFormatted: string;
  downPaymentFormatted: string;
  remainingValueFormatted: string;
  surfaceType: string;
  areaType: string;
  problems: string[];
  notes: string;
  scopeItems: string[];
  includedItems: string[];
  excludedItems: string[];
  deadline: string;
  warranty: string;
  paymentTerms: string;
};
