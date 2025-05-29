let $x := <c/>
let $array := [<a/>, <b/>]
let $insert1 := array:insert-before($array, 1, $x)
let $insert2 := array:insert-before($array, 2, $x)
for $element in (array:flatten($insert1) union array:flatten($insert2))
let $name := $element/name()
order by $name
return $name
