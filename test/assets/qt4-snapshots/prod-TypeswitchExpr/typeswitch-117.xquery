let $x := [map {"x": 1, "y": 2}, "x"]
let $y := [array { 1, 2, 3 }, 1]
let $z := ($x, $y)
for $e in $z
return typeswitch ($e?1)
    case $A as array(*) return
      array:get($A, $e?2)
    case $M as map(*) return
      map:get($M, $e?2)

    default return
      error()
