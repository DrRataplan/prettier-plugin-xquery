declare variable $array-of-ints := [10, 20, 30];

declare variable $array-of-arrays := [["a", "b", "c"], ["d", "e", "f"]];

let $pos := 2
return $array-of-ints?($pos)
