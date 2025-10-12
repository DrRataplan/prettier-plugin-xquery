let $baseUriFn := function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "base-uri"),
  1
)
return $baseUriFn(/root)
