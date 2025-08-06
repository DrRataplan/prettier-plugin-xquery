for $x in (1, xs:decimal(2), xs:float(3), xs:double(4), xs:untypedAtomic(5)),
  $y in (6, xs:decimal(6), xs:float(6), xs:double(6), xs:untypedAtomic(6)),
  $result in ($x div $y)
return if ($result instance of xs:integer) then
  "integer"
else if ($result instance of xs:decimal) then
  "decimal"
else if ($result instance of xs:double) then
  "double"
else if ($result instance of xs:float) then
  "float"
else
  error()
