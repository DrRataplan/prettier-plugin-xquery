let $m := array { true(), true(), false(), true(), true(), false(), false() }
let $indices := (1 to 7)
return fn:filter($indices, $m)
