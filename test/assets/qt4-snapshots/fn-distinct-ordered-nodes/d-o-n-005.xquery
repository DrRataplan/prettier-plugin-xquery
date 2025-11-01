let $x := parse-xml("<x><a/><b/><c/><d/></x>")
let $d := $x//d
let $c := $x//c
let $b := $x//b
let $a := $x//a
return distinct-ordered-nodes(($c, $b, $d, $a, $b, $c, $d))!local-name()
