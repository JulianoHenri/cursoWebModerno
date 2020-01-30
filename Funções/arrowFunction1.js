let dobro = function(a){
    return 2 * a
}

dobro=(a) => {
    return a * 2 
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'Ola'
ola = _ => 'Ola'
console.log(ola())