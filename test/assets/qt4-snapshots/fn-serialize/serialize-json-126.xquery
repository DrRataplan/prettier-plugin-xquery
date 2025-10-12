let $r := serialize(map {"a": xs:date("2011-04-06")}, map {"method": "json"})
return translate($r, " 	

", "")
