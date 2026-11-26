# Feira Agroecológica – UNEB Campus V (Santo Antônio de Jesus)
## Landing Page Oficial desenvolvida em Angular

Aplicação Angular moderna, performática e modular, desenvolvida para o **Projeto de Extensão Universitária do Colegiado de Administração da UNEB Campus V (DCH)** voltado ao fortalecimento da Feira Agroecológica, criação do catálogo oficial e realização de oficinas de capacitação.

Inspirada no padrão visual e diretrizes institucionais do portal oficial [DCH V – Sto. Antônio de Jesus](https://dch.saj.uneb.br/).

---

## 🚀 Tecnologias e Arquitetura

* **Angular:** Componentes Standalone (`standalone: true`), reatividade com **Signals** (`signal()`, `computed()`) e injeção moderna de dependências (`inject()`).
* **Estilização e Design System:**
  * **Padrão DCH V:** Paleta institucional (Azul Marinho DCH `#0F2A47`, Azul UNEB `#1769E0`, Verde Agroecologia `#28A745`, Superfície `#F4F9FC`).
  * **Tipografia:** Fonte oficial *Poppins* (Google Fonts).
  * **Bootstrap 5 & Bootstrap Icons:** Grid responsivo, acessibilidade e iconografia.
* **Otimizações:**
  * Bundle inicial otimizado (~81 kB gzip transfer size).
  * Carregamento sob demanda com `loading="lazy"` para fotos da galeria e catálogo.
  * Contadores reativos com `IntersectionObserver`.
  * Visualizador Lightbox completo integrado via serviço e signals (suporte a teclado `Esc`, `←`, `→`).
  * Galeria interativa com filtros reativos (`Todas`, `Feira & Estande FEMPA`, `Oficinas`, `Produtos`).

---

## 📁 Estrutura do Projeto

```text
landingpage/
├── public/
│   ├── favicon.ico
│   └── images/                     # 72+ fotos do projeto organizadas
│       ├── logo_uneb.svg           # Vetor oficial da UNEB
│       ├── oficina1-auditorio-*.jpeg # Auditório com poltronas vermelhas
│       ├── oficina2-sala-*.jpeg    # Sala de aula (camisa amarela, cadeiras azuis)
│       ├── preview/                # Páginas folheáveis do Catálogo
│       └── foto-01.jpeg ... 14     # Estande, FEMPA e feirantes
├── src/
│   ├── app/
│   │   ├── components/             # Componentes modulares standalone
│   │   │   ├── about/              # Frentes do projeto e FEMPA
│   │   │   ├── back-to-top/        # Botão flutuante suave
│   │   │   ├── catalog/            # Tira folheável do Catálogo
│   │   │   ├── credits/            # Coordenação, orientadoras e equipe editorial
│   │   │   ├── feirantes/          # Organizações coletivas e empreendedores
│   │   │   ├── footer/             # Rodapé institucional DCH V
│   │   │   ├── gallery/            # Galeria com filtros e lightbox
│   │   │   ├── hero/               # Abertura com título oficial na UNEB Campus V
│   │   │   ├── lightbox/           # Modal em tela cheia com navegação
│   │   │   ├── metrics/            # Contadores animados reativos
│   │   │   ├── navbar/             # Topbar e menu de navegação
│   │   │   ├── video/              # Aba única de vídeo: "Sobre o projeto"
│   │   │   └── workshops/          # Oficina 1 (auditório) e Oficina 2 (sala de aula)
│   │   ├── models/                 # Tipos e interfaces TypeScript
│   │   └── services/               # Serviços reativos (ProjectService, LightboxService)
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                 # Estilos globais SCSS e variáveis DCH
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🛠️ Comandos Disponíveis

### Iniciar o servidor de desenvolvimento
```bash
npm start
```
Acesse `http://localhost:4200/` no navegador.

### Gerar a versão de produção (Build)
```bash
npm run build
```
Os arquivos otimizados e minificados serão gerados na pasta `dist/feira-agroecologica/browser`.

---

## 👥 Realização e Créditos
* **Universidade do Estado da Bahia (UNEB)** – Departamento de Ciências Humanas (DCH – Campus V)
* **Direção do DCH Campus V:** Maria Avani Nascimento Paim
* **Coordenação do Colegiado de Administração:** Pedro Camilo de Figueiredo Neto
* **Orientação:** Profa. Elenita Barbosa de Souza (Catálogo) e Profa. Mayara Maria de Jesus Almeida (Oficinas)
* **Equipe Editorial:** André Silva de Andrade, Bruna Oliveira dos Santos Costa, Emanuelly Silva dos Santos, Fabiane Oliveira de França, Gabriel da Paz Oliveira, Raíssa Nascimento da Conceição, Ricardo Magalhães Andrade e Vanessa Santos Pereira.
