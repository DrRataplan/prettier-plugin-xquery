let $f := if (current-date() gt xs:date("1900-01-01")) then
  head#1
else
  count#1
return $f(5 to 10)
