fn:csv-to-arrays(
  "one ,two | three, twenty  four ",
  map {"row-delimiter": "|", "trim-whitespace": true()}
)
