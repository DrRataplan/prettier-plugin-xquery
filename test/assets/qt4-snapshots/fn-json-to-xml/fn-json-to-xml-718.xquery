'{"a":1, "b":1.2}'
  => json-to-xml(map {"number-parser": function ($x) { $x, 20 }})
