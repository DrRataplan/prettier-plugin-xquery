for $i in (xs:double("NaN"), xs:float("NaN"), xs:integer(1), xs:short(1))
return is-NaN($i)
