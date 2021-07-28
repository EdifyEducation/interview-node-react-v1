# Tarefas - Edify Education

Você pode executar as tarefas na ordem que achar melhor.

- Definir as variáveis de ambiente para os 2 projetos. (Inicial)

```
front-end/.env.example
back-end/.env.example
```

- Rodar o projeto dockerizado. (Inicial)

```
docker-compose -f _docker/docker-compose.yml -p edify up --build
```

- Back: Adicionar novas rotas. (Inicial)

```
"/books" - create
"/orders" - index
"/orders" - create
"/slack" - create
```

- Back: Adicionar outros 3 livros pelo gerenciador PHPMyAdmin. (Inicial)

```
Acessar http://localhost:81
```

- Back: Adicionar outros 3 livros usando migrations. (Mediano)

```
$ node ace make:migration NewBooks
Os assets estão na pasta "front-end/public/"
```

- Front: Refazer o footer, criando um novo componente, removendo a imagem e criaando os elementos necessários. (Inicial)

```
front-end/components/Layout/Layout.tsx
```

- Front: Exibir os livros na página inicial obtidos através da rota "books" da API. (Inicial)

```
front-end/pages/index.tsx
```

- Front: Armazenar no "redux" os dados dos livros. (Mediano)

```
front-end/common/DuckBooks.ts
```

- Front: Criar um slider com os livros consumidos anteriormente. (Mediano)

```
front-end/pages/index.tsx
```

- Back: Criar pedido de venda no banco de dados com os dados que o front deve enviar. (Avançado)

```
back-end/app/Controllers/Http/OrdersController.ts
```

- Front: Exibir os livros na página "store" obtidos através da rota "books" da API. (Mediano)

```
front-end/pages/store.tsx
```

- Front: Enviar para o Back o pedido das vendas da página "store". (Mediano)

```
front-end/pages/store.tsx
```

- Back: Enviar notificação por Slack após um pedido ser concluído com sucesso. (Mediano)

```
back-end/app/Helpers/Slack.ts
```

- Back: A´pos o pedido ser feito com sucesso, redirecionar para a página de sucesso. (Inicial)

```
front-end/pages/success.tsx
```

- Front: Impedir o acesso a tela "success" sem que tenha sido feito algum pedido. (Mediano)

```
front-end/pages/success.tsx
```

- Front: Exibir dinamicamente o valor total enquanto vai adicionando os livros. (Mediano)

```
front-end/pages/store.tsx
```

- Front: Armazenar no "redux" os dados do pedido e os exibir na tela de sucesso. (Avançado)

```
Criar todo o conceito
```
