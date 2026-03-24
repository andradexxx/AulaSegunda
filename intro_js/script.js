// 1 + 2 + 3 + ... + n
const calculoRapidinho = (n) => {
    return n > 0 ?
            Promise.resolve((n/2 )*(n+1))  :
            Promise.reject('Somente valores positivos!')
}
calculoRapidinho(-1000)
.then((res) => {
    console.log(`Resultado: ${res}`)
})
.catch(function(erro){
    console.log(`Erro: ${erro}`)
})

// function calculoDemorado(n){
//     const p = new Promise((resolve, reject) => {
//         if(n > 0){
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += i
//             resolve(ac)
//         }
//         else{
//             reject('Somente valores positivos, por favor')
//         }
//     })
//     return p
// }

// const minhaPromisse = calculoDemorado(1000)
// minhaPromisse.then((res) => {
//     console.log(`Resultado: ${res} pontos`)
// })
// .catch((erro) => {
//     console.log(`Erro: ${erro}`)
// })
// console.log("Fim do script...")

// function calculoDemorado(n){
//     let res = 0
//     for(let i = 1; i <= n; i++)
//         res += i
//     return res
// }
// const resultado = calculoDemorado(1000)
// console.log(resultado)
// console.log("Fim do script...")

// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     //callback
//     const exibirConteudo = (erro, conteudo) => {
//         console.log('C')
//         if(erro){
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(`Conteudo: ${conteudo.toString()}`)
//             const dobro = Number(conteudo.toString()) * 2
//             const finalizar = (erro) => {
//                 console.log('D')
//                 if(erro)
//                     console.log(`Erro: ${erro}`)
//                 else 
//                     console.log("Escreveu o dobro no arquivo!")

//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//             console.log('B')
//         }

//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log('A')
// }
// abrirArquivo("arquivo.txt")




// function demorada(tempo){
//     const dataAtualMaisTempo = new Date().getTime() + tempo
//     while (new Date().getTime()<= dataAtualMaisTempo);
//         const d = 8 + 4
//         return d
//     }
//     setTimeout(()=>{
//         demorada(1000)
//         console.log(`Demora : ${1000}`)
//     },1000)
    
//     console.log(`Demora`)
    
    
    
    
    // const calcauladora = {
    //     soma: function(a,b){
    //         return a + b;
    //     },
    //     subtrai: (a, b) => {
    //         return a - b;
    //     },
    //     multiplica: (a, b) => {
    //         return a * b;
    //     },
    //     divisao: (a, b) => {
    //         if( b == 0) return "Erro, não foi possivel dividir por 0";
    //         return a / b;
    //     }
    // }
    // console.log(calcauladora.soma(10, 5));
    // console.log(calcauladora.subtrai(10, 5));
    // console.log(calcauladora.multiplica(10, 5));
    // console.log(calcauladora.divisao(10, 5));
    
    // const conce = {
    //     cnpj: '51.017.713/0001-07',
    //     nome: 'Tcar',
    //     endereco: {
    //         logradouro: 'Rua A',
    //         numero: 12
    //     },
    //     estoque: [
    //         {
    //             marca: "BMW",
    //             modelo: "320I"
    //         },
    //         {
    //             marca: "BMW",
    //             modelo: "M3"
    //         },
    //         {
    //             marca: "BMW",
    //             modelo: "M2"
    //         },
    //         {
    //             marca: "BMW",
    //             modelo: "M4"
    //         }
    //     ]
    // }
    
    // for(let veiculo of conce.estoque){
    //     console.log(`
    //         marca: ${veiculo.marca}, modelo: ${veiculo.modelo}
    //         `)
    // }
    // console.log(conce.estoque)
    
    // const conce = {
    //     cnpj: '51.017.713/0001-07',
    //     nome: 'Tcar',
    //     endereco: {
    //         logradouro: 'Rua A',
    //         numero: 12
    //     },
    //     carro:{
    //         marca: 'BMW' ,
    //         modelo: 320
    //     }
        
    // }
    // console.log(conce.cnpj)
    // console.log(conce.nome)
    // console.log(conce.endereco)
    // console.log(conce.carro)
    
    
    
    
    // const pessoa = {
    //     nome:'Isabella',
    //     idade:21,
    //     endereco: {
    //         logradouro:'Rua B',
    //         numero:12
    
    //     }
    // }
    // console.log(pessoa.endereco.logradouro)
    // console.log(pessoa.nome['idade'])
    
    
    // const pessoa = {
    //     nome:'Isabella',
    //     idade:21,
    //     endereco: {
    //         logradouro:'Rua B',
    //         numero:12
    
    //     }
    // }
    // console.log(pessoa.nome)
    // console.log(pessoa['idade'])
    // console.log(pessoa.endereco)
    
    
    
    
    // const pessoa = {
    //     nome: 'Maria',
    //     idade: 21,
    //     logradouro: 'Rua B',
    //     numero: 12
    // }
    
    
    
    
    
    // const pessoa = {
    //     nome: "Isabella",
    //     idade: 17
    // }
    //  console.log(pessoa.nome)
    //  console.log(pessoa['idade'])
    
    // const dobrar = (n) => (2 * n)
    
    // console.log(dobrar(5))
    
    
    // const hello = nome => console.log('Hello ' + nome)
    // hello('Ana')
    
    
    // const hello = () => console.log("Hello")
    // hello()
    
    // const hello = (nome) => {console.log('Oi ' + nome)}
    // hello('Ana')
    
    // const hello = () => {console.log('Oi')}
    // hello()
    
    
    //
    
    
    
    
    // //funçoes
    //function e arrow function
    
    
    // const f1 = a=> 2 * a
    // const f2 = () => (2)
    // console.log(f1(2))
    
    
    // const somar = (a, b) => {return a + b}
    // console.log(somar(2, 3))
    // const hello = (nome) => {console.log('Oi, ' + nome)}
    // hello('Andrade')
    
    // const hello = () => {console.log('Oiiii, mano que bglh louco, ele vai atualizando conforme escrevo automaticamente')}
    // hello()
    
    //node --watch script.js <-- vai atualizando o terminal conforme vc escreve 
    
    // const triplo = function(n = 5){
    //     return n * 3
    // }
    // console.log(triplo())
    // console.log(triplo(6))
    
    // const dobro = function (n){
    //     return 2 * n
    // }
    // console.log(dobro(5))
    
    // function hello(){
    //     console.log('Oooooooi')
    // }
    // hello()
    // function hello(nome){
    //     console.log("Oi," + nome)
    // }
    // hello('Ana')
    
    // //vetores ou listas
    // v1 = []
    // console.log(v1.lenght)
    // v1[0]=2
    // console.log(v1.lenght)
    // v1[10]=25
    // console.log(v1.lenght)
    // console.log(v1)
    // for(let i = 0; i< v1.lenght; i = i +1){
    //     console.log(v1[i])
    // }
    //coerçao
    // const n1 = 2
    // const n2 = 3
    // const n3 = n1 + n2 //coerçao implicita
    // const n4 = n1 + Number(n2) //coerçao explicita
    // console.log(n3)
    // console.log(n4)
    // var idade = 18
    // console.log(`oi, ${nome}`)
    // if(idade >= 18){
    //     var nome = 'joao'
    //     console.log(nome + '. voce pode dirigir')
    // }
    // console.log('tchau, '+ nome)