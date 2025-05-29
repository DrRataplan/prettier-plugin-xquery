parse-json(
  "[]"[current-date() lt xs:date("1900-01-01")],
  map {"escape": true(), "duplicates": "reject"}
)
