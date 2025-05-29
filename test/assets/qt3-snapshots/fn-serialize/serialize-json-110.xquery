let $r :=
  serialize(
    parse-json("[[1, 2], [3, 4], [5, 6], [7], [], [null]]"),
    map {"method": "json"}
  )
return translate($r, " 	

", "")
