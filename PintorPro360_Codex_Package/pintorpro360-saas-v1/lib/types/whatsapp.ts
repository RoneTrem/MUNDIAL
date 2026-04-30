export type WhatsAppMessageType = "primeiro_atendimento" | "pedido_fotos" | "agendamento" | "envio_proposta" | "explicacao_valor" | "objeção_preco" | "follow_up" | "aprovacao" | "inicio_obra" | "finalizacao" | "pos_venda";

export type WhatsAppMessage = {
  id: string;
  userId: string;
  clientId: string;
  proposalId: string;
  type: WhatsAppMessageType;
  content: string;
  createdAt: string;
};
