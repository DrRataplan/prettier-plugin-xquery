import module namespace func = "http://snelson.org.uk/functions/functional";

let $f := func:curry(concat#5)
return $f("foo")(" bar")(" baz")(" what's")(" next?")
