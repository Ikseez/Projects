var spans =document.querySelectorAll('span');
var occupations = ['janitor', 'web developer', 'plumber', 'cashier'];
var plurals = ['fish', 'monkeys', 'shoes', 'cacti'];
var adjective = ['red', 'round', 'delicious'];
var liquid = ['coca cola', 'water', 'acid', 'tide-pods'];
var verb = ['scream', 'flail', 'parkour'];
var femfriend= ['Ashley', 'Julie', 'Brynhildr'];
var noun = ['book', 'computer', 'apple', 'rubiks cube', 'magic eight ball'];
var famous = ['Morgan Freeman', 'Chuck Norris', 'Bruce Lee', 'Ghandi'];
var nationality = ['Greek', 'Roman', 'Byzantian', 'Australian'];
var femceb = ['Halle Berry', 'Oprah'];
var place = ['New York City', 'Hollywood Hills','Gallifrey'];
var number = ['1', '2,000', '2432', '25'];
console.log(spans.length);


for (var i =0; i < spans.length; i++){
    switch(spans[i].className){
        case 'place':
            spans[i].textContent = place[getRandNum (place.length)];
        break;
        case 'number':
            spans[i].textContent = number[getRandNum (number.length)];
        break;
        case 'occupation':
            spans[i].textContent = occupations[getRandNum (occupations.length)];
            break;
        case 'plural':
            spans[i].textContent = plurals[getRandNum (plurals.length)];
            break;
        case 'adjective':
            spans[i].textContent = adjective[getRandNum (adjective.length)];
            break;
        case 'liquid':
            spans[i].textContent = liquid[getRandNum (liquid.length)];
            break;
        case 'verb':
            spans[i].textContent = verb[getRandNum (verb.length)];
            break;
        case 'femfriend':
            spans[i].textContent = femfriend[getRandNum (femfriend.length)];
        break;
        case 'noun':
            spans[i].textContent = noun[getRandNum (noun.length)];
        break;
        case 'famous':
            spans[i].textContent = famous[getRandNum (famous.length)];
        break;
        case 'nationality':
            spans[i].textContent = nationality[getRandNum (nationality.length)];
        break;
        case 'femceb':
            spans[i].textContent = femceb[getRandNum (femceb.length)];
        break;
    default:

    }
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}

function settext(currSpan, testArray){
    currspan.textContent = testArray[getRandNum(testArray.length)]
}