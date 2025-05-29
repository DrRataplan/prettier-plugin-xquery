let $r := serialize(map {"abc": (1 to 10)}, map {"method": "json"})
return translate($r, "
            	

", "")
