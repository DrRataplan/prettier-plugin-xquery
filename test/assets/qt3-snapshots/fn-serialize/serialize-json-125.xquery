let $r := serialize([0, 0, xs:date("2011-04-06")], map {"method": "json"})
return translate($r, " 	

", "")
