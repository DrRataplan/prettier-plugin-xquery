for $x in (1, xs:decimal(2), xs:float(3), xs:double(4))
return if ((round-half-to-even($x)) instance of xs:integer) then
  "integer"
else if ((round-half-to-even($x)) instance of xs:decimal) then
  "decimal"
else if ((round-half-to-even($x)) instance of xs:float) then
  "float"
else if ((round-half-to-even($x)) instance of xs:double) then
  "double"
else
  error()
