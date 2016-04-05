/*
 * Tyler Deans
 * March 28, 2016
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
    // generate a number between 3 and 9
    return getRandomInt(3, 10);
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

/* generates a logical operation symbol randomly
 * certain symbols are generated based on the type of question
 * if the question type is string then
*/
function getFirstLogicSymbol(questionType) {

    if (questionType === "string") {
        var num = getRandomInt(1, 6);
        if (num == 1) {
            return ">=";
        } else if (num == 2) {
            return ">";
        } else if (num == 3) {
            return "<=";
        } else if (num == 4){
            return "<";
        } else {
            return "=";
        }
    } else{ // boolean or integer
        var num = getRandomInt(1, 5);
        if (num == 1) {
            return ">=";
        } else if (num == 2) {
            return ">";
        } else if (num == 3) {
            return "<=";
        } else {
            return "<";
        }
    }
}

/*
 * this function is used if there are two logical operators used
 * it returns the second logical operator (type string) based on the first operator
*/
function getSecondOperator(firstOperator) {

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

    return list;
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

/*
 *
*/
function getFoldFucntionString() {
    var mapString = "fun map (f,xs) =\n";
    mapString += "     case xs of\n";
    mapString += "         [] => []\n";
    mapString += "     | first::rest => (f first)::(map(f, rest))\n";
    return mapString;
}

FoldModel.prototype.evalFoldExpression = function() {
    this.foldExpression = "<pre>" + getFoldFucntionString();
    var questionType = getQuestionType();

    if (questionType === "integer") {
        var numList = numberListGenerator();
        var xVal = getRandomInt(0, 5);
        var yVal = getRandomInt(5, 10);

        this.foldExpression += "fun myFold (xs, lo, hi) =\n";
        // create a random generator for the logical symbol
        this.foldExpression += "    fold ((fn (x,y) => x + (if y >= lo andalso y <= hi then 1 else 0)), 0, xs)\n";
        this.foldExpression += "val myList = [";

        for (var i = 0; i < numList.length; i++) {
            // if it is the last element print the string without the comma
            if (i == (numList.length - 1)) {
                this.foldExpression += numList[i] + "]\n";
            } else { // otherwise print the string with the comma
                this.foldExpression += numList[i] + ', ';
            }
        }
        //this.foldExpression += "]\n";
        this.foldExpression += "val x = myFold (myList, " + xVal + ", " +  yVal + ")</pre>";

    } else if (questionType === "string"){
        var strList = stringListGenerator();
        var xVal = getRandomInt(3, 7);
        this.foldExpression += "fun myFold (xs, l) =\n";
        this.foldExpression += "    fold((fn (x,y) => x andalso String.size y < l), true, xs)\n";
        this.foldExpression += "val myList = [";

        for (var i = 0; i < strList.length; i++) {
            // if it is the last element print the string without the comma
            if (i == (strList.length - 1)) {
                this.foldExpression += strList[i] + "]\n";
            } else { // otherwise print the string with the comma
                this.foldExpression += strList[i] + ', ';
            }
        }
        this.foldExpression += "val x = myFold (myWordList, " + xVal + ")</pre>";

    } else { // boolean question
        var numList = numberListGenerator();
        var xVal = getRandomInt(3, 7);
        this.foldExpression += "fun myFold (xs, l) =\n";
        this.foldExpression += "    fold((fn (x,y) => x andalso y < l), true, xs)\n";
        this.foldExpression += "val myList = [";

        for (var i = 0; i < numList.length; i++) {
            // if it is the last element print the string without the comma
            if (i == (numList.length - 1)) {
                this.foldExpression += numList[i] + "]\n";
            } else { // otherwise print the string with the comma
                this.foldExpression += numList[i] + ', ';
            }
        }
        this.foldExpression += "val x = myFold (myList, " + xVal + ")</pre>";
    }

}

