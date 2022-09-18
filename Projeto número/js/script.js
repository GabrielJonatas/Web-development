let numero= prompt("Digite um número:"); // prompt sempre retorna uma string
numero = Number(numero); // para converter para número
const numeroTitulo = document.getElementById("numero-titulo"); // armazena em uma variável os valores para o id dado
const numeroTexto = document.getElementById("texto"); // armazena em uma variável os valores para o id dado
const raizQuad = numero**0.5; // operação matemática de potenciação

numeroTitulo.innerHTML = numero;
texto.innerHTML =  `<p>Raiz quadrada: ${raizQuad}</p> <br />`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p> <br />`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p> <br />`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p> <br />`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p> <br />`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>  <br />`;

