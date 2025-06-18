let $f := function-lookup(
  QName("http://www.w3.org/2001/XMLSchema", "IDREFS"),
  1
)
return $f("a b c")
