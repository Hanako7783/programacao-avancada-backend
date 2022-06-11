/*

console.log("hello,world")
//variavel
var x = 10
//formas mais convenientes de declarar variavéis


z = 10
const t = z+10
y = 20
 console.log(y)
 if(1){
    let y = 15
 console.log(y)
 }
 console.log(y)

 // tipos

 const nome = "victo"
 console.log(nome)
 console.log(typeof nome)
 const idade = 21
 console.log(idade)
 console.log(typeof nome)
 const peso = 72.3
 console.log(peso)
 console.log(typeof peso)

 // null
 const nada = null
 console.log(nada)
 console.log(typeof nada)

 // undefined
 const indefinido = null
 console.log(indefinido)
 console.log(typeof indefinido)

 // bool
 const vouf = ''
 console.log(vouf)
 console.log(typeof vouf)

 //array

 const vetor = ['Java',10,false]
 console.log(vetor[1])
 console.log(typeof vouf)

 console.log(vetor.legth)


S
 
// object literals
 const usuario = {
    email:'eu@email.com',
    senha:'teste123',
    nome:'Victor',
    idade: 31
 }

 console.log(typeof usuario)
 const nome = "Victor Vieira"

 console.log(nome.length)
 //const stringParaVetor = nome.split('')
 //console.log(splitParaVetor)
 console.log(nome.toUpperCase())
 console.log(nome.toLowerCase())
 const nomeMaiusculo = nome.toUpperCase()
 console.log(nomeMaiusculo)
 console.log(nomeMaiusculo[0])
 console.log(nomeMaiusculo[nomeMaiusculo.length-1])
 console.log(nomeMaiusculo.slice(2,-1))
 console.log(nomeMaiusculo.slice(0,6))

 // arrays, vetores, listas


 const lista = ['a',"b","c","d",'e']
 console.log(lista.length)
 console.log(lista[2])
 console.log(typeof lista)
 lista[5] = 'f'
 console.log(lista[5])
 lista[0]='x' //  vetoris numerados de 0 a 5
 console.log(lista)
 lista.push('g')
 console.log(lista)
 lista.pop()
 console.log(lista)
 lista.shift()
 lista.shift()
 lista.shift()
 console.log(lista)
lista.unshift('h')
console.log(lista)



//object literais - estruturas que descrevem entidade

const produto ={
   nome:'camisa',
   preco:9.99,
   emEstoque: true,
   size:['P','M','G'],
   'Cor': 'azul'
}
produto.nome
produto['nome']
console.log(produto['preco'])

// destructuring - recurso para objetos
const {preco,emEstoque} = produto
console.log(preco)
console.log(emEstoque)

const [char1,char2] = lista
console.log(char1)
console.log(char2)


//json -javaScrip objeto notation
const douguinho ={
   nome: 'Scooby',
   idade:10
}

const json = JSON.stringify(douguinho)
console.log(json)
const json2 = JSON.parse(json)
console.log(json2)
const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10,}')
console.log(jsonErrado)

*/










// funções
/*
function minhaFuncao(){
   console.log('Estou dentro da minha função')

}

minhaFuncao()


function minhaFuncao(nome, sobrenome){
   console.log('O nome completo é ${nome} ${sobrenome}.') //<- n fiz as aspas igual o original
   console.log(typeof nome)
   return('${nome} ${sobrenome}')

}

minhaFuncao('Victor','Vieira')
minhaFuncao(10,20)


// arrow 

const soma = (a,b) => a + b
console.log(soma(5,3))

const lista = ['esse cara é maior','b','c','d']

console.log(lista.map(elemento => elemento.length))
*/

// fechamentos

/*
let x = 10
function fora(){
   function somarXMais5(){
      return x+5
   }
   return somarXMais5()
}
console.log(fora())

const soma = (x,b) => x + b
console.log(soma(x,5))
*/
/*

let x = 10
const fora = () => (() => x+5) ()
console.log(fora())
console.log(typeof fora())
*/
/*
const fora =() => ((x=7),()=>x+5) ()
console.log(fora())


// Orientação a objeto


class Produto {
   constructor (nome, preco){
      this.nome = nome
      this.preco = preco
   } 
   detalhesDoProduto(){
      console.log('O preco do produto' + this.preco,' é' + this.nome) //<- n fiz 
   }
}

const camisa = new Produto('camisa',19.90)
console.log(camisa.nome)



console.log('O preco do produto' + Produto.preco + ' é' + this.nome)



// herança



class ProdutoComTamanho extends Produto{
   constructor(nome, preco, tamanho) {
      supernome, preco
      this.tamanho = tamanho
   }
   outraMensagem(adjetivo){
      return 'produto ${this.nome} é ${adjetivo} demais.'
   }
}

const camisa = new ProdutoComTamanho('camisa','6.55','M')

console.log(camisa.detalhesDoProduto())
console.log(camisa.outraMensagem('boa'))
*/

//Dom - Document object Model


const titulo = document.getElementById('titulo')
console.log(titulo)





// qurry selector
const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)
const todosOsparagrafos = document.querySelectorAll('.texto')
console.log(todosOsparagrafos)

todosOsparagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))



//manipulação
const textoAlterado = todosOsparagrafos[0].textContent
console.log(textoAlterado)

todosOsparagrafos[4].innerHTML = textoAlterado


todosOsparagrafos[2].style.backgroundColor ='red'


todosOsparagrafos[3].classList.add('outra-classe')

todosOsparagrafos[3].classList.remove('outra-classe')

titulo.remove()
todosOsparagrafos[0].remove()


// eventos
const botao = document.getElementById('botao')
botao.addEventListener('click',function(){
   console.log('clickvarias')// botão que manda mensagem no console
   todosOsparagrafos[3].style.backgroundColor = 'blue'
})