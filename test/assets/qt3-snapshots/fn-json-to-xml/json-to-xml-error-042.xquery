fn:json-to-xml(
  '{"A":1, "A":2}',
  map {"validate": true(), "duplicates": "retain"}
)
