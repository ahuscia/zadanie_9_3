// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

var textAfterReplace = text.replace('Velociraptor', dinosaur);

console.log(textAfterReplace.slice(0, textAfterReplace.length/2));