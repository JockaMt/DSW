# TrickTech - E-commerce de Tecnologia

Um e-commerce moderno de produtos de tecnologia desenvolvido com React, TypeScript e Vite. O TrickTech oferece uma experiência de compra intuitiva com foco em produtos tecnológicos, eletrônicos e acessórios.

![TrickTech Logo](public/logo.webp)

## 🚀 Funcionalidades

- **Interface Moderna**: Design responsivo e intuitivo
- **Catálogo de Produtos**: Navegação por categorias (Eletrônicos, Acessórios, Promoções, etc.)
- **Sistema de Busca**: Pesquisa rápida de produtos
- **Carrinho de Compras**: Gestão de produtos selecionados
- **Área do Cliente**: Acesso à conta do usuário
- **Destaques**: Seção de produtos em destaque com navegação horizontal
- **Scroll to Top**: Botão para retorno rápido ao topo da página

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server rápido
- **React Icons** - Biblioteca de ícones
- **CSS Modules** - Estilização modular

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── header/         # Cabeçalho com logo, busca e navegação
│   ├── header-menu/    # Menu de navegação secundário
│   ├── footer/         # Rodapé da aplicação
│   ├── landing-card/   # Cards para produtos em destaque
│   ├── rating-stars/   # Sistema de avaliação
│   └── roll-to-top/    # Botão de volta ao topo
├── sections/           # Seções principais da página
│   ├── landing/        # Seção de destaque/hero
│   ├── products/       # Catálogo de produtos
│   └── sponsor/        # Banner promocional
├── assets/             # Recursos estáticos
└── styles/             # Arquivos de estilo
```

## 🎨 Design System

O projeto utiliza um sistema de cores consistente:

- **Background**: #000000 (Preto)
- **Primary**: #273F4F (Azul escuro)
- **Secondary**: #EFEEEA (Bege claro)
- **Accent**: #fe7743 (Laranja vibrante)
- **Highlight**: #0056b3 (Azul vibrante)

## 🚦 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd DSW
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📝 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa verificação de linting

## 🔧 Configuração do ESLint

O projeto está configurado com ESLint para manter a qualidade do código. Para projetos em produção, recomenda-se ativar regras type-aware:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🏪 Sobre o TrickTech

O TrickTech é uma plataforma de e-commerce especializada em produtos de tecnologia, oferecendo desde eletrônicos básicos até os mais avançados dispositivos, sempre com os melhores preços e ofertas exclusivas para nossos clientes.
