let $r :=
  serialize(
    parse-json('[1, 2, 3, "four", true, false, null]'),
    map {"method": "json"}
  )
return translate($r, " 	

", "")
