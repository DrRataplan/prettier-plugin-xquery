string-join(
  for $x in (1, xs:decimal(2), xs:float(3), xs:double(4))
  return if ((abs($x)) instance of xs:integer) then
      "integer"
    else if ((abs($x)) instance of xs:decimal) then
      "decimal"
    else if ((abs($x)) instance of xs:float) then
      "float"
    else if ((abs($x)) instance of xs:double) then
      "double"
    else
      error(),
  " "
)
