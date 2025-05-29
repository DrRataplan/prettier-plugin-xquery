let $r :=
  serialize(
    [map {"abc": map {"abc": 1}}, map {"def": map {"def": 2}}, map {
      "ghi": map {"ghi": 3}
    }],
    map {"method": "json", "indent": true()}
  )
return translate($r, codepoints-to-string((32, 9, 10, 13)), "")
