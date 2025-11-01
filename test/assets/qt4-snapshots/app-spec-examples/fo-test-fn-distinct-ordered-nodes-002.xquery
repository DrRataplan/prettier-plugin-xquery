let $x := [1, "a", true()]
return distinct-ordered-nodes(($x/*[1], $x/type(xs:integer))) => count()
