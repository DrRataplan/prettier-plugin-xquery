contains-subsequence(
  replicate(parse-xml("<a><b/><c/></a>"), 4),
  replicate(parse-xml("<a><b/><c/></a>"), 2),
  op("is")
)
