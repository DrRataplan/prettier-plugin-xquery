declare context item := <e/>;

declare variable $f := function-lookup(xs:QName("fn:" || $p), 0);

declare variable $p := "local-name";

$f()
