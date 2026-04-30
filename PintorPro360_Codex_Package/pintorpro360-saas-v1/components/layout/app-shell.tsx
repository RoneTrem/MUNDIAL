import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Clientes", href: "/clientes" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Orçamentos", href: "/orcamentos" },
  { label: "Proposta", href: "/proposta" },
  { label: "WhatsApp", href: "/whatsapp" },
  { label: "Obras", href: "/obras" },
  { label: "Pós-venda", href: "/pos-venda" }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="appShell">
      <aside className="sidebar">
        <Link href="/dashboard" className="brand"><div className="brandMark">P360</div><div><strong>PintorPro 360</strong><span>Propostas inteligentes</span></div></Link>
        <nav className="sidebarNav">{menuItems.map((item) => <Link key={item.href} href={item.href} className="navLink">{item.label}</Link>)}</nav>
        <div className="sidebarFooter"><p>Base real SaaS v1</p><span>Pronto para evoluir com Supabase</span></div>
      </aside>
      <main className="mainContent">{children}</main>
    </div>
  );
}
