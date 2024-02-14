let acumula, resist = []
for (n = 0; resist[n - 1] != 0; n++) {
    resist.push(parseInt(prompt("Digite o valor ou 0 para sair : ")))
}
resist.pop()
for (let i = 0; i < resist.length - 1; i++) {
    if (i == 0) {
        acumula = ((resist[i] * resist[i + 1]) / (resist[i] + resist[i + 1]))
    } else {
        acumula = ((acumula[i] * resist[i + 1]) / (acumula[i] + resist[i + 1]))
    }
}
alert(`O valor da resistência equivalente é: ${resist} = ${acumula.toFixed(1)} Ω `)
