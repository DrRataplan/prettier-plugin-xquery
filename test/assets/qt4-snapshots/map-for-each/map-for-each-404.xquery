string-join(
  map:for-each(map {"a": 1, "b": 2, "c": 3}, map {"b": "B", "c": "C"})
)
