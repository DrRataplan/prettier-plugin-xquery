'{"a":1, "b":+2.01}'
  => json-to-xml(map {"number-parser": xs:decimal#1, "liberal": false()})
