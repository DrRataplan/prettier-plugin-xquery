for $x in (1, xs:decimal(2), xs:float(3), xs:double(4))
return if ((ceiling($x)) instance of xs:integer) then
  "integer"
else if ((ceiling($x)) instance of xs:decimal) then
  "decimal"
else if ((ceiling($x)) instance of xs:float) then
  "float"
else if ((ceiling($x)) instance of xs:double) then
  "double"
else
  error()
