let nomeHeroi="Lucas"
let expDoHeroi=9999
let nivel=" "

switch(true){
    case expDoHeroi < 1000:
        nivel = "Ferro"
        break
    case expDoHeroi <= 2000 :
        nivel = "Bronze"
        break
    case expDoHeroi <= 5000:
        nivel = "Prata"
        break
    case expDoHeroi <= 7000:
        nivel = "Ouro"
        break
    case expDoHeroi <= 8000:
        nivel = "Platina"
        break
    case expDoHeroi <= 9000:
        nivel = "Ascendente"
        break
    case expDoHeroi <= 10000:
        nivel = "Imortal"
            break
    case expDoHeroi >= 10001:
        nivel = "Radiante"
        break
}
console.log("heroi " + nomeHeroi, " nivel "+ nivel)