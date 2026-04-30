export type ClientStatus = "novo" | "contato" | "diagnostico" | "orcamento_enviado" | "proposta_enviada" | "aprovado" | "obra" | "pos_venda" | "inativo";

export type ClientSource = "indicacao" | "instagram" | "whatsapp" | "google" | "site" | "outro";

export type Client = {
  id: string;
  userId: string;
  name: string;
  whatsapp: string;
  phone: string;
  address: string;
  neighborhood: string;
  city: string;
  notes: string;
  source: ClientSource;
  status: ClientStatus;
  createdAt: string;
  updatedAt: string;
};
