let $p := if (current-date() lt xs:date("1900-01-01")) then
  "abc"
else
  42
return function-arity(contains(?, $p))
