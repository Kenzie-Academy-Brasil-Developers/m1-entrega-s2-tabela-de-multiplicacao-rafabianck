function tabuada() {
    let tabuada = [];
  
    for (let linha = 0; linha <= 10; linha++) {
      tabuada.push(new Array(11));
      for (let coluna = 0; coluna <= 10; coluna++) {
        tabuada[linha][coluna] = linha * coluna;
      }
    }
    console.table(tabuada);
  }

// BÔNUS

function tabuadaDinamica(n) {
    let tabuada = [];
  
    for (let linha = 0; linha <= n; linha++) {
      tabuada.push(new Array(n + 1));
      for (let coluna = 0; coluna <= n; coluna++) {
        tabuada[linha][coluna] = linha * coluna;
      }
    }
    console.table(tabuada);
  }


