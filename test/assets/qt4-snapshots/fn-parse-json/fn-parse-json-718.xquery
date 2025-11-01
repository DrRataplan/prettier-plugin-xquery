'{"a":1, "b":1.2}'
  => parse-json(map {"number-parser": function ($x) { $x, 20 }})
