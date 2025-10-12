let $doc1 := <?cheese brie?>
let $doc2 := <?cheese stilton?>
return deep-equal($doc1, $doc2)
