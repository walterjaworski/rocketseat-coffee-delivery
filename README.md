# Coffee Delivery
Desafio proposto pela Rocketseat para treinar fundamentos do `ReactJS`.

## Demo
https://wj-rocketseat-coffee-delivery.netlify.app/

## Para instalar o projeto
`yarn` ou `npm i`

## Para rodar o projeto
`yarn dev` ou `npm run dev`

## Para rodar a api fake
Necessário ter o json-server instalado em sua máquina. Dentro da pasta `src/api`, executar o comando `json-server --watch -d 180 --host 192.168.15.20 combinedData.json`

## Disclaimer
OBS: O projeto sofreu umas alterações para que possa funcionar diretamente no navegador, sem a necessidade do json-server. Caso opte por consultar a api fake via json-server, é necessário alterar o componente `CoffeeList` pois é nele que é chamado o json diretamente, sem ser uma consulta.