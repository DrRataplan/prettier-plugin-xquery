function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "collation-key"),
  2
)("abc", "http://www.w3.org/2005/xpath-functions/collation/codepoint") eq
  fn:collation-key("abc")
