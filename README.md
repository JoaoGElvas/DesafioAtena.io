# DigiForge - Responsive Landing Page

## 📋 Visão Geral

Landing page responsiva para a DigiForge, desenvolvida como desafio de frontend. Interface fiel ao design proposto, com responsividade, interatividade e código limpo usando HTML5, Sass, Bootstrap 5 e JavaScript ES6.

## 🖼️ Referência de Design

- [Figma](https://www.figma.com/design/euKTRDkrruHbQtNj86dhvw/DigiForge---Software-Agency-Landing-Page--Community-?node-id=0-1&p=f&t=C4GYUL0ioduRCYHG-0)

## 🧱 Tecnologias Utilizadas

- HTML5
- CSS3 (Sass)
- Bootstrap 5
- JavaScript (ES6)
- Bootstrap Icons
- Google Fonts

## 📦 Estrutura do Projeto

```
├── index.html
├── package.json
├── README.md
├── js/
│   └── main.js
├── scss/
│   ├── style.scss
│   └── ... (parciais por seção)
├── css/
│   └── style.css (gerado pelo Sass)
├── assets/
│   ├── DigiForge.png
│   ├── hero.png
│   ├── costumers.png
│   ├── ... (imagens e logos)
```

## 📱 Responsividade

- Totalmente responsivo para desktop (≥1200px), tablet (768px–1199px) e mobile (≤767px)
- Utiliza grid e utilitários do Bootstrap
- Elementos se adaptam e centralizam conforme o tamanho da tela

## ✨ Funcionalidades

- **Header fixo**: Fica sticky ao rolar
- **Menu overlay**: Abre com animação, fecha ao clicar fora ou no X, adaptado para mobile
- **Hero Section**: Título, subtítulo e botão de ação
- **Clientes**: Barra com logos
- **Serviços**: Cards com ícones
- **Por que nós**: Estatísticas animadas
- **Featured Work**: Troca de imagem e destaque ao clicar
- **Ready to Innovate**: Call-to-action
- **Depoimentos**: Tabs e cards
- **Contato**: Formulário de newsletter, redes sociais, links, serviços e endereço
- **Footer**: Informações finais
- **Botão “voltar ao topo”**: Aparece ao rolar
- **Scroll suave**: Navegação entre seções
- **Ocultação da barra de rolagem**: Scroll continua funcional, barra visual oculta

## 🛠️ Como Rodar

1. Instale as dependências (apenas para compilar Sass):

```bash
npm install
```

2. Compile o Sass:

```bash
npx sass scss/style.scss css/style.css --watch
```

3. Abra o `index.html` em seu navegador.

> Não é necessário backend. Todo o código roda localmente.

## 📝 Observações & Melhorias

- Layout fiel ao Figma, com adaptações para responsividade.
- Menu overlay ajustado para mobile, exibindo apenas o botão de fechar.
- Barra de rolagem oculta via CSS, scroll permanece funcional.
- JavaScript modular cobre animações, interatividade do menu, scroll suave e botão de topo.
- Sass organizado em parciais por seção para facilitar manutenção.

## 🎥 Vídeo Demonstrativo

- [Veja o funcionamento neste vídeo](https://youtu.be/8kxKZ23m98s)
