# Uso de Inteligência Artificial
Usei o Claude (Anthropic) para estudar conceitos e entender como fazer as partes em que tive mais dificuldade.

## Ferramenta: Claude

**Onde**: Header — Menu responsivo (toggle)

**Motivo**: Dificuldade para fazer o menu do celular abrir e fechar no React.

**Como**: Solicitei explicações sobre o hook useState, sobre o botão que inverte o estado e sobre a classe condicional (header__nav--open) que mostra o menu no CSS. 

**Aprendizado**: Compreendi que o estado do React controla o que aparece na tela: o botão só muda o estado, e o CSS mostra ou esconde o menu conforme a classe. Entendi também por que o botão do menu é um button e para que servem os atributos de acessibilidade.


## Ferramenta: Claude

**Onde**: Testimonials — Botões para passar os cartões

**Motivo**: Dificuldade para fazer os botões que movem os cartões de depoimentos e o indicador de página (as bolinhas).

**Como**: Solicitei ajuda para montar o carrossel. Recebi explicações sobre o useRef para acessar a lista de cartões, sobre como rolar a lista ao clicar nos botões e sobre como usar um estado para saber a página atual e pintar a bolinha de vermelho.

**Aprendizado**: Compreendi a diferença entre estado (useState) e referência a um elemento (useRef), como acionar a rolagem de um elemento a partir de um clique e como ligar um estado ao visual por meio de uma classe.


## Ferramenta: Claude

**Onde**: Estilos compartilhados — Mixins e variáveis SCSS

**Motivo**: Dificuldade para organizar valores e blocos de estilo muito usados, que eu repetia em vários arquivos.

**Como**: Solicitei explicações e exemplos de variáveis e de mixins (@mixin mobile e @include mobile) para guardar as media queries. Também pedi a explicação de @use e dos arquivos que começam com _.

**Aprendizado**: Compreendi que variáveis guardam um valor e mixins guardam um bloco de estilo, e que assim uma mudança (como a cor principal ou o ponto de quebra) é feita em um só lugar. Aprendi também a criar essa base só quando um valor realmente se repete.