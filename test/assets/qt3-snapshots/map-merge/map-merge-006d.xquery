map:merge(
  (map:entry("foo", 3), map:entry("foo", 4)),
  map {"duplicates": "use-any"}
)
