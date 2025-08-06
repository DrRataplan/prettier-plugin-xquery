declare default collation "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive";

let $keys := ("ABC", "abc", "aBc")
return [
  map:merge($keys!map:entry(., position())),
  distinct-values($keys),
  for $k in $keys
  group by $k
  return $k
]
