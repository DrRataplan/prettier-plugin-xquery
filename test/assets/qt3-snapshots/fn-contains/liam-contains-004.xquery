if (
  fn:contains(
    "hôtel",
    "HÔT",
    "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
  )
) then
  "fail"
else
  "pass"
