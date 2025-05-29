(
  fn:function-lookup(
    (
      if (current-date() eq xs:date("1900-01-01")) then
        fn:QName("http://www.w3.org/2005/xpath-functions", "node-name")
      else (
      )
    ),
    1
  ),
  fn:function-lookup(
    (
      if (current-date() eq xs:date("1900-01-01")) then (
      ) else
        fn:QName("http://www.w3.org/2005/xpath-functions", "node-name")
    ),
    1
  )
)
