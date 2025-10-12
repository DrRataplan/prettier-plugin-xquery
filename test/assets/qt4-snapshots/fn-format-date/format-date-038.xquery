format-date(
  xs:date("654321-01-01"),
  "[Y#0 " || codepoints-to-string(10) || "00            0]"
)
