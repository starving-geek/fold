/*
 * Tyler Deans
 * April 8, 2016
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
        list[i] = getRandomInt(0, 10); // the element will be a number between 0 and 9
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
function getLogicSymbol(questionType) {

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
    } else { // boolean or integer
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
 * this function is used if there are two logical operators used (integer question)
 * it returns the second logical operator (type string) based on the first operator
*/
function getSecondSymbol(firstOperator) {
    if (firstOperator === ">=") {
        return "<=";
    } else if (firstOperator === ">") {
        return "<";
    } else if (firstOperator === "<=") {
        return ">=";
    } else {
        return ">";
    }
}

function isNumInRangeEqual(num, loVal, hiVal) {
    if (num >= loVal && num <= hiVal) {
        return true;
    } else {
        return false;
    }
}

function isNumInRange(num, loVal, hiVal) {
    if (num > loVal && num < hiVal) {
        return true;
    } else {
        return false;
    }
}

function isNumNotInRangeEqual(num, loVal, hiVal) {
    if (num <= loVal && num >= hiVal) {
        return true;
    } else {
        return false;
    }
}

function isNumNotInRange(num, loVal, hiVal) {
    if (num < loVal && num > hiVal) {
        return true;
    } else {
        return false;
    }
}

function getIntegerAnswer(list, loVal, hiVal, op1, op2) {
    var accumulator = 0;
    for (var i = 0; i < list.length; i++) {

        if (op1 === ">=" && op2 === "<=") {
            if (isNumInRangeEqual(list[i], loVal, hiVal)) {
                accumulator++;
            }
        } else if (op1 === ">" && op2 === "<") {
            if (isNumInRange(list[i], loVal, hiVal)) {
                accumulator++;
            }
        } else if (op1 === "<=" && op2 === ">=") {
            if (isNumNotInRangeEqual(list[i], loVal, hiVal)) {
                accumulator++;
            }
        } else {
            if (isNumNotInRange(list[i], loVal, hiVal)) {
                accumulator++;
            }
        }
    }

    return accumulator;
}

function isStrLessThan(str, len) {
    return str.length < len;
}

function isStrLessThanEqual(str, len) {
    return str.length <= len;
}

function isStrGreaterThan(str, len) {
    return str.length > len;
}

function isStrGreaterThanEqual(str,len) {
    return str.length >= len;
}

function isStrEqual(str, len) {
    return str.length == len;
}

function getStringAnswer(list, len, logicOp) {
    var accumulator = 0;

    for (var i = 0; i < list.length; i++) {
        if (logicOp === "<") {
            if (isStrLessThan(list[i], len)) {
                accumulator++;
            }
        } else if (logicOp === "<=") {
            if (isStrLessThanEqual(list[i], len)) {
                accumulator++;
            }
        } else if (logicOp === ">") {
            if (isStrGreaterThan(list[i], len)) {
                accumulator++;
            }
        } else if (logicOp === ">=") {
            if (isStrGreaterThanEqual(list[i], len)) {
                accumulator++;
            }
        } else {
            if (isStrEqual(list[i], len)) {
                accumulator++;
            }
        }
    }

    return accumulator;
}

function isNumLessThan(num, l) {
    return num < l;
}

function isNumLessThanEqual(num, l) {
    return num <= l;
}

function isNumGreaterThan(num, l) {
    return num > l;
}

function isNumGreaterThanEqual(num, l) {
    return num >= l;
}

function isNumEqual(num, l) {
    return num == l;
}

function getBooleanAnswer(list, len, logicOp) {
    var accumulator = 0;

    for (var i = 0; i < list.length; i++) {
        if (logicOp === "<") {
            if (isNumLessThan(list[i], len)) {
                accumulator++;
            } else {
                accumulator += 0;
            }

        } else if (logicOp === "<=") {
            if (isNumLessThanEqual(list[i], len)) {
                accumulator++;
            } else {
                accumulator += 0;
            }
        } else if (logicOp === ">") {
            if (isNumGreaterThan(list[i], len)) {
                accumulator++;
            } else {
                accumulator += 0;
            }
        } else {
            if (isNumGreaterThanEqual(list[i], len)) {
                accumulator++;
            } else {
                accumulator += 0;
            }
        }
    }

    return accumulator;
}

/*
 * Creates a string representation of the fold method
*/
function getFoldFunctionString() {
    var foldString = "fun fold (f,acc,xs) =\n";
    foldString += "     case xs of\n";
    foldString += "         [] => acc\n";
    foldString += "     | x::xs' => fold (f, f(acc,x), xs')\n";
    return foldString;
}

/*
 * Generates the code snippet which will bw displayed on the web page
 * Also calculates the answer to the question based on the question type
*/
FoldModel.prototype.evalFoldExpression = function() {
    this.foldExpression = "<pre>" + getFoldFunctionString() + "\n";
    var questionType = getQuestionType();

    if (questionType === "integer") {
        var numList = numberListGenerator(6);
        var xVal = getRandomInt(0, 5);
        var yVal = getRandomInt(5, 10);
        var logicOp1 = getLogicSymbol(questionType);
        var logicOp2 = getSecondSymbol(logicOp1);

        this.foldExpression += "fun myFold (xs, lo, hi) =\n";
        // create a random generator for the logical symbol
        this.foldExpression += "    fold ((fn (x,y) => x + (if y " + logicOp1 + " lo andalso y " + logicOp2 + " hi then 1 else 0)), 0, xs)\n\n";
        this.foldExpression += "val myList = [";

        for (var i = 0; i < numList.length; i++) {
            // if it is the last element print the string without the comma
            if (i == (numList.length - 1)) {
                this.foldExpression += numList[i] //+ "]\n";
            } else { // otherwise print the string with the comma
                this.foldExpression += numList[i] + ', ';
            }
        }
        this.foldExpression += "]\n";
        this.foldExpression += "val x = myFold (myList, " + xVal + ", " +  yVal + ")</pre>";

        return getIntegerAnswer(numList, xVal, yVal);

    } else if (questionType === "string") {
        var strList = stringListGenerator();
        var xVal = getRandomInt(3, 7);
        var logicOp = getLogicSymbol(questionType);

        this.foldExpression += "fun myFold (xs, l) =\n";
        this.foldExpression += "    fold((fn (x,y) => x andalso String.size y " + logicOp + " l), true, xs)\n\n";
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
        return getStringAnswer(strList, xVal, logicOp);

    } else { // boolean question
        var numList = numberListGenerator(6);
        var xVal = getRandomInt(3, 7);
        var logicOp = getLogicSymbol(questionType);

        this.foldExpression += "fun myFold (xs, l) =\n";
        this.foldExpression += "    fold((fn (x,y) => x andalso y "+ logicOp + " l), true, xs)\n\n";
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
        return getBooleanAnswer(numList, xVal, logicOp);
    }

}

FoldModel.prototype.getFoldExpression = function() {
    return this.foldExpression;
}

