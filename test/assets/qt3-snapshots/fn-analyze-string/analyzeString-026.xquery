exactly-one(
  fn:analyze-string(
    concat("Mary", codepoints-to-string(13), "Jones"),
    "y.J"
  )/fn:non-match
)/string()
