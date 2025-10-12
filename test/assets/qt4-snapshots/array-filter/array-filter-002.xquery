array:filter(
  ["the cat", "sat", "on the mat"],
  function ($s) { count(tokenize($s, " ")) gt 1 }
)
