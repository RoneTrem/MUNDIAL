import type { Work } from "../../types";

type WorkRow = {
  id: string; user_id: string; client_id: string; proposal_id: string | null; status: string | null;
  checklist: unknown; payments: unknown; notes: string | null; start_date: string | null; end_date: string | null;
  created_at: string; updated_at: string;
};

export function mapWorkRowToDomain(row: WorkRow): Work {
  return {
    id: row.id, userId: row.user_id, clientId: row.client_id, proposalId: row.proposal_id ?? "", status: (row.status ?? "planejada") as Work["status"],
    checklist: (Array.isArray(row.checklist) ? row.checklist : []) as Work["checklist"],
    payments: (Array.isArray(row.payments) ? row.payments : []) as Work["payments"],
    notes: row.notes ?? "", startDate: row.start_date ?? "", endDate: row.end_date ?? undefined, createdAt: row.created_at, updatedAt: row.updated_at
  };
}

export function mapWorkDomainToRow(data: Work): WorkRow {
  return {
    id: data.id, user_id: data.userId, client_id: data.clientId, proposal_id: data.proposalId, status: data.status,
    checklist: data.checklist, payments: data.payments, notes: data.notes, start_date: data.startDate, end_date: data.endDate ?? null,
    created_at: data.createdAt, updated_at: data.updatedAt
  };
}
