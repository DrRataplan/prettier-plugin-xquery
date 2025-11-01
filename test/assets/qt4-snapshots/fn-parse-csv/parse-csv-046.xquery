fn:parse-csv(
  "left,left|one,two|three,four",
  map {"row-delimiter": "|", "header": true()}
)
