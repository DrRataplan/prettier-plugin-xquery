fn:matches(
  concat("abcd", codepoints-to-string(10), "defg", codepoints-to-string(10)),
  "g$"
)
