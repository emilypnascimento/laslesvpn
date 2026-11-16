# LaslesVPN — Landing Page


## Descrição e objetivo

**Descrição:** LaslesVPN — Landing Page é uma página de uma VPN, desenvolvida como desafio técnico de Front-end. A aplicação reproduz um layout do Figma com React, TypeScript e SCSS, e é responsiva para desktop, tablet e celular.


**Objetivo:** Construir a landing page do zero, fiel ao design, com componentes React reutilizáveis e tipados, estilos organizados em SCSS e código versionado com Git e Pull Requests. Além do resultado visual, o projeto serviu para praticar organização de código, revisão de código e documentação.


## Tecnologias, pré-requisitos, instalação e comandos

**Tecnologias**
- React
- Vite 
- TypeScript
- SCSS (Sass)
- ESLint e Prettier
- Git e GitHub 
- Vercel




**Pré-requisitos**
- Node.js (versão LTS) e npm
- Git


Confira com node -v, npm -v e git --version.


**Instalação e execução**
- bash
- git clone COLE-AQUI-O-LINK-DO-REPOSITORIO
- cd laslesvpn
- npm install
- npm run dev


Abra o endereço mostrado no terminal (normalmente http://localhost:5173).


## Comandos disponíveis

- npm run dev (Inicia o servidor de desenvolvimento)
- npm run build   (Verifica os tipos com o TypeScript e gera a versão de produção em dist/)
- npm run preview (Abre localmente a versão gerada pelo build)
- npm run lint    (Analisa o código com o ESLint)
- npm run format  (Formata o código com o Prettier)




## Organização do projeto e principais funcionalidades

**Organização**

```
text
src/
├── assets/images/     Imagens exportadas do Figma
├── components/        Um componente por pasta, com .tsx e .scss
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── Features/
│   ├── Pricing/
│   ├── Network/
│   ├── Testimonials/
│   ├── Subscribe/
│   └── Footer/
├── styles/            Estilos compartilhados
│   ├── _variables.scss   Cores, fonte e breakpoints
│   ├── _mixins.scss      Media queries reutilizáveis
│   └── global.scss       Reset e estilos globais
├── App.tsx            Monta a página com as seções
└── main.tsx           Ponto de entrada
```




## Principais funcionalidades

- Header com logo, links de navegação por âncora e menu responsivo para celular (botão de abrir e fechar).
- Seções: Hero, About, Features, Pricing, Network, Testimonials, Subscribe e Footer.
- Planos de preço com estado de hover (cartão com borda vermelha).
- Carrossel de depoimentos com 9 cartões, dois botões para navegar e indicador da página atual.
- Layout responsivo, sem rolagem horizontal.
- Textos alternativos nas imagens e estados de foco visíveis para navegação por teclado.


## Links

Figma: https://www.figma.com/design/Q6XCwmrfzLzLZvrwJKZ1cz/FREEBIES-Landingpage-LaslesVPN--Community-?node-id=0-1&p=f


## Dificuldades, limitações e possíveis melhorias futuras

**Dificuldades**
- Menu responsivo: entender como o menu do celular abre e fecha com useState e uma classe condicional.
- Carrossel de depoimentos: fazer os botões que movem os cartões e o indicador de página acompanhar a mudança.
- Mixins e variáveis SCSS: entender como guardar valores muito usados (cores, fonte, breakpoints) e blocos repetidos (media queries) para não repetir código.


**Limitações**
- Sign In, Sign Up, Get Started, Select e Subscribe Now são apenas texto, sem função, como definido para esta etapa.


**Possíveis melhorias futuras**
- Animações e transições discretas.
- Dar funcionalidade aos botões (cadastro, assinatura e planos).
- Nova rodada de acessibilidade (contraste e testes com leitor de tela).

