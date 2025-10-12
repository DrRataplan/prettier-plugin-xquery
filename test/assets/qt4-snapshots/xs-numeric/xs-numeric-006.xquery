let $x := if (current-date() lt xs:date("2500-01-01")) then
  -3
else
  "minus three"
return abs($x treat as xs:numeric)
