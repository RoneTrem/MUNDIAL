export const mockClient = { id: "cliente-1", name: "Maria Oliveira", whatsapp: "75999999999", neighborhood: "Centro", city: "Cícero Dantas - BA", status: "Orçamento enviado" };
export const mockDiagnostic = { surfaceType: "Repintura", areaType: "Área interna", problems: ["Umidade", "Descascamento"], notes: "Parede com pontos de descascamento próximo ao rodapé." };
export const mockQuote = { serviceType: "Pintura interna com preparação de superfície", labor: 1800, material: 450, extras: 200, discount: 0, downPayment: 1225, deadline: "4 dias úteis", warranty: "90 dias", paymentTerms: "50% de entrada e 50% na finalização." };
export function getQuoteTotal() { return Math.max(mockQuote.labor + mockQuote.material + mockQuote.extras - mockQuote.discount, 0); }
export function getRemainingValue() { return Math.max(getQuoteTotal() - mockQuote.downPayment, 0); }
