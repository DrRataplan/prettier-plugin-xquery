let $r := serialize(
  map {"a": doc($uri)},
  map {"method": "json", "escape-solidus": false()}
)
return translate($r, codepoints-to-string((32, 9, 10, 13)), "")
