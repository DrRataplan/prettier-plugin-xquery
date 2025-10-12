let $r := serialize(map {"a": doc($uri)}, map {"method": "json"})
return translate($r, codepoints-to-string((32, 9, 10, 13)), "")
