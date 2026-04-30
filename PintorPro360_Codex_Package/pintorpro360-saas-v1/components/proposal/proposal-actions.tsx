type ProposalActionsProps = {
  whatsappMessage: string;
  whatsappUrl: string;
};

export function ProposalActions({ whatsappMessage, whatsappUrl }: ProposalActionsProps) {
  const copyMessage = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(whatsappMessage);
      return;
    }

    window.prompt("Copie a mensagem:", whatsappMessage);
  };

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="proposalActions">
      <button type="button" className="secondaryButton" onClick={copyMessage}>
        Copiar mensagem
      </button>
      <button type="button" className="secondaryButton" onClick={openWhatsApp}>
        Abrir WhatsApp
      </button>
      <button type="button" className="primaryButton" onClick={() => window.print()}>
        Gerar PDF da proposta
      </button>
    </div>
  );
}
