let $r := serialize((1, 2, 3, "four", true(), false()), map {"method": "json"})
return translate($r, " 	

", "")
