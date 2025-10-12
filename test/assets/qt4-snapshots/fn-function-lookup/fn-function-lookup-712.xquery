(
  fn:function-lookup(
    fn:QName("http://www.w3.org/2005/xpath-functions", "node-name"),
    if (current-date() eq xs:date("1900-01-01")) then (
    ) else
      1
  ),
  fn:function-lookup(
    fn:QName("http://www.w3.org/2005/xpath-functions", "node-name"),
    if (current-date() eq xs:date("1900-01-01")) then
      1
    else (
    )
  )
)
