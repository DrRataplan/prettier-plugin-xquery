map:merge(
  (
    map:entry(3, "three"),
    map:entry(3.0e0, "threeD"),
    map:entry(xs:float("3.0"), "threeF")
  ),
  map {"duplicates": "use-last"}
)
