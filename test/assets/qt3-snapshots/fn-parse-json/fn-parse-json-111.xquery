parse-json(
  '{"%\u0010%":"x", "%\n%":"y"}',
  map {"escape": true(), "duplicates": "reject"}
)
