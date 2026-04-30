import type { SmartProposal } from "../../types";

type SmartProposalRow = {
  id: string; user_id: string; client_id: string; quote_id: string; diagnostic_id: string | null; proposal_number: string | null;
  score: number | null; status: string | null; valid_until: string | null; pdf_url: string | null; created_at: string; updated_at: string;
};

export function mapProposalRowToDomain(row: SmartProposalRow): SmartProposal {
  return {
    id: row.id, userId: row.user_id, clientId: row.client_id, quoteId: row.quote_id, diagnosticId: row.diagnostic_id ?? "", proposalNumber: row.proposal_number ?? "",
    score: row.score ?? 0, status: (row.status ?? "rascunho") as SmartProposal["status"], validUntil: row.valid_until ?? "", pdfUrl: row.pdf_url ?? "",
    createdAt: row.created_at, updatedAt: row.updated_at
  };
}

export function mapProposalDomainToRow(data: SmartProposal): SmartProposalRow {
  return {
    id: data.id, user_id: data.userId, client_id: data.clientId, quote_id: data.quoteId, diagnostic_id: data.diagnosticId, proposal_number: data.proposalNumber,
    score: data.score, status: data.status, valid_until: data.validUntil, pdf_url: data.pdfUrl ?? null, created_at: data.createdAt, updated_at: data.updatedAt
  };
}
