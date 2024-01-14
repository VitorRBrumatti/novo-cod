


// calculadora normal
function calculadora() {
console.log("Seja Bem-vindo a Calculadora!");
let numberOne = +prompt("Insira o primeiro número obs: APENAS NÚMEROS!"), numberTwo = +prompt("Insira o segundo número obs: APENAS NÚMEROS!");
let soma = numberOne + numberTwo;
alert(` A soma entre ${numberOne} e ${numberTwo} é ${soma} `)
console.log(` A soma entre ${numberOne} e ${numberTwo} é ${soma} `);
}

// calculadora de idade
function calculadoraIdade() {
console.log("Agora vamos calcular sua idade");
let diaUsuario = +prompt("Insira o dia de seu nascimento");
let mesUsuario = +prompt("Insira o mês de seu nascimento");
let anoUsuario = +prompt("Insira o ano de seu nascimento");
let diaAgora = new Date().getDate();
let mesAgora = new Date().getMonth() +1 ;
let anoAgora = new Date().getFullYear();
if (mesAgora < mesUsuario) {
    alert(`sua idade é ${(anoAgora - anoUsuario) - 1} anos `);
    console.log(`sua idade é ${(anoAgora - anoUsuario) - 1} anos `);
} 
else if (mesAgora >= mesUsuario) {
    alert(`sua idade é ${anoAgora - anoUsuario} anos `);
    console.log(`sua idade é ${(anoAgora - anoUsuario)} anos `);
}
else if ( diaUsuario > diaAgora ) {
    alert(`sua idade é ${(anoAgora - anoUsuario) - 1} anos `);
    console.log(`sua idade é ${(anoAgora - anoUsuario) - 1} anos `);

}
else if (diaUsuario <= diaAgora){ 
    alert(`sua idade é ${anoAgora - anoUsuario} anos `);
    console.log(`sua idade é ${(anoAgora - anoUsuario)} anos `);
}
}