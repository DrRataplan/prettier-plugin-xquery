let $x := map {"x": 1, "y": 2}
let $y := map {"A": 1, "B": 2}
let $z := ($x, $y, [])
for $e in $z[position() lt 3]
return typeswitch ($e)
    case $A as array(*) return
      array:get($A, "A") (: deliberate: array:get requires an integer :)
    case $M as map(*) return
      map:get($M, "A")

    default return
      error()
