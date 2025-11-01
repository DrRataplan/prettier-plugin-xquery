let $x := parse-xml("<x/>")
return $x is distinct-ordered-nodes($x)
