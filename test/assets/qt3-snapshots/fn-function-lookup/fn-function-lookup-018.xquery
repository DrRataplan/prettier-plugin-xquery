let $baseUriFn := /root/function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "base-uri"),
  0
)
return /root/extra/$baseUriFn()
