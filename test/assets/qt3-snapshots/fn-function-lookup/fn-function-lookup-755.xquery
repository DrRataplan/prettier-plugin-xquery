function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "collation-key"),
  1
)("abc") eq
  fn:collation-key("abc")
