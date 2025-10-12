let $f := if (current-date() gt xs:date("1900-01-01")) then
  head#1
else (
  abs#1, abs#1, abs#1, abs#1
)
return $f[1](/works/cucumber)
