map:merge(
  (
    map:entry(xs:double("NaN"), 1),
    map:entry(xs:double("INF"), 2),
    map:entry(xs:double("-INF"), 3),
    map:entry(xs:float("NaN"), 1),
    map:entry(xs:float("INF"), 2),
    map:entry(xs:float("-INF"), 3)
  ),
  map {"duplicates": "use-last"}
)
