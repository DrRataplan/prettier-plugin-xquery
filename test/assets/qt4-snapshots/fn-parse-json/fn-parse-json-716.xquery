'{"a":1, "b":0002.12345678901234567890}'
  => parse-json(map {"number-parser": identity#1, "liberal": true()})
