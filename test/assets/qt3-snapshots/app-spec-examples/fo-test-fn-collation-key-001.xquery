let $C := "http://www.w3.org/2013/collation/UCA?strength=primary"
return map:merge(
    (map {collation-key("A", $C): 1}, map {collation-key("a", $C): 2}),
    map {"duplicates": "use-last"}
  )(collation-key("A", $C))
