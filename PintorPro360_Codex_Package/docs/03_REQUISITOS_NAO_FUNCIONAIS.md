# 03 — Requisitos Não Funcionais

## Visual e UX
Visual premium, moderno, confiável, limpo e profissional. Não pode parecer planilha, app antigo, protótipo amador ou sistema genérico. Deve ser mobile-first e fácil para pintor leigo.

## Segurança
Usar autenticação segura, variáveis de ambiente, não expor chaves, validação de entrada, Row Level Security no Supabase, controle por usuário, logs, tratamento de erros, backups, termos, política de privacidade e LGPD.

## Proteção contra cópia
Manter lógica crítica no backend, templates de PDF próprios, marca forte, textos/fluxos autorais, controle de acesso, logs, limitação por plano e marca d’água no plano gratuito futuramente. Não prometer proteção absoluta.

## PDF
A proposta deve parecer documento comercial premium. Inicialmente pode usar `window.print()` com `@media print`; depois deve evoluir para PDF server-side e salvar no Supabase Storage.

## Performance
Evitar dependências desnecessárias, manter código modular, responsivo, leve e escalável.
