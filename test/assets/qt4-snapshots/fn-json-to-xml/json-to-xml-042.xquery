fn:json-to-xml(
  '{"\n":1, "\u000A":2}',
  map {"escape": true(), "duplicates": "reject"}
)
