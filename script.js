
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

function compterCaracteres(str) {
  return str.length;
}

function majusculeMots(phrase) {
  return phrase.split(' ')
               .map(mot => mot[0].toUpperCase() + mot.slice(1))
               .join(' ');
}

function maxTableau(tab) {
  return Math.max(...tab);
}

function minTableau(tab) {
  return Math.min(...tab);
}


function sommeTableau(tab) {
  return tab.reduce((acc, val) => acc + val, 0);
}


function filtrerPairs(tab) {
  return tab.filter(val => val % 2 === 0);
}

function factorielle(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


function estPremier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}


function fibonacci(n) {
  const suite = [0, 1];
  for (let i = 2; i < n; i++) {
    suite.push(suite[i-1] + suite[i-2]);
  }
  return suite.slice(0, n);
}



console.log("=== Chaînes ===");
console.log("Inverse 'bonjour' :", inverserChaine("bonjour"));
console.log("Nombre de caractères 'bonjour' :", compterCaracteres("bonjour"));
console.log("Majuscule mots 'bonjour tout le monde' :", majusculeMots("bonjour tout le monde"));

console.log("\n=== Tableaux ===");
const nombres = [5, 12, 3, 8, 1];
console.log("Max tableau :", maxTableau(nombres));
console.log("Min tableau :", minTableau(nombres));
console.log("Somme tableau :", sommeTableau(nombres));
console.log("Filtrer pairs :", filtrerPairs([1,2,3,4,5,6]));

console.log("\n=== Mathématiques ===");
console.log("Factorielle 5 :", factorielle(5));
console.log("Est premier 7 :", estPremier(7));
console.log("Est premier 10 :", estPremier(10));
console.log("Suite Fibonacci 10 termes :", fibonacci(10));