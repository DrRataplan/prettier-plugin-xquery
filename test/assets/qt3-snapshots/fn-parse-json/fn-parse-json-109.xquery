parse-json(
  '{"/":"x", "\/":"y"}',
  map {"escape": true(), "duplicates": "reject"}
)
