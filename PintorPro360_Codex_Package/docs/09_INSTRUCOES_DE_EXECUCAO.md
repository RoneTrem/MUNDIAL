# 09 — Instruções de Execução

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

Build:
```bash
npm run build
```

Erros conhecidos:
- `Module not found: app-shell`: caminho errado de `components/layout/app-shell`.
- `Module not found: placeholder-page`: caminho errado de componente compartilhado.
- `Cannot find module 'tailwindcss'`: template tentando usar Tailwind sem dependência instalada.

Recomendação: usar CSS próprio inicialmente e manter `components`/`lib` fora de `app`.
