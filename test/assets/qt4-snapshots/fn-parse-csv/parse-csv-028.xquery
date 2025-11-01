fn:parse-csv(
  "one ,two | three, twenty  four ",
  map {"row-delimiter": "|", "trim-whitespace": true()}
)
