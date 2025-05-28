declare namespace a = "http://example.com/1";
declare namespace b = "http://example.com/2";

<e a:n1="content" b:n1="content" />/(
  for $i in in-scope-prefixes(.)
  order by $i
  return $i
)
