let $r := serialize(
  [number("NaN"), number("INF"), number("-INF")],
  map {"method": "json"}
)
return translate($r, " 	

", "")
