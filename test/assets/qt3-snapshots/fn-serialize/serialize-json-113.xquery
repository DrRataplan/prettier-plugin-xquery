let $r := serialize(
  map {"abc": map {"abc": map {"abc": 1}, "def": map {"def": 2}}},
  map {"method": "json"}
)
return translate($r, " 	

", "")
