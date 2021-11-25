# REST API

__Projeto:__ WEB API em [Node.js](https://nodejs.org/en/) que retorna informações sobre usuários, utilizando os _verbos HTTP_ seguindo o padrão _REST_ e dando a liberdade de criar, ler, editar e excluir usuários.
  
Instalação:

Você vai precisar do *Nodejs* e do *git* para realizar a instalação em sua máquina. Em seguida, Rode os scripts abaixo:

```bash
# Clone o repositório
$ git clone https://github.com/abantes/rest-api.git

# Acesse a pasta do prjeto em seu cmd/terminal
$ cd rest-api

# Instale as dependências do projeto
$ npm install

# Rode o servidor em modo de desenvolvimento
$ npm run dev:api

# A porta da aplicação será mostrada em seu console
```

## Consumindo a API

Teste a API usando o script abaxo:

```js
async function getContent() {
  try {
    const response = await fetch('https://rest-api-rog.herokuapp.com/')
    const data = await response.json()
    
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getContent()
```




curl -X GET http://localhost:3333/

curl -d '{"name": "Cruz Ramirez", "username": "ramizersanches"}' -H "Content-type: application/json" -X POST http://localhost:3333/

curl -d '{"username": "ramirez"}' -H "Content-type: application/json" -X PUT http://localhost:3333/1

curl -X DELETE http://localhost:3333/1