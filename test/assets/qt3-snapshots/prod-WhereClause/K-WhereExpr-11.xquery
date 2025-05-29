empty(
  for $i in (1, 2, current-time())[1]
  where xs:anyURI("")
  return true()
)
