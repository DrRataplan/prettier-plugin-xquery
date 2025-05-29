let $x := <x/>
let $array := [<e/>, <f/>, <g/>]
for $i in 1 to array:size($array)
return array:put($array, $i, $x)
