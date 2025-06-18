let $r := serialize(
  map {1: "a", 2: "b", 4: "d", 10: "j", 7: "g"},
  map {"method": "json"}
)
return translate($r, " 	

", "")
