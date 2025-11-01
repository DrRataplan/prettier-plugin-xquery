deep-equal(
  ["bed time"],
  [" bed" || char("\n") || " time "],
  map {"whitespace": "normalize"}
)
