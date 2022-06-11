/*const lista = ['l',"o","g","i",'c','a']

const lista2 = ['1',"2","3","4",'5','6']
console.log(lista2)




const [letral,letrao,letrag,letrai,letrac,letraa,] = lista
console.log(letral)
console.log(letrao)
console.log(letrag)

console.log(letrai)
console.log(letrac)
console.log(letraa)


const lista3 ={
n1:letral,
n2:letrao,
n3:letrag,
n4:letrai,
n5:letrac,
n6:letraa,



}

const json = JSON.stringify(lista3)

const json2 = JSON.parse(json)

console.log(json2)


const [n1,n2,n3,n4,n5,n6,] = lista2
console.log(n1)
console.log(n2)
console.log(n3)

console.log(n4)
console.log(n5)
console.log(n6)

const lista5 ={
    n1:n1,
    n2:n2,
    n3:n3,
    n4:n4,
    n5:n5,
    n6:n6,
}

const json7 = JSON.stringify(lista5)

const json8 = JSON.parse(json7)

console.log(json8)

console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2)
console.log(n1/n2)
const n10 = 10, n20 = 5
const calculadora ={
    soma:n10+n20,
    subtração:n10-n20,
    mult:n10*n20,
    div:n10/n20,
}
const jsonCalc= JSON.stringify(calculadora)
console.log(jsonCalc)
*/
// estrutura
 const n =1
 if (n>10){
    if(n>5)//<>=!===
    console.log('Teste de entrada no if.')
 }
 const texto ="0"
 if(texto =='0')
    console.log("OS dadods são iguais")
    else if (true)
    console.log('segundo if - if animado')
    else
    console.log('Saida...')
    // operador tornario


    const resultado = n<20? true: false


    console.log(resultado    )
    console.log(typeof resultado)

    // repetição
    let contador =1
    const lista= [1,2,3,4,5,6,7,8]
    while(contador<lista.length){
        console.log('O elemento da vez é'+lista[contador]+'.')

        contador++

    }
    const outralista =['a','b','d','e','c']
    for(let contador=0;contador<outralista.length;contador++)
    console.log(' o elemento da vez é ${outralista[contador]}.')


    // templaite literaiso ou template Sting

    // templeite literais,ou string literais

    const testeliteral = ('\''==="'")
    console.log('Oito é+$(a+b) \ne não+(2*a+b)')


    const nomes= ['Abimael','cleyciane','paulo','victor']
    console.log(nomes.forEach(function(nome){

        console.log(nome)

    }))

    const numerosGrandes = ['7','8','77','83','7783']. filter(function(numero){
        return (numero>77)
    })
    numerosGrandes.forEach(function(numero){
        console.log(numero)
    })