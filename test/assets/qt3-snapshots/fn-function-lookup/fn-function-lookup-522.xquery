let $f := function-lookup(
  fn:QName("http://www.w3.org/2001/XMLSchema", "dateTimeStamp"),
  1
)
return if (exists($f)) then
    year-from-dateTime($f("2012-05-25T11:42:00+01:00"))
  else
    2012
