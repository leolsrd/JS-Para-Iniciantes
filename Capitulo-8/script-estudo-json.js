// * String Json
let stringJson = '{ "nome": "João", "idade": 30, "cidade": "Rio de Janeiro" }';
// * Convertendo a string em um objeto JavaScript
let StringObjJavaScript = JSON.parse(stringJson);
console.log(StringObjJavaScript.nome);

// * Objeto JavaScript
let objJavaScript = { nome: "João", idade: 30, cidade: "Rio de Janeiro" };
// * Converter um objeto JavaScript para um Json
let objJavaScriptJson = JSON.stringify(objJavaScript);
console.log(objJavaScriptJson);
