/*
 * Tyler Deans
 * March 26, 2016
 */



function FoldModel(_simModel) {
    // save a link to the model
    this.simModel = _simModel;
}

function getQuestionType() {
    var randNum = getRandomInt(1, 4); // random number between 1 and 3

    if (randNum === 1) {
        return "integer";
    } else if (randNum === 2) {
        return "string";
    } else {
        return "boolean";
    }
}
// returns the number of elements in a number list
function getNumOfElements() {
    // generate a number between 3 and 5
    return getRandomInt(3, 6);
}

// generates a list of numbers
// the length of the list is based on the numElements parameter
function numberListGenerator(numElements) {
    var list = [];
    for (var i = 0; i < numElements; i++) {
        list[i] = getRandomInt(0, 10); // the element will be number between 0 and 9
    }
    return list;
}

function getRandomString(strList) {
    var index = getRandomInt(0, strList.length);
    return strList[index];
}

/*
 * The string list generator is similar to the number list generator
 * Except that the elements come from a large list of strings
 * The string from that list is picked randomly (index is randomly chosen)
 * Then the string is appended to the list
 *
 * A method to determine the question type (number or string)
 * returns a string (number or string)
 *
 */
function stringListGenerator() {
    var numOfElements = getNumOfElements();
    var stringList = ["soup", "dog", "orange", "park", "cat", "helps", "talks", "castle", "genius", "flaming"];
    var list = [];
    for (var i = 0; i < numOfElements; i++) {
        list[i] = getRandomString(stringList);
    }
    return list;
}

function getMathAnswer(operator, list, yVal) {
    if (operator === "+") {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i] + yVal;
        }
    } else {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i] * yVal;
        }
    }

    return list
}

function getStringAnswer(list) {
    var stringSizeList = [];
    for (var i = 0; i < list.length; i++) {
        stringSizeList.push(list[i].length);
    }

    return stringSizeList;
}

function getBooleanAnswer() {

}


function getFoldFucntionString() {
    var mapString = "fun map (f,xs) =\n";
    mapString += "     case xs of\n";
    mapString += "         [] => []\n";
    mapString += "     | first::rest => (f first)::(map(f, rest))\n";
    return mapString;
}

MapModel.prototype.evalFoldExpression = function() {

}

