# Teste Magazord

Esse projeto foi desenvolvido de acordo com o teste proposto para vaga front-end na empresa Magazord.

## Estrutura

Desenvolvido com Vite, Reactjs, Typescript, utilizando Tailwindcss para estilização e React-query para requisições e cache

## Proposta

O projeto realiza uma pesquisa de repositórios do GitHub, onde o usuário digita o login que deseja pesquisar e é retornado os repositórios públicos em uma aba e os repositórios marcados como "Starred" em outra aba.
É possível filtrar os repositórios pelo nome, onde é buscado a partir do momento em que o usuário começa a digitar o nome, assim mesmo que tenha apenas uma letra ele vai buscar os repositórios que tenham aquela letra no nome, também é possível filtrar pela linguagem utilizada no repositório. Para os repositírios públicos é possível realizar esses filtros diretamente na rota do Github API, já para os repositórios Starred não existe essa opção, então realizei esse filtro na mesma função que busca todos esses repositórios sendo possível filtrar como acontece com os demais.

## Observações

No Figma proposto tembém tem um filtro para os tipos de repositórios, mas esse filtro não foi possível encontrar no Github API e também não foi possível realizar no front porque essa informação não vem nos demais endpoints.
Para não atingir o limite de requisições do Github API foi necessário gerar um token de desenvolvedor no pŕoprio github, assim é possível realizar mais requisições.

## Como executar

### clonar repositório

git clone git@github.com:Paulo-cds/magazordTest.git

### entrar na pasta do projeto

cd magazordTest

### instalar dependencias

npm i ou yarn

### executar o projeto

npm run dev ou yarn dev

o projeto será executado no http://localhost:5173/

## Deploy

O projeto está rodando no vercel nesse link [magazord-test](https://magazord-test-six.vercel.app/)

