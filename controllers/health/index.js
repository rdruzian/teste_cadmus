'use strict';
import terreno from '../../public/tereno'

module.exports = function (router) {
    var mapa = terreno.desenha() 
    router.get('/', async function (req, res) {
        res.send(mapa)
    });

    router.post('/aero', async function(req, res){
        res.send(busca(mapa, 0, 0, 0))
    })

    router.post('/aeroportos', async function(req, res){
        res.send(aeroportos(mapa))
    })
};

function busca(vet, count, linha, coluna){
    for(var i=linha; i<10; i++){
        for(var j=coluna; j<10; j++){
            if(vet[i][j]=='*' && vet[i+1][j]!='*' || vet[i][j+1]!='*'){
                count++
                busca(vet, count, i+1, j+1)
            }
            else if(vet[i+1][j] =='A' || vet[i][j+1] =='A'){
                return ++count
            }
        }
    }
}

function aeroportos(vet){
    var aero = 0
    var dias = 0
    for(var i=linha; i<10; i++){
        for(var j=coluna; j<10; j++){
            if(vet[i][j]=='A'){
                aero++
            }
        }
    }
    while(aero != 0){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                if(vet[i][j]=='*' && vet[i+1][j]!='*' || vet[i][j+1]!='*'){
                    dias++
                }
                else if(vet[i][j]=='A'){
                    aero--
                }
            }
        }
        return dias
    }
}


