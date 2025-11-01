while-do(
  map {"string": "muckanaghederdauhaulia", "remove": "a"},
  function ($x) { characters($x?string) = $x?remove },
  function ($x) {
    map {
      "string": replace($x?string, $x?remove, ""),
      "remove": codepoints-to-string(string-to-codepoints($x?remove)!(. + 2))
    }
  }
)?string
