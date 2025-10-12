let $r := serialize([0, 0, xs:untypedAtomic("abcd")], map {"method": "json"})
return translate($r, " 	

", "")
