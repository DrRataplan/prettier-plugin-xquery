parse-json(
  '{"%":"x", "\u0025":"y"}',
  map {"escape": true(), "duplicates": "reject"}
)
