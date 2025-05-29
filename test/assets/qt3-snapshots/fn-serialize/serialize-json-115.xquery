let $r := serialize("
", map {"method": "json"})
return translate(normalize-space($r), "abcdef", "ABCDEF")
