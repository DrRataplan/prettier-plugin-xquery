let $d := codepoints-to-string(13)
return (
    matches("a" || $d || "
b", "^(?:a\r\nb)$"), matches("ab", "^(?:a\r\nb)$")
  )
