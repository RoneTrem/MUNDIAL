import type { Client, SurfaceDiagnostic, Quote, SmartProposal, WhatsAppMessage, Work, PortfolioItem, FinanceSummary } from "../types";

const nowIso = new Date().toISOString();

export const mockClient: Client = {
  id: "cliente-1",
  userId: "user-demo",
  name: "Maria Oliveira",
  whatsapp: "75999999999",
  phone: "75999999999",
  address: "Rua das Flores, 120",
  neighborhood: "Centro",
  city: "Cícero Dantas - BA",
  notes: "Prefere contato no fim da tarde.",
  source: "indicacao",
  status: "orcamento_enviado",
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockDiagnostic: SurfaceDiagnostic = {
  id: "diag-1",
  userId: "user-demo",
  clientId: mockClient.id,
  surfaceType: "repintura",
  areaType: "interna",
  problems: ["umidade", "descascamento"],
  notes: "Parede com pontos de descascamento próximo ao rodapé.",
  alertLevel: "alto",
  preparationRecommendations: ["limpeza", "lixamento", "fundo_preparador"],
  photos: [],
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockQuote: Quote = {
  id: "quote-1",
  userId: "user-demo",
  clientId: mockClient.id,
  diagnosticId: mockDiagnostic.id,
  serviceType: "pintura_interna",
  environments: [{ name: "Sala", areaM2: 24 }, { name: "Quarto", areaM2: 16 }],
  laborValue: 1800,
  materialValue: 450,
  extrasValue: 200,
  discountValue: 0,
  downPayment: 1225,
  totalValue: 2450,
  remainingValue: 1225,
  deadline: "4 dias úteis",
  warranty: "90 dias",
  paymentTerms: "50% de entrada e 50% na finalização.",
  validityDays: 7,
  status: "enviado",
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockProposal: SmartProposal = {
  id: "proposal-1",
  userId: "user-demo",
  clientId: mockClient.id,
  quoteId: mockQuote.id,
  diagnosticId: mockDiagnostic.id,
  proposalNumber: "0001",
  score: 100,
  status: "enviada",
  validUntil: nowIso,
  pdfUrl: "",
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockWhatsappMessage: WhatsAppMessage = {
  id: "wa-1",
  userId: "user-demo",
  clientId: mockClient.id,
  proposalId: mockProposal.id,
  type: "envio_proposta",
  content: "Olá! Segue sua Proposta Inteligente de Pintura.",
  createdAt: nowIso
};

export const mockWork: Work = {
  id: "work-1",
  userId: "user-demo",
  clientId: mockClient.id,
  proposalId: mockProposal.id,
  status: "planejada",
  checklist: [{ id: "c1", label: "Superfície preparada", done: false }],
  payments: [{ id: "p1", label: "Entrada", value: 1225 }],
  notes: "Iniciar após confirmação de material.",
  startDate: nowIso,
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockPortfolioItem: PortfolioItem = {
  id: "port-1",
  userId: "user-demo",
  clientId: mockClient.id,
  workId: mockWork.id,
  beforePhotos: [],
  afterPhotos: [],
  description: "Pintura interna com preparação completa.",
  instagramCaption: "Antes e depois de uma transformação premium 🎨",
  authorized: true,
  createdAt: nowIso,
  updatedAt: nowIso
};

export const mockFinanceSummary: FinanceSummary = {
  totalValue: mockQuote.totalValue,
  downPayment: mockQuote.downPayment,
  remainingValue: mockQuote.remainingValue,
  materialCost: 450,
  helperCost: 300,
  transportCost: 120,
  foodCost: 80,
  otherCosts: 50,
  estimatedProfit: 1450,
  receivedValue: 1225,
  pendingValue: 1225,
  paymentStatus: "parcial"
};

export function getQuoteTotal() {
  return Math.max(mockQuote.laborValue + mockQuote.materialValue + mockQuote.extrasValue - mockQuote.discountValue, 0);
}

export function getRemainingValue() {
  return Math.max(getQuoteTotal() - mockQuote.downPayment, 0);
}
