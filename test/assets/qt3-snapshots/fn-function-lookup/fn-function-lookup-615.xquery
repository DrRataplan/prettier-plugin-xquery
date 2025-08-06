let $f := function-lookup(
  QName("http://exist-db.org/xquery/datetime", "days-in-month"),
  1
)
return if (exists($f)) then
  $f(xs:date("2012-02-28"))
else
  "not-available"
