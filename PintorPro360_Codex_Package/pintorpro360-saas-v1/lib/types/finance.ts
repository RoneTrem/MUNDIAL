export type PaymentStatus = "em_dia" | "parcial" | "pendente" | "atrasado" | "quitado";

export type FinanceSummary = {
  totalValue: number;
  downPayment: number;
  remainingValue: number;
  materialCost: number;
  helperCost: number;
  transportCost: number;
  foodCost: number;
  otherCosts: number;
  estimatedProfit: number;
  receivedValue: number;
  pendingValue: number;
  paymentStatus: PaymentStatus;
};
