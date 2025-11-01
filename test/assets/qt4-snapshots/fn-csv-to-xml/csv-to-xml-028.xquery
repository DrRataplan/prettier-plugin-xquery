fn:csv-to-xml(
  "one ,two | three, twenty  four ",
  map {"row-delimiter": "|", "trim-whitespace": true()}
)
