declare namespace a = "http://example.com/1";
declare namespace b = "http://example.com/2";
declare namespace unused = "http://example.com/3";
declare namespace unused2 = "http://example.com/4";

<unused:e />[2],
<e a:n1="content" b:n1="content"><a:n1 /></e>/(
  for $i in in-scope-prefixes(.)
  order by $i
  return $i,
  "|",
  for $i in a:n1/in-scope-prefixes(.)
  order by $i
  return $i
)
