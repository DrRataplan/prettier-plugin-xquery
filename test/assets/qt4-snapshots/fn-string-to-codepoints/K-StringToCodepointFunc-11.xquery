string-join(
  for $code in string-to-codepoints("example.com/")
  return string($code),
  ""
) eq
  "10112097109112108101469911110947"
