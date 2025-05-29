let $doc1 := <?foo bar?>
let $doc2 := <?foo bar?>
return deep-equal($doc1, $doc2)
