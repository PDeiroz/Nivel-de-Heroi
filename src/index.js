function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lista de heróis com nomes únicos e experiências aleatórias
const herois = [
    { nome: "Vortex Guardian", xp: getRandomInt(500, 1500) },
    { nome: "Nebula Knight", xp: getRandomInt(1000, 3000) },
    { nome: "Photon Phoenix", xp: getRandomInt(2000, 5000) },
    { nome: "Thunderstrike Dynamo", xp: getRandomInt(6000, 8000) },
    { nome: "Quantum Quasar", xp: getRandomInt(9000, 12000) }
];

//  processar cada herói na lista
for (let i = 0; i < herois.length; i++) {
    let nomeDoHeroi = herois[i].nome;
    let xpDoHeroi = herois[i].xp;

    // determina o nível do herói
    let nivelDoHeroi;

    if (xpDoHeroi < 1000) {
        nivelDoHeroi = "Ferro";
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (xpDoHeroi >= 6001 && xpDoHeroi <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante";
    }

    // Exibir a mensagem com o nome e o nível do herói
    console.log(`O Herói ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
}