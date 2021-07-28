# Processo Seletivo - Edify Education

Oi candidato, tudo bem?

Como conversamos, estamos te enviando o desafio e você tem 2 horas para concluir ele.

A ideia é trabalhar com uma tecnologia familiar a você, no caso, Node, React, JSS, Typescript e etc. Nosso maior objetivo nesse momento é nos conhecermos melhor e te ajudar a aprender as tecnologias que estão tendo destaque no mercado de TI.

Pedimos que você execute um "fork" do repositório que já te passamos.

Para subir o ambiente, basta entrar na raiz e digitar o comando:

```
docker-compose -f _docker/docker-compose.yml -p edify up --build
```

Após algum tempo (cerca de 5 minutos), vai aparecer a ultima mensagem indicando que está pronto:

```
--------- START UI SERVER FOR DEVELOPMENT
```

Pode acessar: http://localhost

Ele vai subir 4 containers:

- Back-End (Node com AdonisJs)
- Front-End (React com NextJs)
- Banco de dados (MariaDB)
- PHPMyAdmin (Gerenciador visual do banco)

O desafio vai ser preencher as lacunas que deixamos nesse exemplo. Os detalhes das tarefas estão no arquivo "TAREFAS.md".
O intuito é que seja um site simples, basicamente uma landing page com a descrição dos livros, um formulário para o cliente fazer a reserva do(s) seu(s) livros e uma página de sucesso. Quando o pedido for feito, uma mensagem deve ser disparada para nosso canal no Slack com os dados preenchidos. Fique a vontade para mudar os textos e layout.

Uma opção que pode facilitar sua vida é desenvolver com a IDE VSCode.

Para desenvolver, é preciso utilizar as seguintes tecnologias:

- Node com Typescript
- React com NextJs
- CSS-in-JSS
- AdonisJs

Por último, faça o commit e push das suas alterações, vamos verificar o funcionamento e o seu código. Para isso pedimos que deixe esse repositório como público.

Vale lembrar que a ideia do desafio não é você simplesmente entregar tudo, é ver como funciona o seu processo de trabalho e como você interage com a gente!

Aproveite para tirar dúvidas com nossa equipe! Sabemos que as informações que passamos sobre o site a ser criado são insuficientes, não se acanhe para pedir mais informações pelo Slack.

Estamos empolgados!

Abraços,
Edify Education.
