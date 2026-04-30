export type WorkStatus = "planejada" | "em_andamento" | "pausada" | "concluida" | "cancelada";

export type WorkChecklistItem = {
  id: string;
  label: string;
  done: boolean;
  completedAt?: string;
};

export type WorkPayment = {
  id: string;
  label: string;
  value: number;
  paidAt?: string;
};

export type Work = {
  id: string;
  userId: string;
  clientId: string;
  proposalId: string;
  status: WorkStatus;
  checklist: WorkChecklistItem[];
  payments: WorkPayment[];
  notes: string;
  startDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
};
