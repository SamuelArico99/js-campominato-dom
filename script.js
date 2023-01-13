// Quando premi play si genera la griglia

const playButton = document.getElementById('play');
playButton.addEventListener('click',
    
      function () {

        const bombs = [];
        let clicked = 0

        console.log('bombs' , bombs , typeof bombs)

        const gridContainer = document.getElementById('grid-container');

        document.getElementById("container").style.display = 'block';

        for (let i = 0; i < 16; i++) {

          const newBomb = getUniqueRandom(1 , 100, bombs);
          bombs.push(newBomb);
          console.log(newBomb)
          
        }

        gridContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++) {

          const newCell = createNewCell(i);

          newCell.addEventListener('click',

          function () {
      

            const cellNumber = parseInt(this.innerText);
            if (bombs.includes(cellNumber)) {

              this.classList.add('bomb');
              alert('Hai perso! il tuo punteggio è '+ clicked );
              alert(' Premi Play per riniziare la partita');

            }
            else{

              this.classList.add('clicked');
              clicked++;


            }
            if (clicked == 84) {
              alert('Hai vinto, il tuo punteggio è '+ clicked);
              alert(' Premi Play per riniziare la partita');
            }
      
          }
        );

          gridContainer.append(newCell);
          
        }
         
      }

);

// Funzione per creare celle
function createNewCell(content) {

  const cell = document.createElement('div')

  cell.classList.add('cell');



  cell.innerHTML = content;

  return cell;

}

// NumeriRandom
function getUniqueRandom(min, max, arr) {

  let numeroRandom = generaNumeroRandom(min, max); 

while (arr.includes(numeroRandom)) {

  numeroRandom = generaNumeroRandom(min, max);

}

return numeroRandom;

}

// Genera numeri Random 
function generaNumeroRandom(min, max) {

  return Math.floor(Math.random() * (max - min + 1 )) + min;
  
} ;