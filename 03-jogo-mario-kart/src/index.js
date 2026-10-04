const player1 = {
    NOME:"Mario",
    VELOCIDADE:4,
    MANOBRABILIDADE:3,
    PODER:3,
    PONTOS:0,
};

const player2 = {
    NOME:"Luigi",
    VELOCIDADE:3,
    MANOBRABILIDADE:4,
    PODER:3,
    PONTOS:0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = "Reta";
            break;
        case random < 0.66:
            result = "Curva";
            break;
        default:
            result = "Confronto";
            break;    
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEgnine(character1, character2) {
    for(let round = 1; round<=5; round++) {
        console.log(`🏁Rodada ${round}`);

        //Sortear bloco:
        let block = await getRandomBlock(); 
        console.log(`Bloco sorteado: ${block}`);
        
        // rolar os dados:
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTesteSkill1 = 0;
        let totalTesteSkill2 = 0;

        if (block === "Reta") {
            totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "Velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "Velocidade", diceResult2, character2.VELOCIDADE);
        }
        if (block === "Curva") {
            totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, "Manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "Manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if (block === "Confronto") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;
            console.log(`${character1.NOME} confrontou com ${character2.NOME} 🥊`)
            await logRollResult(character1.NOME, "Poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "Poder", diceResult2, character2.PODER);

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character2.NOME} perdeu 1 ponto! 🐢`);
                character2.PONTOS--;
            }
            if (powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character1.NOME} perdeu 1 ponto! 🐢`);
                character1.PONTOS--;
            }
            

            console.log(powerResult1 === powerResult2 ? `🤝 O confronto terminou empatado!` : "");
            

        }
        //  verificando o vencedor
        if (totalTesteSkill1 > totalTesteSkill2) {
            console.log(`🏆${character1.NOME} venceu a rodada!`);
            character1.PONTOS++;
        }
        else if (totalTesteSkill2 > totalTesteSkill1) {
            console.log(`🏆${character2.NOME} venceu a rodada!`);
            character2.PONTOS++;
        }
    

        console.log("-------------------------------\n");

    }
};

async function declareWinner(character1, character2) {
    console.log(`🏁Resultado final!\n`);
    console.log(`${character1.NOME} pontuou ${character1.PONTOS} pontos!`);
    console.log(`${character2.NOME} pontuou ${character2.PONTOS} pontos!`);

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`🏆${character1.NOME} venceu a corrida!`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`🏆${character2.NOME} venceu a corrida!`);
    } else {
        console.log(`🤝 A corrida terminou empatada!`);
    }
}

(async function main() {
    console.log(
        `🏁Corrida entre ${player1.NOME} e ${player2.NOME} começando!\n`
    );

    await playRaceEgnine(player1, player2);
    await declareWinner(player1, player2);
})();
