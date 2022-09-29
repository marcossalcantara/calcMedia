function calc(){
    let ONE = parseInt(document.getElementById("one").value)
    let TWO = parseInt(document.getElementById("two").value)
    let THREE = parseInt(document.getElementById("three").value)
    let FOUR = parseInt(document.getElementById("four").value)
    
    let media = (ONE + TWO + THREE + FOUR)/4

    if (media >= 70){
        document.getElementById("exibir").innerHTML = `<article class="mostraMedia">
        <div class="mostraNota">
          <h2>${media}</h2>
        </div>
        <p>Parabéns, você foi aprovado!</p>
      </article>`
    }
    else if (media < 70){
        document.getElementById("exibir").innerHTML = `<article class="mostraMedia">
        <div class="mostraNota">
          <h2>${media}</h2>
        </div>
        <p>Estude um pouco mais. Você vai vencer!</p>
      </article>`
    }
}