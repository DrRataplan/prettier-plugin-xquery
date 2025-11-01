fn:csv-to-arrays(
  "one.two|three.four" || char(10) || "five.six",
  map {"row-delimiter": ("|", char(10)), "field-delimiter": "."}
)
