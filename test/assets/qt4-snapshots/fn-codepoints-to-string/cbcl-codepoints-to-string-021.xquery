let $y := 65536 * 65536
return for $x in $y to $y + 10
  return codepoints-to-string(65 to $x)
