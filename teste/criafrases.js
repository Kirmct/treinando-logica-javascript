function confere(num1, num2) {
    let iguais = "";
    let compara10 = "";
    let compara20 = "";
    var soma = num1 + num2;
    if (num1 != num2) {
        iguais = "não";
    }

    (soma > 10) ? compara10 = "maior" : compara10 = "menor";
    (soma > 20) ? compara20 = "maior" : compara20 = "menor";

    return `Os números ${num1} e ${num2} ${iguais} são iguais, sua soma é ${soma} que é ${compara10} que 10 e ${compara20} que 20.`;
}
console.log(confere(1, 20));