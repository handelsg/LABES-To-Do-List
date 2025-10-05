# 📋 LABES To-Do List

Uma aplicação de lista de tarefas (to-do list) completa e moderna desenvolvida em React com TypeScript, utilizando componentização e boas práticas.

## ✨ Funcionalidades

- ✅ **Adicionar tarefas** - Crie novas tarefas rapidamente
- ✏️ **Editar tarefas** - Modifique o texto de tarefas existentes
- ✔️ **Marcar como concluída** - Acompanhe o progresso das suas tarefas
- 🗑️ **Deletar tarefas** - Remova tarefas que não são mais necessárias
- 🔍 **Filtros** - Visualize todas, apenas ativas ou apenas concluídas
- 📊 **Estatísticas** - Veja o total, pendentes, concluídas e progresso
- 💾 **Persistência** - Dados salvos no LocalStorage
- 📱 **Responsivo** - Interface adaptável para diferentes tamanhos de tela
- 🎨 **Design moderno** - Interface limpa e intuitiva

## 🏗️ Arquitetura

O projeto foi construído usando componentização, com separação clara de responsabilidades:

```
app/
├── components/
│   ├── TodoApp.tsx       # Componente principal (gerencia estado)
│   ├── TodoForm.tsx      # Formulário para adicionar tarefas
│   ├── TodoList.tsx      # Lista de tarefas
│   ├── TodoItem.tsx      # Item individual da lista
│   ├── TodoStats.tsx     # Estatísticas das tarefas
│   └── TodoFilter.tsx    # Filtros de visualização
├── types/
│   └── todo.ts           # Definição de tipos TypeScript
└── routes/
    └── home.tsx          # Rota principal
```

## 🧩 Componentes

### TodoApp (Componente Principal)
- Gerencia o estado global da aplicação
- Controla a lista de tarefas
- Implementa localStorage para persistência
- Coordena a comunicação entre componentes filhos

### TodoForm
- Formulário controlado para adicionar novas tarefas
- Validação de entrada (não permite tarefas vazias)
- Limpa o campo após adicionar

### TodoList
- Renderiza a lista de tarefas
- Exibe estado vazio quando não há tarefas
- Passa callbacks para os itens

### TodoItem
- Representa cada tarefa individualmente
- Modo de edição inline
- Checkbox para marcar como concluída
- Botões de editar e deletar
- Exibe data de criação

### TodoStats
- Calcula e exibe estatísticas em tempo real
- Total de tarefas
- Tarefas pendentes
- Tarefas concluídas
- Percentual de progresso

### TodoFilter
- Permite filtrar tarefas por status
- Três filtros: Todas, Ativas, Concluídas
- Destaca o filtro ativo

## 🚀 Como Executar

1. **Instalar dependências**:
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento**:
```bash
npm run dev
```

3. **Abrir no navegador**:
```
http://localhost:5173
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Router 7** - Gerenciamento de rotas
- **Vite** - Build tool e servidor de desenvolvimento rápido
- **CSS3** - Estilização moderna com gradientes e animações

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run typecheck` - Verifica tipos TypeScript

## 💡 Características Técnicas

- **Hooks do React**: useState, useEffect
- **TypeScript Strict Mode**: Tipagem completa e segura
- **Props Interface**: Todas as props são tipadas
- **Controlled Components**: Formulários controlados
- **Imutabilidade**: Estado manipulado de forma imutável
- **Local Storage API**: Persistência de dados no navegador
- **Crypto API**: Geração de IDs únicos (UUID)
- **Responsive Design**: Layout adaptável com media queries

## 🎨 Design

- Gradientes modernos (roxo/azul)
- Animações suaves em hover e cliques
- Bordas arredondadas
- Sombras para profundidade
- Feedback visual em todas as interações
- Esquema de cores consistente

## 📝 Tipos de Dados

```typescript
interface Todo {
  id: string;          // UUID único
  text: string;        // Texto da tarefa
  completed: boolean;  // Status de conclusão
  createdAt: string;   // Data de criação (ISO)
}
```

## 🔄 Fluxo de Dados

1. **Componente pai (TodoApp)** mantém o estado
2. **Props** são passadas para componentes filhos
3. **Callbacks** são chamados pelos filhos para modificar o estado
4. **Estado atualizado** trigger re-renderização
5. **LocalStorage** é atualizado automaticamente

## 🌟 Melhorias Futuras Possíveis

- [ ] Adicionar categorias/tags
- [ ] Implementar prioridades
- [ ] Adicionar datas de vencimento
- [ ] Drag and drop para reordenar
- [ ] Modo escuro
- [ ] Busca/pesquisa de tarefas
- [ ] Exportar/importar tarefas
- [ ] Integração com backend/API

## 👨‍💻 Desenvolvido por

LABES - Laboratório de Engenharia de Software

---

**Desenvolvido com ❤️ usando React e TypeScript**
