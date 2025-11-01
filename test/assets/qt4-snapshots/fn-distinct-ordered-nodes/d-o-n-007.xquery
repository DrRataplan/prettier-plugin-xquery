let $x := parse-xml("<p><a q='1'/><b r='2'/><c s='3'/><d t='4'/></p>")
let $y := random-number-generator()?permute($x//* | $x//@*)
let $z := distinct-ordered-nodes(($y, $x//d))
return $z!local-name()
