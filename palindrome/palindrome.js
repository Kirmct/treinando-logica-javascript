//metodo 1
function verificapalindromo(string) {
    if (!string) return "Declare um valor";

    return string.split("").reverse().join("") === string;

}

//metodo 2
function verificapalindromo2(string) {
    if (!string) return "Declare um valor";
    let check = false;
    for (i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string.lenght - 1 - i) {
            return false;
        }
    }
    return true;
}

console.log(verificapalindromo2("ana"));
