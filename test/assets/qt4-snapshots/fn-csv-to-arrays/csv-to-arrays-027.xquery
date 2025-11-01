fn:csv-to-arrays(
  "one ,two | three, four",
  map {"row-delimiter": "|", "trim-whitespace": false()}
)
