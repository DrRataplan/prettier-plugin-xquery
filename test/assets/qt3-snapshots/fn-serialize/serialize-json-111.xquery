let $r := serialize(map {"abc": array { 1 to 10 }}, map {"method": "json"})
return translate($r, "
            	

", "")
