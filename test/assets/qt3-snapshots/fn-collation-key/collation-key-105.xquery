let $C :=
  "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
return map:merge(
    (map {collation-key("A", $C): 1}, map {collation-key("a", $C): 2}),
    map {"duplicates": "use-last"}
  )?(collation-key("A", $C))
