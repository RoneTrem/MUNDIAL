export type QuoteStatus = "rascunho" | "enviado" | "visualizado" | "aprovado" | "recusado" | "negociacao" | "convertido_obra";
export type ServiceType = "pintura_interna" | "pintura_externa" | "pintura_completa" | "textura" | "verniz" | "outro";

export type QuoteEnvironment = {
  name: string;
  areaM2?: number;
  notes?: string;
};

export type Quote = {
  id: string;
  userId: string;
  clientId: string;
  diagnosticId: string;
  serviceType: ServiceType;
  environments: QuoteEnvironment[];
  laborValue: number;
  materialValue: number;
  extrasValue: number;
  discountValue: number;
  downPayment: number;
  totalValue: number;
  remainingValue: number;
  deadline: string;
  warranty: string;
  paymentTerms: string;
  validityDays: number;
  status: QuoteStatus;
  createdAt: string;
  updatedAt: string;
};
