declare variable $array-of-ints := [10, 20, 30];

declare variable $array-of-arrays := [["a", "b", "c"], ["d", "e", "f"]];

array:filter($array-of-ints, function ($n) { $n > 15 })
