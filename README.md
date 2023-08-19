# Portfolio em React.
O projeto é um portfolio feito em React com, usando Vite.
O layout foi baseado em um projeto ministrado por [Mayk Brito](https://github.com/maykbrito/) feito pela [Rocketseat](https://www.rocketseat.com.br/) durante a NLW 9 eSports na trilha Explorer, [link do projeto](https://github.com/maykbrito/nlw-esports-explorer).

## Tecnologias ultilizadas:
* [React](https://pt-br.reactjs.org/) - Biblioteca Javascript para construção de interfaces;
* [TypeScript](https://www.typescriptlang.org/docs) - Linguagem de programação mais avançada do mercado, que adiciona tipagem estática a linguagens como JavaScript e ajuda na manutenção da aplicação;
* [ViteJS](https://vitejs.dev/) - Ferramenta para desenvolvimento web moderna, rápida e produtiva;
* [Devicons](https://devicon.dev/) - Conjunto de ícones que representam linguagens de programação, design e ferramentas de desenvolvimento. 

## Como executar o projeto?
Você pode execultar o projeto em modo de desenvolvimento com o comando `npm run dev`. Será aberto um servidor local na porta `5173`, para visualizar a página, acesse o link `localhost:5173` no navegador do seu computador.

1. Clone o repositório para o seu computador;
2. Abra um terminal na pasta do projeto;
3. Execute `npm install`;
4. Depois execute `npm run dev`;
5. Abra `localhost:5173` no navegador.

## Como modificar o projeto?
Você pode pôr suas informações no projeto, para isso, modifique o arquivo `data.json` na pasta `src/assets/`, adotando o arquivo atual como modelo.

### Mudando as informações:

|Campo|Descrição|
|---|---|
|name|Seu nome|
|subName|Um nome que o descreva, ele fica abaixo do seu nome|
|imageURL|URL de uma imagem sua, pode ser a do perfil do Github|
|aboutMe|Uma descrição sobre você|
|links|Link de suas redes|
|links [label]|Coloque o nome da rede|
|links [url]|Coloque o link da rede|
|hability|Lista de tecnologias|
|hability [name]|Nome da tecnologia|
|hability [deviconClass]|[classe do ícone](https://devicon.dev/)|
|projects|Lista de projetos|
|projects [tilte]|Título do projeto|
|projects [description]|Descrição do projeto|
|projects [imageURL]|URL da imagem do projeto|
|projects [links]|Lista de links do projeto|
|projects [links][label]|Nome do link do projeto|
|projects [links][url]|URL do link do projeto|
|certificates|lista de certificados|
|certificates [description]|Descrição do certificado em 1 linha (máx. 2)|
|certificates [imageURL]|URL da imagem do certificado|