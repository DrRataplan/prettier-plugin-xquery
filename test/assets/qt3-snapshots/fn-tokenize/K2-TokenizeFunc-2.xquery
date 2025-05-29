empty(
  fn:tokenize(
    ("abracadabra", current-time())[1] treat as xs:string,
    "(ab)|(a)"
  )[last() + 1]
)
