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

val myList = [...]    <------ list with [3, 9] random numbers [0, 9]

val x = myFold (myList, <x>, <y>)   <------ x = int [0, 4]; y = int[5, 9]

val myList = [1, 3, 6, 2, 9, 2]
val x = myFold (myList, 2, 6)  (in between with >= and <=) --> 4
val y = myFold (myList, 2, 6)  (in between with > and <)  --> 1

---

