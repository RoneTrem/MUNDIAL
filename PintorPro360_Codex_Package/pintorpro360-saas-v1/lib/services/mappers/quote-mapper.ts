import type { Quote } from "../../types";

type QuoteRow = {
  id: string; user_id: string; client_id: string; diagnostic_id: string | null; service_type: string | null; environments: unknown;
  labor_value: number; material_value: number; extras_value: number; discount_value: number; down_payment: number; total_value: number; remaining_value: number;
  deadline: string | null; warranty: string | null; payment_terms: string | null; validity_days: number | null; status: string | null;
  created_at: string; updated_at: string;
};

export function mapQuoteRowToDomain(row: QuoteRow): Quote {
  return {
    id: row.id, userId: row.user_id, clientId: row.client_id, diagnosticId: row.diagnostic_id ?? "", serviceType: (row.service_type ?? "outro") as Quote["serviceType"],
    environments: (Array.isArray(row.environments) ? row.environments : []) as Quote["environments"],
    laborValue: row.labor_value, materialValue: row.material_value, extrasValue: row.extras_value, discountValue: row.discount_value,
    downPayment: row.down_payment, totalValue: row.total_value, remainingValue: row.remaining_value,
    deadline: row.deadline ?? "", warranty: row.warranty ?? "", paymentTerms: row.payment_terms ?? "", validityDays: row.validity_days ?? 7,
    status: (row.status ?? "rascunho") as Quote["status"], createdAt: row.created_at, updatedAt: row.updated_at
  };
}

export function mapQuoteDomainToRow(data: Quote): QuoteRow {
  return {
    id: data.id, user_id: data.userId, client_id: data.clientId, diagnostic_id: data.diagnosticId, service_type: data.serviceType, environments: data.environments,
    labor_value: data.laborValue, material_value: data.materialValue, extras_value: data.extrasValue, discount_value: data.discountValue,
    down_payment: data.downPayment, total_value: data.totalValue, remaining_value: data.remainingValue,
    deadline: data.deadline, warranty: data.warranty, payment_terms: data.paymentTerms, validity_days: data.validityDays, status: data.status,
    created_at: data.createdAt, updated_at: data.updatedAt
  };
}
