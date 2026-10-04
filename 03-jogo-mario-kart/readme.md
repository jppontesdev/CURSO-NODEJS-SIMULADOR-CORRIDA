# Jogo Mario Kart

Um joguinho simples de terminal feito em Node.js que simula uma corrida entre **Mario** e **Luigi** usando dados e atributos de cada personagem.

Esse projeto é uma entrega do primeiro desafio do curso NodeJS Fundamentals do DIO 

## ▶️ Como executar

Com o [Node.js](https://nodejs.org/) instalado, rode na pasta do projeto:

```bash
node src/index.js
```

## 👥 Personagens

Cada personagem é um objeto com seus atributos:

| Personagem | Velocidade | Manobrabilidade | Poder |
|------------|:----------:|:---------------:|:-----:|
| Mario      | 4          | 3               | 3     |
| Luigi      | 3          | 4               | 3     |

Todos começam com **0 pontos**.

## 🎮 Regras do jogo

A corrida tem **5 rodadas**. Em cada rodada é sorteado um tipo de bloco da pista e cada jogador rola um dado de 6 lados (🎲 1 a 6). O resultado do dado é somado ao atributo correspondente ao bloco:

| Bloco         | Atributo usado  | O que acontece                                                        |
|---------------|-----------------|-----------------------------------------------------------------------|
| **Reta**      | Velocidade      | Quem tiver o maior total ganha **1 ponto**.                           |
| **Curva**     | Manobrabilidade | Quem tiver o maior total ganha **1 ponto**.                           |
| **Confronto** | Poder           | Quem perder o confronto **perde 1 ponto** (se tiver algum). 🥊        |

- Se der empate em uma rodada, ninguém ganha nem perde pontos.
- Os pontos nunca ficam negativos.

Ao final das 5 rodadas, quem tiver mais pontos vence a corrida 🏆. Se os pontos forem iguais, a corrida termina empatada 🤝.

## 🧩 Estrutura do código

Todo o código está em [`src/index.js`](src/index.js):

| Função                | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| `rollDice()`          | Rola um dado e retorna um número de 1 a 6.                                |
| `getRandomBlock()`    | Sorteia o bloco da rodada: `Reta`, `Curva` ou `Confronto`.                |
| `logRollResult()`     | Mostra no console o resultado do dado + atributo de um personagem.        |
| `playRaceEgnine()`    | Motor da corrida: executa as 5 rodadas e atualiza os pontos.              |
| `declareWinner()`     | Mostra a pontuação final e anuncia o vencedor.                            |
| `main()`              | Função principal, executada automaticamente, que inicia a corrida.        |

## 📋 Exemplo de saída

```
🏁Corrida entre Mario e Luigi começando!

🏁Rodada 1
Bloco sorteado: Reta
Mario 🎲 rolou um dado de Velocidade 5 + 4 = 9
Luigi 🎲 rolou um dado de Velocidade 2 + 3 = 5
🏆Mario venceu a rodada!
-------------------------------

...

🏁Resultado final!

Mario pontuou 3 pontos!
Luigi pontuou 1 pontos!
🏆Mario venceu a corrida!
```

> Como os resultados são aleatórios, cada execução gera uma corrida diferente.
