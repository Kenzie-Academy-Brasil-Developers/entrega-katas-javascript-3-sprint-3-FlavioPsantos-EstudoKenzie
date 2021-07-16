const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(valor, nomeExercicio) {
    const body = document.querySelector("body");
    const elemento = document.createElement("p")
    const elementoTitulo = document.createElement("h1")
    let texto = document.createTextNode("Valor: " + valor);
    let textoNome = document.createTextNode(nomeExercicio);

    elementoTitulo.appendChild(textoNome)
    elemento.appendChild(elementoTitulo)
    elemento.appendChild(texto);
    body.appendChild(elemento);
}

function kata1() {

    let outPut = []
    for (let i = 1; i <= 25; i++) {
        outPut.push(i)
    }
    return outPut;
}
showResults(kata1(), "kata1");

function kata2() {
    let outPut = []
    for (let i = 25; i >= 1; i--) {
        outPut.push(i)
    }
    return outPut
}
showResults(kata2(), "kata2");

function kata3() {
    let outPut = [];
    for (let i = -1; i >= -25; i--) {
        outPut.push(i)
    }
    return outPut;
}
showResults(kata3(), "kata3");

function kata4() {
    let outPut = []
    for (let i = 25 * -1; i <= -1; i++) {
        outPut.push(i)
    }
    return outPut
}
showResults(kata4(), "kata4");

function kata5() {
    let outPut = []
    for (let i = 25; i >= (25 * -1); i--) {
        if (i % 2 !== 0) {
            outPut.push(i)
        }
    }
    return outPut
}
showResults(kata5(), "kata5");


function kata6() {
    let outPut = []
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            outPut.push(i)
        }

    }
    return outPut
}
showResults(kata6(), "kata6");

function kata7() {
    let outPut = []
    for (let i = 0; i <= 100; i++) {
        if (i % 7 === 0) {
            outPut.push(i)
        }

    }
    return outPut
}
showResults(kata7(), "kata7");


function kata8() {
    let outPut = []
    for (let i = 100; i >= 3; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            outPut.push(i)
        }

    }
    return outPut
}
showResults(kata8(), "kata8");

function kata9() {
    let outPut = []
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 2 !== 0) {
            outPut.push(i)
        }

    }
    return outPut
}
showResults(kata9(), "kata9");


function kata10() {
    let outPut = []
    for (let i = 0; i <= 20; i++) {
        outPut.push(sampleArray[i])

    }
    return outPut
}
showResults(kata10(), "kata10");

function kata11() {
    let outPut = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            outPut.push(sampleArray[i])
        }

    }
    return outPut
}
showResults(kata11(), "kata11");


function kata12() {
    let outPut = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0) {
            outPut.push(sampleArray[i])
        }

    }
    return outPut
}
showResults(kata12(), "kata12");


function kata13() {
    let outPut = []
    for (let i = 0; i <= sampleArray.length; i++) {
        if (sampleArray[i] % 8 === 0) {
            outPut.push(sampleArray[i])
        }

    }
    return outPut
}
showResults(kata13(), "kata13");

function kata14() {
    let outPut = []
    for (let i = 0; i < sampleArray.length; i++) {
        let quadrado = sampleArray[i] * sampleArray[i];
        outPut.push(quadrado);
    }
    return outPut
}
showResults(kata14(), "kata14");

function kata15() {
    let i = 1;
    let result = 20 * (20 + 1) / 2
    return result;
}
showResults(kata15(), "kata15");

function kata16() {
    let soma = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        soma += sampleArray[i];
    }
    return soma;
}
showResults(kata16(), "kata16")

function kata17() {
    let atual = sampleArray[0]
    let menor = atual;
    for (let i = 0; i <= sampleArray.length; i++) {
        atual = sampleArray[i]
        if (atual <= menor) {
            menor = atual;
        }
    }
    return menor;
}
showResults(kata17(), "kata17");


function kata18() {
    let atual = sampleArray[0]
    let maior = atual;
    for (let i = 0; i <= sampleArray.length; i++) {
        atual = sampleArray[i]
        if (atual >= maior) {
            maior = atual;
        }
    }
    return maior;

}
showResults(kata18(), "kata18");


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    let texto = document.createTextNode("BONUS 1")
    h1.appendChild(texto)
    body.appendChild(h1)
    for (let i = 0; i < 20; i++) {
        const retangulo = document.createElement("div");
        retangulo.className = "retangulo";
        body.appendChild(retangulo);
    }


}

function kataBonus2() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h2");
    let texto = document.createTextNode("BONUS 2")
    h1.appendChild(texto)
    body.appendChild(h1)
    let largura = 100;
    for (let i = 0; i < 20; i++) {
        const retangulo = document.createElement("div");
        retangulo.className = "retaguloAcumulativo";
        retangulo.style.width = largura + 5 + "px"
        body.appendChild(retangulo);
        largura += 5;
    }

}

function kataBonus3() {

    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    let texto = document.createTextNode("BONUS 3")
    h1.appendChild(texto)
    body.appendChild(h1)
    for (let i = 0; i < 20; i++) {
        const retangulo = document.createElement("div");
        retangulo.className = "retaguloArray";
        retangulo.style.width = sampleArray[i] + "px"
        body.appendChild(retangulo);
    }
}

function kataBonus4() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    let texto = document.createTextNode("BONUS 4")
    h1.appendChild(texto)
    body.appendChild(h1)
    for (let i = 0; i < 20; i++) {
        const retangulo = document.createElement("div");
        if (i % 2 == 0) {
            retangulo.className = "retaguloArray";
            retangulo.style.width = sampleArray[i] + "px"
            retangulo.style.backgroundColor = "red";
        } else {
            retangulo.className = "retaguloArray";
            retangulo.style.width = sampleArray[i] + "px"
        }

        body.appendChild(retangulo);

    }
}

function kataBonus5() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    let texto = document.createTextNode("BONUS 5")
    h1.appendChild(texto)
    body.appendChild(h1)
    for (let i = 0; i < 20; i++) {
        const retangulo = document.createElement("div");
        if (sampleArray[i] % 2 == 0) {
            retangulo.className = "retaguloArray";
            retangulo.style.width = sampleArray[i] + "px"
            retangulo.style.backgroundColor = "red";
        } else {
            retangulo.className = "retaguloArray";
            retangulo.style.width = sampleArray[i] + "px"
        }

        body.appendChild(retangulo);

    }
}