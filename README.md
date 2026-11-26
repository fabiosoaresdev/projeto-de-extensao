# Landing Page – Feira Agroecológica (UNEB Campus V / DCH)

Landing page institucional desenvolvida para o projeto de extensão do Colegiado de Administração da UNEB Campus V (Santo Antônio de Jesus), inspirada no padrão visual oficial do portal do [DCH V](https://dch.saj.uneb.br/).

---

## 📁 Estrutura do Projeto

```text
d:\Projetos\Vanessa\landingpage\
├── index.html                  # Página principal (HTML5 semântico com Bootstrap 5)
├── css/
│   └── style.css               # Estilos personalizados no padrão visual DCH V
├── src/
│   └── main.ts                 # Código TypeScript com interatividade e tipagem
├── js/
│   └── main.js                 # Código JavaScript compilado a partir do TypeScript
├── images/                     # Diretório de fotos do projeto
│   ├── logo_uneb.svg           # Logo oficial da UNEB em vetor SVG
│   ├── foto-01.jpeg ... 14     # Fotos em alta resolução da Feira e das Oficinas
│   ├── WhatsApp Image...       # Arquivos originais enviados
│   └── preview/                # Páginas folheáveis do Catálogo e imagens de apoio
├── package.json                # Configuração do projeto e scripts npm
├── tsconfig.json               # Configurações do compilador TypeScript
└── README.md                   # Documentação do projeto
```

---

## 🎨 Padrão Visual DCH V (Santo Antônio de Jesus)

- **Tipografia:** Fonte *Poppins* (Google Fonts), pesos 300 a 800.
- **Cores Oficiais:**
  - `Azul Noturno / Navy DCH:` `#0F2A47` e `#1D3E63` (Barra institucional, cabeçalhos e rodapé).
  - `Azul UNEB:` `#1769E0` e `#4482FF` (Botões de ação, links, destaques).
  - `Verde Agroecologia / Sustentável:` `#28A745` e `#61CE70` (Badges, botões temáticos).
  - `Fundo suave:` `#F4F9FC` (Leve contraste institucional).

---

## 🚀 Como Executar o Site

1. **Abrir diretamente no navegador:**
   - Basta dar um duplo clique no arquivo [`index.html`](file:///d:/Projetos/Vanessa/landingpage/index.html) no Windows Explorer ou arrastá-lo para qualquer navegador (Chrome, Edge, Firefox).
   - Não requer servidor local obrigatório.

2. **Como recompilar o TypeScript após alterações (opcional):**
   - Caso queira editar o arquivo [`src/main.ts`](file:///d:/Projetos/Vanessa/landingpage/src/main.ts):
   ```bash
   npm run build
   ```
   - Ou para compilar em tempo real enquanto digita:
   ```bash
   npm run watch
   ```

---

## 📸 Como Gerenciar as Fotos do Projeto

- As fotos do projeto estão salvas no diretório [`images/`](file:///d:/Projetos/Vanessa/landingpage/images).
- Para adicionar novas fotos, basta salvá-las na pasta `images/` e referenciá-las no `index.html`.
- A galeria possui um **visualizador fullscreen interativo (Lightbox)**: ao clicar em qualquer imagem, ela abre ampliada com botões de avançar/voltar e suporte às teclas do teclado (←, → e Esc).

---

## 👥 Realização e Créditos

- **Universidade do Estado da Bahia (UNEB)** – Departamento de Ciências Humanas (DCH V)
- **Direção do DCH Campus V:** Maria Avani Nascimento Paim
- **Coordenação de Administração:** Pedro Camilo de Figueiredo Neto
- **Orientação:** Profa. Elenita Barbosa de Souza (Catálogo) e Profa. Mayara Maria de Jesus Almeida (Oficinas)
- **Equipe Editorial (8º Semestre):** André Silva de Andrade, Bruna Oliveira dos Santos Costa, Emanuelly Silva dos Santos, Fabiane Oliveira de França, Gabriel da Paz Oliveira, Raíssa Nascimento da Conceição, Ricardo Magalhães Andrade e Vanessa Santos Pereira.
