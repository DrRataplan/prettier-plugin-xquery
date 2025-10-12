let $f := function-lookup(xs:QName("fn:count"), 1)
return apply($f, [("one", "two")])
