let $x := 1
let $array := [0, 0, 0]
for $i in 1 to array:size($array) + 1
return array:insert-before($array, $i, $x)
