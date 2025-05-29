fn:function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "node-name"),
  if (
    fn:current-dateTime() eq fn:dateTime(fn:current-date(), fn:current-time())
  ) then (
  ) else
    1
)
