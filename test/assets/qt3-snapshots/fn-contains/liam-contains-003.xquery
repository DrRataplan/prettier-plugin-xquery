if (
  fn:contains(
    "hôtel",
    "hôt",
    "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
  )
) then
  "pass"
else
  "huh"
