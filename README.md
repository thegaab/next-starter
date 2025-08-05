# Next.js Starter Template

Este é um template Next.js robusto e otimizado, configurado com as melhores práticas para desenvolvimento de aplicações web modernas. Ideal para iniciar novos projetos com uma base sólida e padronizada.

## Funcionalidades

- **Next.js 15+**: Framework React para produção com renderização híbrida, otimização de rotas e muito mais.
- **TypeScript**: Tipagem estática para maior segurança e manutenibilidade do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **ESLint**: Análise estática de código para identificar problemas e garantir a qualidade.
- **Prettier**: Formatador de código automático para manter um estilo consistente em todo o projeto.
- **Husky**: Hooks Git para automatizar tarefas antes de commits e pushes.
- **Commitlint**: Garante que as mensagens de commit sigam um padrão convencional (Conventional Commits).
- **Otimização de Imagens e Fontes**: Utiliza os recursos nativos do Next.js para performance.

## Primeiros Passos

### Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18.x ou superior) e o [pnpm](https://pnpm.io/) instalados.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/your-username/next-starter.git
    cd next-starter
    ```
2.  Instale as dependências:
    ```bash
    pnpm install
    ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado. As alterações no código serão atualizadas automaticamente.

### Build

Para construir a aplicação para produção:

```bash
pnpm build
```

### Linting

Para executar o linter:

```bash
pnpm lint
```

### Formatação

Para formatar o código com Prettier:

```bash
pnpm format
```

(Nota: Este script será adicionado ao `package.json` em breve.)

## Estrutura do Projeto

A estrutura de pastas foi organizada para facilitar a escalabilidade e a manutenção:

```
.
├── app/
│   ├── components/   # Componentes React reutilizáveis
│   ├── hooks/        # Hooks React personalizados
│   ├── utils/        # Funções utilitárias e helpers
│   ├── styles/       # Estilos globais ou específicos (se não forem Tailwind)
│   ├── types/        # Definições de tipos TypeScript
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx    # Layout principal da aplicação
│   └── page.tsx      # Página inicial
├── public/           # Arquivos estáticos (imagens, etc.)
├── .husky/           # Configuração do Husky (hooks Git)
├── .next/            # Build gerado pelo Next.js (ignorado pelo Git)
├── node_modules/     # Dependências do projeto (ignorado pelo Git)
├── .prettierrc.json  # Configuração do Prettier
├── .commitlintrc.json # Configuração do Commitlint
├── eslint.config.mjs # Configuração do ESLint
├── next.config.ts    # Configuração do Next.js
├── package.json      # Metadados e scripts do projeto
├── pnpm-lock.yaml    # Lockfile do pnpm
├── postcss.config.mjs # Configuração do PostCSS
├── README.md         # Este arquivo
├── tsconfig.json     # Configuração do TypeScript
└── .gitignore        # Arquivos e pastas a serem ignorados pelo Git
```

## Convenções de Commit

Este projeto utiliza o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para padronizar as mensagens de commit. Isso ajuda na geração automática de changelogs e na compreensão do histórico do projeto.

Exemplos:

- `feat: adicionar nova funcionalidade de autenticação`
- `fix: corrigir bug de exibição na página de perfil`
- `docs: atualizar documentação de instalação`
- `style: formatar código com prettier`
- `refactor: refatorar componente de botão`
- `test: adicionar testes para o serviço de usuário`
- `chore: atualizar dependências`

## Deploy

A forma mais fácil de fazer deploy da sua aplicação Next.js é usando a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), dos criadores do Next.js.

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## Contribuição

Contribuições são bem-vindas! Por favor, siga as convenções de commit e as boas práticas de código.

## Licença

[MIT License](LICENSE) (Você pode criar um arquivo LICENSE na raiz do projeto com o conteúdo da licença MIT)
