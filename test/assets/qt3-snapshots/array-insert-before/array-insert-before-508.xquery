let $x := <x />
let $array := [<e />, <f />, <g />]
for $i in 1 to array:size($array) + 1
return array:insert-before($array, $i, $x)
