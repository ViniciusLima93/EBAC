// // console.log(typeof ("10" + 2))


// // console.log(typeof("10" * 2 ))


// // console.log('---------------')
// // console.log(typeof("10" / 3 ))
// // console.log(typeof("10" % 3 ))
// // console.log(typeof(10 + true ))
// // console.log(typeof(10 == "10" ))
// // console.log(typeof(10 === "10" ))
// // console.log(typeof(10 < 11 ))
// // console.log(typeof(10 > 12))
// // console.log(typeof(10 <= 10.1))
// // console.log(typeof(10 > 9.99))
// // console.log(typeof(10 != "dez"))
// // console.log(typeof(10 + true))
// console.log(typeof("dez" + true ))
// console.log(typeof(10 + false))
// console.log(typeof(10 * false))
// console.log(typeof(true + true))
// // console.log(typeof(10++)) invalid syntax
// // console.log(typeof(10--)) invalid syntax
// console.log(typeof(1&1))
// console.log(typeof(1&0))
// console.log(typeof(0&0))
// console.log(typeof(1&0))
// console.log(typeof(0/1))
// console.log(typeof(5 + 5 == 10))
// console.log(typeof("5" + "5" == 10))
// console.log(typeof("5" * 2 > 9))
// console.log(typeof((10 + 10) * 2))
// console.log(typeof(10 + 10 * 2 ))

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

var cavalo = carro == "preto" ? "cinza": "marrom"


console.log(branco == "branco")
console.log(branco == cinza)
console.log( carro == branco)
console.log(cavalo)

function numeroPretacao () {
    var Nprestacao = (valor - 3000) / prestacao
    return Nprestacao
}

console.log('o numero de pretação é', numeroPretacao())

function numString () {
    var numStr = branco + preto + cinza
    return numStr.length
}

console.log('O número de caracteres é', numString())