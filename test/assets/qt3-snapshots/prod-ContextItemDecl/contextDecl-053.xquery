declare context item := $f();

declare variable $p := "base-uri";

declare variable $f := function-lookup(xs:QName("fn:" || $p), 0);

.
