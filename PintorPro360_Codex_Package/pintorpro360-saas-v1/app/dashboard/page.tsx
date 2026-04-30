import Link from "next/link";
import { formatCurrency } from "../../lib/utils/format";
import { getQuoteTotal, mockClient } from "../../lib/mock/pintorpro-data";

export default function DashboardPage() {
  const total = getQuoteTotal();
  return (
    <section>
      <div className="pageHeader"><p className="eyebrow">Central de controle</p><h1>Dashboard</h1><p>Acompanhe clientes, propostas, obras, pagamentos e ações importantes para transformar atendimento em venda.</p></div>
      <div className="metricsGrid"><MetricCard label="Clientes" value="1" /><MetricCard label="Orçamentos" value="1" /><MetricCard label="Valor previsto" value={formatCurrency(total)} /><MetricCard label="Score atual" value="100/100" /></div>
      <div className="contentGrid twoColumns"><div className="premiumCard"><span className="statusBadge">Próximo passo</span><h2>Criar Proposta Inteligente</h2><p>O cliente {mockClient.name} já possui dados de exemplo. Use a tela de proposta para validar o layout premium na base real.</p><div className="actions"><Link href="/proposta" className="primaryButton">Ver proposta</Link><Link href="/diagnostico" className="secondaryButton">Ver diagnóstico</Link></div></div><div className="premiumCard"><h2>Alertas de produto</h2><ul className="cleanList"><li>Base Next.js criada.</li><li>Rotas principais preparadas.</li><li>Dados ainda são mockados.</li><li>Supabase será conectado depois.</li></ul></div></div>
    </section>
  );
}
function MetricCard({ label, value }: { label: string; value: string }) { return <div className="metricCard"><span>{label}</span><strong>{value}</strong></div>; }
