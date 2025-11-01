let $x := parse-xml("<doc><a/><b/><c/><d/><c/><e/></doc>")
return distinct-ordered-nodes(($x//c, $x//b, $x//a, $x//b))!name()
