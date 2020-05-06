function desenha(){
  var linha = []
  var coluna = []
  let terreno = [[10],[10]]
  const aeroportos = Math.floor(Math.random() * (10 - 3 + 1) + 3)
  const nuvens = Math.floor(Math.random() * ((10 - aeroportos) - 4 + 1) + 4)
  
  for(var i=0;i<aeroportos; i++){
    linha[i] = Math.floor(Math.random() * 10)
    coluna[i] = Math.floor(Math.random() * 10)
  }

  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      if(linha[i] == i && coluna[j] == j){ 
        terreno[i][j] = 'A'
      }
    }
  }

  for(var i=0;i<nuvens; i++){
    linha[i] = Math.floor(Math.random() * 10)
    coluna[i] = Math.floor(Math.random() * 10)
  }

  for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
      if(linha[i] == i && coluna[j] == j && terreno[i][j] != 'A'){ 
        terreno[i][j] = '*'
      } else if(terreno[i][j] != 'A' && terreno[i][j] != '*'){
        terreno[i][j] = '.'
      }
    }
  }
  return terreno
}
export default desenha