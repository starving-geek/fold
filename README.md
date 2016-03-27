# fold

### Fold Function
    fun fold (f,acc,xs) =
        case xs of
             []    => acc
            | x::xs' => fold (f, f(acc,x), xs')

---
val myList = [...]    <------ list with [3, 9] random numbers [0, 9]

val x = fold ((fn (x,y) => x+y), 0, foo)

---
### Integers

(* how many things in the list are between lo and hi *)
    fun myFold (xs, lo, hi) =
            fold ((fn (x,y) => x + (if y >= lo andalso y <= hi then 1 else 0)), 0, xs)

(* how many things in the list are between lo and hi *)
    fun myFold (xs, lo, hi) =
            fold ((fn (x,y) => x + (if y > lo andalso y < hi then 1 else 0)), 0, xs)

(* how many things in the list are not between lo and hi *)
    fun myFold (xs, lo, hi) =
            fold ((fn (x,y) => x + (if y <= lo orelse y >= hi then 1 else 0)), 0, xs)

(* how many things in the list are not between lo and hi *)
        fun myFold (xs, lo, hi) =
                fold ((fn (x,y) => x + (if y < lo orelse y > hi then 1 else 0)), 0, xs)
---
### Example
    val myList = [...]    <------ list with [3, 9] random numbers [0, 9]

    val x = myFold (myList, <x>, <y>)   <------ x = int [0, 4]; y = int[5, 9]

    val myList = [1, 3, 6, 2, 9, 2]
    val x = myFold (myList, 2, 6)  (in between with >= and <=) --> 4
    val y = myFold (myList, 2, 6)  (in between with > and <)  --> 1

---
### String

    (* all strings have less than l characters *)
        fun myFold (xs, l) =
                fold((fn (x,y) => x andalso String.size y < l), true, xs)

    (* all strings have less than l characters *)
        fun myFold (xs, l) =
                fold((fn (x,y) => x andalso String.size y <= l), true, xs)

    (* all strings have more than l characters *)
        fun myFold (xs, l) =
                fold((fn (x,y) => x andalso String.size y > l), true, xs)

    (* all strings have more than l characters *)
        fun myFold (xs, l) =
                fold((fn (x,y) => x andalso String.size y >= l), true, xs)

    (* all strings have exactly l characters *)
        fun myFold (xs, l) =
                fold((fn (x,y) => x andalso String.size y = l), true, xs)
---
### Example
    val wordList = ["soup", "dog", "orange", "park", "cat", "helps", "talks", "castle", "genius", "flaming"]  
    (* choose 3 to 9 randomly from this word bank *)

    val x = myFold (wordList, <x>)  <--- number from 3 to 6

    val myWordList = ["soup", "park", "cat"]
    val x = myFold (myWordList, 3)  (using >) --> false
    val x = myFold (myWordList, 3)  (using >=) --> true
---
### Boolean

    val myList = [...]    
    (* list with [3, 9] random numbers [0, 9] *)

    (* all numbers in the list are less than l *)
    fun myFold (xs, l) =
            fold((fn (x,y) => x andalso y < l), true, xs)

    (* all numbers in the list are less than l *)
    fun myFold (xs, l) =
            fold((fn (x,y) => x andalso y <= l), true, xs)

    (* all numbers in the list are greater than l *)
    fun myFold (xs, l) =
            fold((fn (x,y) => x andalso y > l), true, xs)

    (* all numbers in the list are greater than l *)
    fun myFold (xs, l) =
            fold((fn (x,y) => x andalso y >= l), true, xs)

    val x = myFold (wordList, <x>)  <--- number from 3 to 6
