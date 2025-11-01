'{"a":1, "b":2.01}'
  => json-to-xml(
    map {"number-parser": function ($x) { $x => xs:double() => xs:integer() }}
  )
