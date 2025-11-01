'{"a":1, "b":+2.01}'
  => parse-json(map {"number-parser": xs:decimal#1, "liberal": true()})
