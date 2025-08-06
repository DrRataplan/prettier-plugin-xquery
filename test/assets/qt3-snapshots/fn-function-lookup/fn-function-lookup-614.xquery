let $f := function-lookup(
  QName("http://exslt.org/dates-and-times", "month-abbreviation"),
  1
)
return if (exists($f)) then
  $f("2012-02-28")
else
  "not-available"
