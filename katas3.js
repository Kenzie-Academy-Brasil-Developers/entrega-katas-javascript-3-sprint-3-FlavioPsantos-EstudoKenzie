const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const arrayResult = [];

function showResults(valor) {
    const body = document.querySelector("body");
    const elemento = document.createElement("p")
    let texto = document.createTextNode("Valor: " + valor);
    elemento.appendChild(texto);
    body.appendChild(elemento);
}
// Exibir os números de 1 a 25: _(1, 2, 3, …, 24, 25)_
function kata1(n) {
    for (let i = 0; i <= n; i++) {
        arrayResult.push(i)
    }
    return showResults(arrayResult);
}
// Exibir os números de 25 a 1: _(25, 24, 23, …, 2, 1)_
function kata2(n) {
    for (let i = n; i >= 1; i--) {
        arrayResult.push(i)
    }
    return showResults(arrayResult);
}

// Exibir os números de -1 a -25: _(-1, -2, -3, …, -24, -25)_
function kata3(n) {
    for (let i = -1; i >= n; i--) {
        arrayResult.push(i)
    }
    return showResults(arrayResult);
}
// Exibir os números de -25 a -1: _(-25, -24, -23, …, -2, -1)_
function kata4(n) {
    for (let i = n * -1; i <= -1; i++) {
        arrayResult.push(i)
    }
    return showResults(arrayResult);
}
// Exibir os números ímpares de 25 a -25: _(25, 23, 21, …, -23, -25)_
function kata5(n) {

    for (let i = n; i >= (n * -1); i--) {
        if (i % 2 !== 0) {
            arrayResult.push(i)
        }
    }
    return showResults(arrayResult);
}

// exibir os números divisíveis por 3 até o 100: _(3, 6, 9, …, 96, 99)_
function kata6(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            arrayResult.push(i)
        }

    }
    return showResults(arrayResult);
}
//Exibir os números divisíveis por 7 até o 100: _(7, 14, 21, …, 91, 98)_
function kata7(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 7 === 0) {
            arrayResult.push(i)
        }

    }
    return showResults(arrayResult);
}
//Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: _(99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)_
function kata8(n) {
    for (let i = n; i >= 3; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            arrayResult.push(i)
        }

    }
    return showResults(arrayResult);
}
//Exibir os números ímpares divisíveis por 5 até o 100: _(5, 15, 25, …, 85, 95)_
function kata9(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            arrayResult.push(i)
        }

    }
    return showResults(arrayResult);
}
//Exibir os 20 elementos de sampleArray. _(469, 755, 244, …, 940, 472)_
function kata10(n) {
    for (let i = 0; i <= sampleArray.length; i++) {
        arrayResult.push(sampleArray[i])

    }
    return showResults(arrayResult);
}

function kata11() {
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            arrayResult.push(sampleArray[i])
        }

    }
    return showResults(arrayResult);
}

function kata12() {
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            arrayResult.push(sampleArray[i])
        }

    }
    return showResults(arrayResult);
}

function kata13() {
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            arrayResult.push(sampleArray[i])
        }

    }
    return showResults(arrayResult);
}

function kata14() {
    for (let i = 0; i <= sampleArray.length; i++) {
        let quadrado = sampleArray[i] * sampleArray[i];
        arrayResult.push(quadrado);
    }
    return showResults(arrayResult);
}

function kata15(n) {
    let i = 1;
    let result = n * (n + 1) / 2
    return showResults(result);
}

function kata16() {
    let soma = 0;
    for (let i = 0; i <= sampleArray.length; i++) {
        soma += sampleArray[i];

    }
    return showResults(soma);


}

function kata17() {
    let atual = sampleArray[0]
    let menor = atual;
    for (let i = 0; i <= sampleArray.length; i++) {
        atual = sampleArray[i]
        if (atual <= menor) {
            menor = atual;
        }
    }
    return showResults(menor);


}

function kata18() {
    let atual = sampleArray[0]
    let maior = atual;
    for (let i = 0; i <= sampleArray.length; i++) {
        atual = sampleArray[i]
        if (atual >= maior) {
            maior = atual;
        }
    }
    return showResults(maior);

}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1(l, c) {
    const body = document.querySelector("body");
    const elementoTable = document.createElement("table");
    elementoTable.className = "tabela";
    body.appendChild(elementoTable);
    if (l > 0 && c > 0) {
        for (let i = 0; i < l; i++) {
            const linha = document.createElement("tr");
            elementoTable.appendChild(linha);
            for (let j = 0; j < c; j++) {
                const coluna = document.createElement("td");
                linha.appendChild(coluna);
            }
        }
    } else {
        alert("Número inválido")
    }



}

function kataBonus2(l, c) {
    const body = document.querySelector("body");
    const elementoTable = document.createElement("table");
    elementoTable.className = "tabela";
    body.appendChild(elementoTable);
    if (l > 0 && c > 0) {
        for (let i = 0; i < l; i++) {
            if (i % 2 == 0) {
                const linha = document.createElement("tr");
                linha.className = "RecebeModificacao"
                elementoTable.appendChild(linha);
            } else {
                const linha = document.createElement("tr");
                linha.className = "NaoRecebeModificacao"
                elementoTable.appendChild(linha);
            }
            for (let j = 0; j < c; j++) {
                const coluna = document.createElement("td");
                linha.appendChild(coluna);
            }
        }
    } else {
        alert("Número inválido")
    }

}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}