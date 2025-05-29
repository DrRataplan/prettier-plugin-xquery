array:sort(
  ["the cat", "sat", "on the mat"],
  "http://www.w3.org/2005/xpath-functions/collation/codepoint",
  function ($x) {
    count(tokenize($x, " "))
  }
)
