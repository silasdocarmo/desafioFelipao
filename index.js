function escreva(frase){
    console.log(frase);
}

let heroi = prompt("Qual o nome do seu herói! ");
let heroXp = parseInt(prompt("Quanto de experiência o " + heroi + " possui?"));

if (heroXp < 1000){
    escreva("O nível do " + heroi + " é Ferro!");
}else if (heroXp > 1000 && heroXp <= 2000){
    escreva("O nível do " + heroi + " é Bronze!");
}else if (heroXp > 2000 && heroXp <= 5000){
    escreva("O nível do " + heroi + " é Prata!");
}else if (heroXp > 5000 && heroXp <= 7000){
    escreva("O nível do " + heroi + " é Ouro!");
}else if (heroXp > 7000 && heroXp <= 8000){
    escreva("O nível do " + heroi + " é Platina!");
}else if (heroXp > 8000 && heroXp <= 9000){
    escreva("O nível do " + heroi + " é Ascentende!");
}else if (heroXp > 9000 && heroXp <= 10000){
    escreva("O nível do " + heroi + " é Imortal!");
} else {
    escreva("O nível do " + heroi + " é Radiante!");
}