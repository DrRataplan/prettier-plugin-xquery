let $r := serialize("𝄞", map {"method": "json", "encoding": "ISO-8859-1"})
return translate(normalize-space($r), "abcdef", "ABCDEF")
