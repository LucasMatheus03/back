let times = require("./dados.json")

function verTimes() {
    times.forEach((time) => { 
        console.log(time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(alaDireita)," + time.alaEsquerda + "(alaEsquerda)," + time.pivo + "(pivo)," + time.fixo + "(fixo)," + time.tecnico + "(tecnico)," + time.vitorias + "(vitorias)," + time.derrotas + "(derrotas),");
    });
}

verTimes();

function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json" , dadosEmTexto);
    console.log("Arquivo criado");
}

criarArquivo();


function marcarJogos(timeA, timeB, estadio, data, horario){
    let jogos=require("./jogos.json");
    jogo ={
        timeA: timeA,
        timeB: timeB,
        estadio: estadio,
        data: data,
        horario: horario,
    }
    jogos.push(jogo);
    jogosJSON = JSON.stringify(jogos);
    const fs=require('fs');
    fs.writeFileSync("jogos.json", jogosJSON);
}

marcarJogos("Portugal", "Argentina", "Ginásio Patão", "23/03/2025", "20:30")

//criarArquivo();

function mostrarJogos(){
    let jogos = require("./jogos.json");
    jogos.forEach((jogo)=>{
        console.log(jogo.timeA + " - " + jogo.timeB + " - " + jogo.estadio + " - " + jogo.data + " - " + jogo.horario + " - ")
    });
}
mostrarJogos()
