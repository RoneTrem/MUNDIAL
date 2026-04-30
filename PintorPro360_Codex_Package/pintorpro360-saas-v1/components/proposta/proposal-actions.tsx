"use client";

export function ProposalActions({ whatsappUrl, whatsappText }: { whatsappUrl: string; whatsappText: string }) {
  async function handleCopyMessage() {
    try {
      await navigator.clipboard.writeText(whatsappText);
      alert("Mensagem copiada com sucesso.");
    } catch {
      alert("Não foi possível copiar automaticamente. Copie manualmente na tela de WhatsApp.");
    }
  }

  return (
    <div className="proposalActions actionWrap">
      <button type="button" className="secondaryButton" onClick={handleCopyMessage}>Copiar mensagem</button>
      <a href={whatsappUrl} className="secondaryButton" target="_blank" rel="noreferrer">Abrir WhatsApp</a>
      <button type="button" className="primaryButton" onClick={() => window.print()}>Gerar PDF da proposta</button>
    </div>
  );
}
