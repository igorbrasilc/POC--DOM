const byIDp1 = document.getElementById('paragrafo1');
const byIDp2 = document.getElementById('paragrafo2');
const byClassName = document.getElementsByClassName('paragrafo');
const byTag = document.getElementsByTagName('p');
const query = document.querySelector('p');
const queryAll = document.querySelectorAll('p');

console.log("ID:" + byIDp1, "class:" + byClassName, "tag:" + byTag, "query:" + query, "queryAll:" + queryAll);
console.log(queryAll);
console.log(byClassName);

// Convertendo:

const byClassNameArray = Array.prototype.slice.call(byClassName);
const queryAllArray = [].slice.call(queryAll);
// ou [...]
// ou Array.from()

console.log(byClassNameArray);
console.log(queryAllArray);

const textoInsercao = document.createElement("p");
textoInsercao.innerText = "Texto Inserção JS";
byIDp1.appendChild(textoInsercao);

const botaoInsersacao = document.createElement("button");
botaoInsersacao.innerText = "Botao Insersação JS";
botaoInsersacao.style = ` 
    color: green;
    font-size: 22px;
    padding: 10px;
    margin-top: 2em;
`;
byIDp2.appendChild(botaoInsersacao);