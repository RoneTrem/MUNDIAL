"use client";

import { useMemo, useState } from "react";
import { mockClient } from "../../lib/mock/pintorpro-data";

const templates = {
  proposta: "Olá, {{cliente}}. Sua proposta está pronta e já posso te enviar os detalhes completos para aprovação.",
  followup: "Oi, {{cliente}}. Passando para saber se você conseguiu analisar a proposta e se ficou alguma dúvida.",
  posvenda: "Olá, {{cliente}}. Obrigado pela confiança no serviço. Posso te pedir uma avaliação rápida do atendimento?"
};

export default function WhatsAppPage() {
  const [tipo, setTipo] = useState<keyof typeof templates>("proposta");
  const [mensagemExtra, setMensagemExtra] = useState("");

  const mensagem = useMemo(() => {
    const base = templates[tipo].replace("{{cliente}}", mockClient.name);
    return mensagemExtra.trim() ? `${base}\n\n${mensagemExtra.trim()}` : base;
  }, [tipo, mensagemExtra]);

  const url = `https://wa.me/55${mockClient.whatsapp}?text=${encodeURIComponent(mensagem)}`;

  async function copiar() {
    try {
      await navigator.clipboard.writeText(mensagem);
      alert("Mensagem copiada.");
    } catch {
      alert("Falha ao copiar. Tente selecionar e copiar manualmente.");
    }
  }

  return <section><div className="pageHeader"><p className="eyebrow">PintorPro 360</p><h1>Mensagens WhatsApp</h1><p>Gere mensagens profissionais para enviar proposta, responder objeções, fazer follow-up e pedir avaliação.</p></div><div className="contentGrid twoColumns"><div className="premiumCard"><h2>Gerador de mensagens</h2><label className="fieldLabel">Tipo de mensagem</label><select className="inputBase" value={tipo} onChange={(e) => setTipo(e.target.value as keyof typeof templates)}><option value="proposta">Envio de proposta</option><option value="followup">Follow-up</option><option value="posvenda">Pós-venda</option></select><label className="fieldLabel">Complemento opcional</label><textarea className="inputBase" rows={4} value={mensagemExtra} onChange={(e) => setMensagemExtra(e.target.value)} placeholder="Ex.: posso iniciar na segunda-feira às 8h." /></div><div className="premiumCard"><h2>Prévia da mensagem</h2><p className="messagePreview">{mensagem}</p><div className="actions"><button type="button" className="secondaryButton" onClick={copiar}>Copiar mensagem</button><a href={url} className="primaryButton" target="_blank" rel="noreferrer">Abrir WhatsApp</a></div></div></div></section>;
}
