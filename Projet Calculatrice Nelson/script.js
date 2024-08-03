function remov (){
    let value = document.getElementById("output").innerHTML
    if(value == 0){
    value = " "
    document.getElementById("output").innerHTML = value
    }
    // else if(value === " "){
    //     value = "0"
    //     document.getElementById("output").innerHTML = value
    // }

}
// const effacerAvecZero = ()=>{
//   let value = document.getElementById('output').innerHTML
//   if(value == resultat){
//     value = '0'
//     document.getElementById('output').innerHTML = value
//   } else if(value = '0'){
//       value = resultat
//       document.getElementById('output').innerHTML = value
//   }

// }
const zero = (z)=>{
  return document.getElementById('output').innerHTML +=z
}
// document.getElementById('zeroButton').addEventListener('click', () => {
//     document.getElementById('output').innerHTML = '0';
//   });

const addValue = (v) =>{
    remov()
    return document.getElementById('output').innerHTML +=v;
}


function calculer() {
    try {
      let resultat = eval(document.getElementById('output').innerHTML);
      document.getElementById('output').innerHTML = resultat;
    } catch(erreur) {
      document.getElementById('output').innerHTML = 'Je ne comprends pas';
    }
  }

function effacerEntrer(){
    let output = document.getElementById("output").innerHTML
    document.getElementById('output').innerHTML = output.slice(0,-1)
    
}

function effacerTout() {
    document.getElementById('output').innerHTML = '';
  }

  const addVa = () => {
    let output = document.getElementById('output').innerHTML;
    if (output.charAt(output.length - 1) !== '.') {
      document.getElementById('output').innerHTML += '.';
    }
  }

  const Pourcentage = () => {
    try {
      const expression = document.getElementById('output').innerHTML;
      const result = eval(expression + '/100');
      document.getElementById('output').innerHTML = result;
    } catch (erreur) {
      document.getElementById('output').innerHTML = 'erreur';
    }
  }






