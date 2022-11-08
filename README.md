# Find_HashTag

Esse projeto foi desenvolvido para fazer a busca de uma determinada hashtag fazendo a integração com a api do twitter, Baixe o front-end em Reactjs através desse link: https://github.com/joaopedrolacerda/fron-end_findHashtag

# Passos

- Clone no github
- Intalação do projeto
- Adicionando api-keys
- Build da aplicação

# Clone no github

```
git clone https://github.com/joaopedrolacerda/Back-end_FindHashtag.git
```

# Instalação do projeto

```
yarn install
```

você pode fazer o Build tanto em versão de desenvolvimento quanto em versão de teste

# Adicionando api-keys

- As chaves podem ser encontradas no seguinte site: https://developer.twitter.com/en

**Para que você possa utilizar essa api, é indispensável que você adicione suas chaves de api do twitter**

- As chaves de api são variaveis de ambiente, que você poderá encontrar dentro de `./src/config/keys`

fazendo esse caminho, você irá encontrar algo como isso

```
export default {
  keys: {
    CONSUMER_KEY: 'XXXXXXXXXXXXXXX',
    CONSUMER_SECRET: 'XXXXXXXXXXXX',
    ACCESS_TOKEN: 'XXXXXXXXXXXXXXXX',
    ACCESS_TOKEN_SECRET: 'XXXXXXXXXXXXX',
  },
};
```

## Build

```
yarn build
```

- Depois do **yarn build** rode o seguinte comando para iniciar o servidor

```
yarn start
```

## Dev

- Também tem a opção de rodar o servidor em modo desenvolvimento

```
yarn dev:server
```
