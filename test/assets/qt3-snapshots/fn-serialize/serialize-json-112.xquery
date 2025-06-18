let $r := serialize(
  [map {"abc": 1}, map {"def": 2}, map {"ghi": 3}],
  map {"method": "json"}
)
return translate($r, " 	

", "")
