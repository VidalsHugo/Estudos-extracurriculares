
/* Verificador de Palíndromo
Retorna truese a string fornecida for um palíndromo. Caso contrário, retorne false.

Um palíndromo é uma palavra ou frase que é escrita da mesma maneira para frente e para trás, ignorando pontuação, maiúsculas e minúsculas e espaçamento.

Nota: Você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e transformar tudo no mesmo caso (maiúsculas ou minúsculas) para verificar palíndromos.

Passaremos strings com formatos variados, como racecar, RaceCar, e race CARentre outros.

Também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2e 2_A3*3#A2. */

function palindrome(str) {

    //regex para capturar alfa-numericos
    let regex = /[0-9a-zA-Z]/gi;
    let string = str.match(regex);
    string = string.join('')
  
    //coloca a string em minusculo
    string = string.toLowerCase();
    string = string.split('');
  
    //reverse + copia de string
    let string2 = string.slice();
    string2 = string2.reverse();
  
    //verifica se o reverse eh igual
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == string2[i]) {
        count += 1;
      }
      //caso seja igual retorna true
    }if(count == string.length){
      return true;
      //caso nao retorna false
    }else{
      return false;
    }
  
  }
  palindrome("eye");