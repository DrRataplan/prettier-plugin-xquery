let $doc1 := <?foo test?>
let $doc2 := <?bar test?>
return deep-equal($doc1, $doc2)
