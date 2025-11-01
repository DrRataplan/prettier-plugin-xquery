let $x := parse-xml("<p><a/><b/><c/><d/></p>")
let $d := $x//d
let $c := $x//c
let $b := $x//b
let $a := $x//a
let $p := ($a | $b | $d)/parent::*
return distinct-ordered-nodes(($c, $b, $d, $p, $a, $b, $c, $d))!local-name()
