declare variable $doc := <root><test><x /><y /></test></root>;

$doc/test[x] union $doc/test[y]
