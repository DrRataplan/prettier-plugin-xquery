let $string := string-join((0 to 1000000)!codepoints-to-string(97 + (. mod 26)))
return deep-equal(
    characters($string),
    string-to-codepoints($string)!codepoints-to-string(.)
  )
