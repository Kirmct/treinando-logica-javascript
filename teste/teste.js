// // VARIÁVEIS 
// const PRECO = 2; //constate nao muda, maisculo por boa pratica
// var desconto = 0.2;
// var total = PRECO - desconto;

// // FUNÇÕES

// function soma(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// soma(3 + 5);

// console.log("Hello World!");

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log("Os número pares são: ", evenNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);