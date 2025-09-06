# Aniversário do JV 🎉

Projeto React (Vite) de um mini‑jogo/experiência interativa feito com carinho para o JV.  
Este repositório está pronto para **deploy na Vercel** e para rodar **localmente**.

---

## ✨ Tecnologias
- [Vite](https://vitejs.dev/) + React
- JavaScript/JSX
- Deploy via [Vercel](https://vercel.com/)

---

## 📁 Estrutura (resumo)
```
Aniversario-do-JV
  index.html
  package.json
  vite.config.js
  src
    App.jsx
    index.css
    main.jsx
```

> Dica: o arquivo principal do jogo costuma estar em `src/App.jsx` (ou `src/main.jsx`).

---

## 🧰 Pré‑requisitos
- Node.js 18+ (recomendado 18 LTS ou 20 LTS)
- npm (ou pnpm/yarn)

---

## ▶️ Rodando localmente

```bash
# 1) instale as dependências
npm install

# 2) suba o servidor de dev
npm run dev

# 3) abra o link que aparecer (algo como http://localhost:5173)
```

Scripts detectados em `package.json`:
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Se não existir `build`/`preview`, você pode adicioná-los assim no `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## ☁️ Deploy na Vercel (GUI – recomendado)

1. Crie o repositório no GitHub e envie os arquivos do projeto (pasta `src`, `index.html`, `package.json`, `vite.config.*` etc.).  
2. Acesse **vercel.com** → **New Project** → **Import Git Repository** → selecione seu repo.
3. A Vercel detecta automaticamente **Vite (React)**.
4. Clique em **Deploy** e aguarde.  
5. Seu app ficará disponível em um domínio do tipo `https://seu-projeto.vercel.app`.

> Dica: a cada novo commit na branch principal, a Vercel faz deploy automaticamente.

### Deploy via CLI (opcional)

```bash
# Instale a CLI
npm i -g vercel

# Dentro da pasta do projeto
vercel
# responda às perguntas (projeto, escopo/conta, framework = Vite)
# Para produção:
vercel --prod
```

---

## 🧩 Onde editar o jogo
- **Textos / lógica principal**: geralmente em `src/App.jsx`
- **Estilos**: se estiver usando CSS, veja `src/index.css` ou arquivos CSS dentro de `src/`

---

## 🧪 Teste final antes do deploy
```bash
npm run build
npm run preview
```
Se abrir corretamente no navegador local, o deploy na Vercel deve funcionar sem surpresas.

---

## 💌 Compartilhe
Assim que o deploy sair, envie o link `.vercel.app` para quem você ama ❤️

---

## 📜 Licença
Projeto pessoal/educacional. Use e adapte como quiser.
