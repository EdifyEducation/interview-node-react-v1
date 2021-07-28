# README

## Rodar o servidor front

npm run dev

Abra [http://localhost:8000](http://localhost:8000) no browser.

## Build Static Files (Html, CSS, Json e etc...)

```
- Instalar o servidor http-server global, ou usar algum apache, ou qualquer alternativa que você achar boa
$ npm install http-server -g

Dentro da pasta local:

- Build do projeto de forma estática:
$ npm run build

- Export do projeto de forma estática:
$ npm run export

- Executar o server na porta 80 com "cors" liberado:
$ http-server ./out -p 80 --cors
```
