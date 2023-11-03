// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name); // adds to the end  
}
destructivelyAppendCat("Meowth");

function destructivelyPrependCat(name) {
    return cats.unshift(name) // add to the beginning 
}
destructivelyPrependCat("Luna")

function destructivelyRemoveLastCat(){
    return cats.pop();// removes last element 
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    return cats.shift(); // remove first element 
}
destructivelyRemoveFirstCat();


function appendCat(name) {  

    const newCatAdded = [...cats, name ];
  
    return newCatAdded;
};

console.log(cats)
console.log(appendCat("Broom"))

function prependCat(name){
    
    return [name, ...cats];
    
};

console.log(prependCat('Arnold'))


function removeLastCat() {
    const copyOfCats = cats.slice();
   
    return copyOfCats.slice(0,2)
};

console.log(removeLastCat())

function removeFirstCat(){
    const copyOfCats = cats.slice();
    
    return copyOfCats.splice(1);
};

console.log(removeFirstCat())


