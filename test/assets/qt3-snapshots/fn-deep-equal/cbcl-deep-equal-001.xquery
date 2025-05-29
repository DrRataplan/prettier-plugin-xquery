let $doc1 := <doc><?processing-instruction content ?></doc>
let $doc2 := <doc><!--comment--></doc>
return deep-equal($doc1, $doc2)
