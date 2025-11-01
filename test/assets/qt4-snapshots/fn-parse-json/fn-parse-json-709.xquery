'{"a":1, "b":2.01}'
  => parse-json(
    map {"number-parser": function ($x) { $x => xs:double() => xs:integer() }}
  )
