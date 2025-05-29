let $r := serialize(map {"abc": 23, "xyz": 49}, map {"method": "json"})
return translate($r, " 	

", "")
