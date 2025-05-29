parse-json(
  '{"\u000a\u0025":"x", "\n%":"y"}',
  map {"escape": true(), "duplicates": "reject"}
)
