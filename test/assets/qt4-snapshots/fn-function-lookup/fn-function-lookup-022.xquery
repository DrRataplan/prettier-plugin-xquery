let $fn := /function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "document-uri"),
  0
)
return parse-xml("<a/>")!$fn()
