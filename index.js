let nomeHeroi="Lucas";
let expDoHeroi=10000;
let nivel=" ";

if(expDoHeroi < 1000){
    nivel="Ferro"}

     else if (expDoHeroi <= 2000){
        nivel = "Bronze";}
     else if (expDoHeroi <= 5000){
        nivel = "Prata";}
    else if (expDoHeroi <= 7000){
        nivel = "Ouro";}
    else if (expDoHeroi <= 8000){
        nivel = "Platina";}
    else if (expDoHeroi <= 9000){
        nivel = "Ascendente";}
    else if(expDoHeroi <= 10000){
        nivel = "Imortal";}
    else {expDoHeroi >= 10001
        nivel = "Radiante";
    }
    
console.log("O Herói de nome " + nomeHeroi, " está no nível de " + nivel)