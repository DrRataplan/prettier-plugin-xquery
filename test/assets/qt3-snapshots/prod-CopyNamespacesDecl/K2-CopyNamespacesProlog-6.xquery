declare namespace ns = "http://example.com/";

<e xmlns:appearsUnused="http://example.com/"> {
  <b> <appearsUnused:c/> </b>
} </e>/(
  for $n in (., b, b/ns:c), $i in in-scope-prefixes($n)
  order by $i
  return ($i, "|")
)
