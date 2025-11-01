fn:csv-to-xml(
  "one ,two | three, four",
  map {"row-delimiter": "|", "trim-whitespace": false()}
)
